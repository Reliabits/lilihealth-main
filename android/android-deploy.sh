#!/bin/bash

WORKSPACE="."

if [ -f .env ]; then
  export $(echo $(cat $WORKSPACE/.env | sed 's/#.*//g'| xargs) | envsubst)
else
  echo "env file does not exist"
  exit 1
fi

Identifier=$(curl https://upload.diawi.com/ \
  --progress-bar \
  -F token="$DIAWI_APIKEY" \
  -F file=@android/app/build/outputs/apk/release/app-release.apk \
  -F callback_emails="$DIAWI_EMAIL" | python3 -c "import sys,json; print (json.load(sys.stdin)['job'])")

sleep 2

echo "Got Diawi JobID: ${Identifier}"
echo "Waiting for 5 seconds"

sleep 5

echo "Checking app status"
Link=$(curl "https://upload.diawi.com/status?token=${DIAWI_APIKEY}&job=${Identifier}" | python3 -c "import sys,json; print (json.load(sys.stdin)['link'])")

echo $Link | pbcopy

echo "Diawi Link: $Link"