import React, { useCallback, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from 'src/styles/ThemeProvider';
import FilterScreen from 'src/screens/tabs/learn/FilterScreen';
import InfographicScreen from 'src/screens/tabs/learn/InfographicScreen';
import { useAppSelector } from 'src/store/reduxHook';
import AuthStack from './AuthStack';
import NavService from './NavService';
import { ELearnStack, EStacks } from './appRoutes';
import SurveyStack from './SurveyStack';
import { BottomTabs } from './BottomTabs';
import SplashStack from './SplashStack';
import Subscription from './Subscription';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const routeName = useRef<string | undefined>();
  const { appTheme } = useTheme();
  const { user } = useAppSelector((state) => state.auth);

  const handleScreenChange = useCallback(async () => {
    const currentRouteName = NavService.getCurrentRoute();
    routeName.current = currentRouteName;
  }, []);

  return (
    <NavigationContainer
      ref={NavService.getNavRef()}
      onStateChange={handleScreenChange}
      theme={appTheme.navigationTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={EStacks.BOTTOM_TABS} component={BottomTabs} />
        {!user && (
          <>
            <Stack.Screen name={EStacks.SPLASH_STACK} component={SplashStack} />
            <Stack.Screen name={EStacks.AUTH_STACK} component={AuthStack} />
          </>
        )}
        <Stack.Screen name={EStacks.SURVEY_STACK} component={SurveyStack} />
        <Stack.Screen name={ELearnStack.SEARCH_FILTERS} component={FilterScreen} />
        <Stack.Screen name={ELearnStack.INFOGRAPHIC} component={InfographicScreen} />
        <Stack.Screen name={EStacks.SUBSCRIPTION_STACK} component={Subscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
