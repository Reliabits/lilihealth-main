import { Spacer30 } from 'src/utils/Spacing';
import { useState } from 'react';
import NavService from 'src/navigation/NavService';
import { ESurveyScreens } from 'src/navigation/appRoutes';
import SurveyContainer from './components/SurveyContainer';
import { RadioButton } from './components/RadioButton';

const StepOneScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const golas = [
    'Lose Weight',
    'Improve my complexion',
    'Get pregnant',
    'Regulate my cycles',
    'Reverse insulin resistance',
    'Prevent chronic disease',
  ];

  return (
    <SurveyContainer
      title="What’s your main goal?"
      detail="Choose your goal to get a more personalized experience. "
      progress="20%"
      onNext={() => NavService.navigate(ESurveyScreens.STEP_TWO)}
      onSkip={() => NavService.navigate(ESurveyScreens.STEP_TWO)}
    >
      <Spacer30 />
      {golas.map((data, index) => (
        <RadioButton key={index} title={data} selected={selectedGoal} onSelect={setSelectedGoal} />
      ))}
    </SurveyContainer>
  );
};

export default StepOneScreen;
