import { Pressable, ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import NavService from 'src/navigation/NavService';

import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer25, Spacer40 } from 'src/utils/Spacing';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height } = Dimensions.get('window');

interface IAuth {
  title: string;
  detail: string;
  children: React.ReactNode;
  fixed?: boolean;
}

const AuthContainer = ({ children, title, detail, fixed = true }: IAuth) => (
  <KeyboardAwareScrollView style={styles.container}>
    <View style={fixed && styles.body}>
      <Pressable onPress={() => NavService.goBack()}>
        <Image source={Assets.images.back} width={28} height={28} />
      </Pressable>
      <Spacer25 />
      <Image source={Assets.images.logo} width={65} height={86} />
      <Spacer40 />
      <Text color="secondary" variant="h1Cg30">
        {title}
      </Text>
      <Spacer10 />
      <Text color="secondary" variant="body16">
        {detail}
      </Text>
      {children}
    </View>
  </KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.appPadding,
  },
  body: { height: height - 40 },
  socialButton: { backgroundColor: theme.colors.textBackground, padding: 13, borderRadius: 4 },
});

export default AuthContainer;
