import { View, StyleSheet, Pressable } from 'react-native';
import { theme } from 'src/styles/theme';
import { Text } from 'src/components/Text';
import { Spacer15, Spacer30 } from 'src/utils/Spacing';
import { useState } from 'react';
import { Row } from 'src/components/Row';
import DatePicker from 'src/components/DatePicker';
import Utils from 'src/utils/Utils';
import NavService from 'src/navigation/NavService';
import { ESurveyScreens } from 'src/navigation/appRoutes';
import SurveyContainer from './components/SurveyContainer';

const StepTwoScreen = () => {
  const [gender, setGender] = useState<string>('');
  const [dob, setDob] = useState<string>();
  const renderGender = (title: string) => (
    <Pressable
      onPress={() => setGender(title)}
      style={[styles.gender, gender === title && styles.selectedGender]}
    >
      <Text color={gender === title ? 'white' : 'textForeground'} variant="body14">
        {title}
      </Text>
    </Pressable>
  );
  return (
    <SurveyContainer
      title="What’s your gender and birth date?"
      detail="Your gender"
      progress="40%"
      onNext={() => NavService.navigate(ESurveyScreens.STEP_THREE)}
      onSkip={() => NavService.navigate(ESurveyScreens.STEP_THREE)}
    >
      <Spacer30 />
      <Row justifyContent="flex-start">
        {renderGender('Female')}
        {renderGender('Male')}
        {renderGender('Other')}
      </Row>
      <View style={{ marginTop: 60, marginBottom: 90 }}>
        <DatePicker
          label={dob || 'Birth Date'}
          value={dob ? Utils.parseDate(dob) : new Date()}
          onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
        />
        <Spacer15 />
        <Text color="textForeground" variant="body16">
          * This helps us personalise your experience and give you nutritional suggestions and tips
          according to your age and gender.
        </Text>
      </View>
    </SurveyContainer>
  );
};

const styles = StyleSheet.create({
  gender: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.textForeground,
    paddingHorizontal: 17,
    paddingVertical: 4,
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});

export default StepTwoScreen;
