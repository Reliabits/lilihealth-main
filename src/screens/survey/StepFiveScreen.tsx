import { View, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';
import { theme } from 'src/styles/theme';
import { Text } from 'src/components/Text';
import { Spacer10, Spacer15, Spacer30 } from 'src/utils/Spacing';
import { useState } from 'react';
import { Row } from 'src/components/Row';
import NavService from 'src/navigation/NavService';
import { ESurveyScreens } from 'src/navigation/appRoutes';
import { Image } from 'src/components/Image';
import Assets from 'src/utils/Assets';
import SurveyContainer from './components/SurveyContainer';

const StepFiveScreen = () => {
  const [food, setFood] = useState<string>('Seafood');

  const renderTag = (title: string, source: ImageSourcePropType) => (
    <Pressable
      onPress={() => setFood(title)}
      style={[styles.gender, food === title && styles.selectedGender]}
    >
      <Image source={source} width={18} height={18} />
      <Text
        style={styles.text}
        color={food === title ? 'white' : 'textForeground'}
        variant="body14"
      >
        {title}
      </Text>
    </Pressable>
  );
  return (
    <SurveyContainer
      title="Do you have any food allergies or intolerances?"
      detail="Select from the list below. We’ll suggest recipes without these foods."
      progress="80%"
      onNext={() => NavService.navigate(ESurveyScreens.STEP_SIX)}
      onSkip={() => NavService.navigate(ESurveyScreens.STEP_SIX)}
    >
      <Spacer30 />
      <Row justifyContent="flex-start">
        {renderTag('Egg', Assets.images.egg)}
        {renderTag('Seafood', Assets.images.seafood)}
      </Row>
      <Spacer15 />
      <Row justifyContent="flex-start">
        {renderTag('Lactose', Assets.images.lactose)}
        {renderTag('Gluten', Assets.images.gluten)}
      </Row>
      <Spacer15 />
      <Row justifyContent="flex-start">{renderTag('Nuts', Assets.images.nuts)}</Row>
      <View style={{ marginTop: 60, marginBottom: 90 }}>
        <Spacer15 />
        <Text color="secondary" variant="body18">
          Important notice
        </Text>
        <Spacer10 />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedGender: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  text: { marginLeft: 10 },
});

export default StepFiveScreen;
