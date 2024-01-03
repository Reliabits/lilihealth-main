import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import NavService from 'src/navigation/NavService';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer30 } from 'src/utils/Spacing';

const { height } = Dimensions.get('window');

interface IAuth {
  title: string;
  detail: string;
  children: ReactNode;
  progress: string;
  onNext: () => void;
  onSkip?: () => void;
}

const SurveyContainer = ({ children, title, detail, progress, onNext, onSkip }: IAuth) => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Row>
        <Pressable onPress={() => NavService.goBack()}>
          <Image source={Assets.images.back} width={28} height={28} />
        </Pressable>
        <Pressable onPress={onSkip}>
          <Text color="textForeground" variant="body16">
            Skip
          </Text>
        </Pressable>
      </Row>

      <View style={[styles.progress, { width: progress || '0%' }]} />

      <Text color="secondary" variant="h1Cg30">
        {title}
      </Text>
      <Spacer10 />
      <Text color="textForeground" variant="body16">
        {detail}
      </Text>
      {children}
    </ScrollView>
    <MainButton title="Next" onPress={onNext} />
    <Spacer30 />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.appPadding,
    marginTop: 20,
  },
  body: { height: height - 40 },
  socialButton: { backgroundColor: theme.colors.textBackground, padding: 13, borderRadius: 4 },
  progress: { backgroundColor: theme.colors.primary, height: 2, marginVertical: 30 },
});

export default SurveyContainer;
