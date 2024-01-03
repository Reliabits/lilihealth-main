import { Spacer30 } from 'src/utils/Spacing';
import { useState } from 'react';
import NavService from 'src/navigation/NavService';
import { ESurveyScreens } from 'src/navigation/appRoutes';
import SurveyContainer from './components/SurveyContainer';
import { RadioButton } from './components/RadioButton';

const StepFourScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const golas = [
    { title: 'I eat everything', detail: 'I don’t restrict myself' },
    { title: 'Flexitarian', detail: 'I try to reduce meat consumption' },
    { title: 'Pescetarian', detail: 'I don’t eat meat, but I eat fish' },
    { title: 'Vegetarian', detail: 'I don’t eat meat, but I eat fish' },
    { title: 'Plant-based', detail: 'I only eat point-based food' },
  ];

  return (
    <SurveyContainer
      title="Select the option that most represents your lifestyle."
      detail="We’ll suggest the best recipes for you."
      progress="70%"
      onNext={() => NavService.navigate(ESurveyScreens.STEP_FIVE)}
      onSkip={() => NavService.navigate(ESurveyScreens.STEP_FIVE)}
    >
      <Spacer30 />
      {golas.map((data, index) => (
        <RadioButton
          key={index}
          title={data.title}
          detail={data.detail}
          selected={selectedGoal}
          onSelect={setSelectedGoal}
        />
      ))}
    </SurveyContainer>
  );
};

export default StepFourScreen;
