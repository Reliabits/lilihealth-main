import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'src/screens/auth/LoginScreen';
import SocialSignUpScreen from 'src/screens/auth/SocialSignUpScreen';
import SignUpScreen from 'src/screens/auth/SignUpScreen';
import ForgetPasswordScreen from 'src/screens/auth/ForgetPasswordScreen';
import SuccessScreen from 'src/screens/auth/SuccessScreen';
import ResetPasswordScreen from 'src/screens/auth/ResetPasswordScreen';
import { EAuthScreens } from './appRoutes';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={EAuthScreens.LOGIN} component={LoginScreen} />
    <Stack.Screen name={EAuthScreens.SOCIAL_SIGN_UP} component={SocialSignUpScreen} />
    <Stack.Screen name={EAuthScreens.SIGN_UP} component={SignUpScreen} />
    <Stack.Screen name={EAuthScreens.FORGET_PASSWORD} component={ForgetPasswordScreen} />
    <Stack.Screen name={EAuthScreens.RESET_PASSWORD} component={ResetPasswordScreen} />
    <Stack.Screen name={EAuthScreens.ACCOUNT_SUCCESS} component={SuccessScreen} />
  </Stack.Navigator>
);

export default AuthStack;
