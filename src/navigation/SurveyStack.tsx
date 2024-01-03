import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepOneScreen from 'src/screens/survey/StepOneScreen';
import StepTwoScreen from 'src/screens/survey/StepTwoScreen';
import StepThreeScreen from 'src/screens/survey/StepThreeScreen';
import StepFourScreen from 'src/screens/survey/StepFourScreen';
import StepFiveScreen from 'src/screens/survey/StepFiveScreen';
import StepSixScreen from 'src/screens/survey/StepSixScreen';
import { ESurveyScreens } from './appRoutes';

const Stack = createNativeStackNavigator();

const SurveyStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ESurveyScreens.STEP_ONE} component={StepOneScreen} />
    <Stack.Screen name={ESurveyScreens.STEP_TWO} component={StepTwoScreen} />
    <Stack.Screen name={ESurveyScreens.STEP_THREE} component={StepThreeScreen} />
    <Stack.Screen name={ESurveyScreens.STEP_FOUR} component={StepFourScreen} />
    <Stack.Screen name={ESurveyScreens.STEP_FIVE} component={StepFiveScreen} />
    <Stack.Screen name={ESurveyScreens.STEP_SIX} component={StepSixScreen} />
  </Stack.Navigator>
);

export default SurveyStack;
