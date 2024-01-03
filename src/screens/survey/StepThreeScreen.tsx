import { Spacer30 } from 'src/utils/Spacing';
import { useState } from 'react';
import NavService from 'src/navigation/NavService';
import { ESurveyScreens } from 'src/navigation/appRoutes';
import SurveyContainer from './components/SurveyContainer';
import { RadioButton } from './components/RadioButton';

const StepThreeScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState('');
  const symptoms = [
    'Weight gain',
    'Acne',
    'Unwanted hair growth',
    'Hair loss',
    'Irregular cycles',
    'Infertility',
  ];

  return (
    <SurveyContainer
      title="What PCOS symptoms do you struggle with?"
      detail="We’ll personalise your experience based on your answers."
      progress="60%"
      onNext={() => NavService.navigate(ESurveyScreens.STEP_FOUR)}
      onSkip={() => NavService.navigate(ESurveyScreens.STEP_FOUR)}
    >
      <Spacer30 />
      {symptoms.map((data, index) => (
        <RadioButton
          key={index}
          title={data}
          selected={selectedSymptoms}
          onSelect={setSelectedSymptoms}
        />
      ))}
    </SurveyContainer>
  );
};

export default StepThreeScreen;
