/* eslint-disable prettier/prettier */
import { format, parse } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';



export default class Utils {
    static formateDate(date: Date) {
        return format(date, 'dd-MM-yyyy');
    }

    static parseDate(date: string) {
        return parse(date, 'dd-MM-yyyy', new Date())
    }

    static setLocalStorageData = async (key: string, value?: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // catch error silently
        }
    }

    static getLocalStorageData = async (keys: Array<string>) => {
        try {
            const jsonValue = await AsyncStorage.multiGet(keys);
            return jsonValue;
        } catch (e) {
            return e
        }
    };

    static deleteLocalStorageData = async (keys: Array<string>) => {
        try {
            await AsyncStorage.multiRemove(keys);
        } catch (e) {
            // catch error silently
        }
    };

    static getFacebookData = async () => {
        const response = await LoginManager.logInWithPermissions(['public_profile', 'email'])
            .then((result) => !result.isCancelled)
            .then(() => AccessToken.getCurrentAccessToken())
            .then((data) => data)
            .then((data) =>
                fetch(
                    `https://graph.facebook.com/me?fields=email,id,first_name,last_name,picture&access_token=${data?.accessToken}`
                )
                    .then((res) => res.json())
                    .then((resData) => ({ data: resData, token: data?.accessToken }))
            )
            .then((data) => data)
        return response;
    }

    static getGoogleData = async () => {
        GoogleSignin.configure({
            webClientId: '711286367577-nje32hjedf68ffi3mnkif9kppg43dnhi.apps.googleusercontent.com',
            iosClientId: '711286367577-4ah4t439kqedbcdmchd55ju5sf64nc93.apps.googleusercontent.com',
            offlineAccess: true,
            forceCodeForRefreshToken: true,
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            return {
                id: userInfo?.user?.id,
                name: `${userInfo?.user?.givenName} ${userInfo?.user?.familyName}`,
                email: userInfo?.user?.email,
                picture: userInfo?.user?.photo,
                token: userInfo?.idToken,
            }
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    static getAppleData = async () => {
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
              requestedOperation: appleAuth.Operation.LOGIN,
              // Note: it appears putting FULL_NAME first is important, see issue #293
              requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
            });
            return {
              name: `${appleAuthRequestResponse?.fullName?.givenName} ${appleAuthRequestResponse?.fullName?.familyName}`,
              email: appleAuthRequestResponse?.email,
              token: appleAuthRequestResponse?.identityToken,
              id: appleAuthRequestResponse?.user,
            };
            // // get current authentication state for user
            // // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
            // const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse?.user);
      
            // // // use credentialState response to ensure the user is authenticated
            // if (credentialState === appleAuth.State.AUTHORIZED) {
            //   // user is authenticated
            // }
          } catch (error) {
            // throw error silently
          }
    }
}
