import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'src/screens/Splash/SplashScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SplashOne from 'src/screens/Splash/SplashOne'
import SplashTwo from 'src/screens/Splash/SplashTwo'
import SplashThree from 'src/screens/Splash/SplashThree'
import SplashFour from 'src/screens/Splash/SplashFour'
import ForgotPassword from 'src/screens/ForgetPassword/ForgotPassword'
import ResetPassword from 'src/screens/ForgetPassword/ResetPassword'



const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
     
          <Stack.Navigator initialRouteName='splashOne' screenOptions={{headerShown:false}}>
              <Stack.Screen name="splash" component={SplashScreen} />
              <Stack.Screen name="splashOne" component={SplashOne} />
              <Stack.Screen name="splashTwo" component={SplashTwo} />
              <Stack.Screen name="splashThree" component={SplashThree} />
              <Stack.Screen name="splashFour" component={SplashFour} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </Stack.Navigator>
      
  )
}

export default SplashStack