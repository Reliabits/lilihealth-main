import { StyleSheet, View } from 'react-native';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import NavService from 'src/navigation/NavService';
import { EAuthScreens } from 'src/navigation/appRoutes';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer30 } from 'src/utils/Spacing';

const SuccessScreen = () => {
  const handleContinue = () => {
    NavService.replace(EAuthScreens.LOGIN);
  };
  return (
    <View style={styles.container}>
      <Image source={Assets.images.success} width={185} height={250} />
      <Text color="secondary" variant="h1Cg30">
        Congratulation!
      </Text>
      <Spacer10 />
      <Text color="secondary" variant="body16">
        your account has been created successfully.
      </Text>
      <Spacer30 />
      <View style={styles.width}>
        <MainButton title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.appPadding,
    paddingTop: 77,
  },
  width: { width: '100%' },
});
export default SuccessScreen;
