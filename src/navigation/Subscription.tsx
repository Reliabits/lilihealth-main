import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'src/screens/auth/LoginScreen';
import SocialSignUpScreen from 'src/screens/auth/SocialSignUpScreen';
import SignUpScreen from 'src/screens/auth/SignUpScreen';
import ForgetPasswordScreen from 'src/screens/auth/ForgetPasswordScreen';
import SuccessScreen from 'src/screens/auth/SuccessScreen';
import ResetPasswordScreen from 'src/screens/auth/ResetPasswordScreen';
import SubscriptionScreenOne from 'src/components/subscription/SubscriptionScreenOne';
import ActivatedScreen from 'src/components/subscription/ActivatedScreen';
import { EAuthScreens, ESUBSCRIPTION } from './appRoutes';

const Stack = createNativeStackNavigator();

const Subscription = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ESUBSCRIPTION.SUBSCRIPTIONSCREENONE} component={SubscriptionScreenOne} />
    <Stack.Screen name={ESUBSCRIPTION.ACTIVATEDSCREEN} component={ActivatedScreen} />
  </Stack.Navigator>
);

export default Subscription;
