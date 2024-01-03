#!/bin/bash

set -e

#
# .env must exist in this format OR define these keys in this file
# PROJECT_NAME=testproject
# Create deployment keys at https://appstoreconnect.apple.com/access/api
# Copy the downloaded file (AuthKey) to ~/.appstoreconnect/private_keys/AuthKey_{IOS_KEY_NAME}.p8
# IOS_KEY_NAME=
# IOS_ISSUER=
# 

WORKDIR="."
PROJDIR=${WORKDIR}/ios

if [ -f .env ]; then
  export $(echo $(cat $WORKDIR/.env | sed 's/#.*//g'| xargs) | envsubst)
fi

if [ "$PROJECT_NAME" == "" ] || [ "$IOS_KEY_NAME" == "" ] || [ "$IOS_ISSUER" == "" ]; then
  echo "Required vars are not defined"

  exit 1
fi

EXECUTABLES_PATH="/Applications/Xcode.app/Contents/Developer/usr/bin"
WORKSPACE_NAME="${PROJECT_NAME}.xcworkspace"
ARCHIVE_PATH="build/${PROJECT_NAME}.xcarchive"
TARGET_SDK="iphoneos"

CURRENTDATE=$(date '+%Y-%m-%d-%H-%M-%S')
RELEASE_DIR="${PROJECT_NAME}-releases-${CURRENTDATE}"
EXPORT_PATH="$WORKDIR/build/$RELEASE_DIR"

cd "$PROJDIR"
echo "Increase Version Build Code"
# agvtool next-version -all # will increase build code to next version in all targets

rm -rf "${PROJECT_NAME}-releases-*";
rm -rf $ARCHIVE_PATH;

echo "Cleaning Project"
"${EXECUTABLES_PATH}/xcodebuild" -project "${PROJECT_NAME}.xcodeproj" -scheme "$PROJECT_NAME" -sdk "$TARGET_SDK" -configuration Release clean

echo "Building Project"
"${EXECUTABLES_PATH}/xcodebuild" -scheme "$PROJECT_NAME" -workspace "$WORKSPACE_NAME" -sdk "$TARGET_SDK" -allowProvisioningUpdates -configuration Release archive -archivePath "$ARCHIVE_PATH" BUILD_LIBRARY_FOR_DISTRIBUTION=YES

# exportOptions.plist content
# ---------------------------
# <?xml version="1.0" encoding="UTF-8"?>
# <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
# <plist version="1.0">
# <dict>
#     <key>method</key>
#     <string>app-store</string>
#     <key>teamID</key>
#     <string>{YOUR TEAM ID}</string>
#     <key>teamName</key>
#     <string>{YOUR TEAM NAME}</string>
# </dict>
# </plist>

echo "Export IPA" # exportOptions.plist must exists in the $PROJDIR directory
"${EXECUTABLES_PATH}/xcodebuild" -exportArchive -archivePath "$ARCHIVE_PATH" -exportOptionsPlist exportOptions.plist -exportPath "$EXPORT_PATH" -allowProvisioningUpdates

xcrun altool --upload-app --type ios --file "$EXPORT_PATH/${PROJECT_NAME}.ipa" --apiKey "$IOS_KEY_NAME" --apiIssuer "$IOS_ISSUER"

cd ..