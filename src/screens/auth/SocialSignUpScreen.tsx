/* eslint-disable camelcase */
import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View, Pressable, Platform } from 'react-native';

import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer15, Spacer25, Spacer30, Spacer40 } from 'src/utils/Spacing';
import { MainButton } from 'src/components/buttons/MainButton';
import { Row } from 'src/components/Row';
import NavService from 'src/navigation/NavService';
import { EAuthScreens } from 'src/navigation/appRoutes';
import Utils from 'src/utils/Utils';
import Toast from 'react-native-toast-message';
import { useSocialRegisterMutation } from 'src/store/services/authService';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import { SocialButton } from './components/SocalButton';

const { height } = Dimensions.get('window');
const SocialSignUpScreen = () => {
  const [socialRegister] = useSocialRegisterMutation();
  const visualFeedback = useVisualFeedback();

  const socialRegisterHandler = async (data: any) => {
    visualFeedback?.showLoadingBackdrop();
    try {
      await socialRegister(data).unwrap();
      setTimeout(() => {
        NavService.navigate(EAuthScreens.ACCOUNT_SUCCESS);
      }, 500);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error?.data?.errors ? error?.data?.errors[0].error : error?.data?.message,
      });
    } finally {
      visualFeedback?.hideLoadingBackdrop();
    }
  };

  const handleFacebook = async () => {
    const resForData = await Utils.getFacebookData();

    if (resForData) {
      const {
        token,
        data: { email, first_name, last_name, id },
      } = resForData;

      const data = {
        address: 'string',
        role: 'User',
        permission: 'Viewer',
        phoneNumber: '923920283',
        additionalDetails: 'Enter extra details such as bio, job title, company',
        platform: 'facebook',
        isActive: true,
        profileImage: 1,
        name: `${first_name} ${last_name}`,
        email,
        token,
        id,
      };
      socialRegisterHandler(data);
    }
  };

  const handleGoogle = async () => {
    const resForData = await Utils.getGoogleData();
    if (resForData) {
      const { name, email, id, token } = resForData;
      const data = {
        address: 'string',
        role: 'User',
        permission: 'Viewer',
        phoneNumber: '923920283',
        additionalDetails: 'Enter extra details such as bio, job title, company',
        platform: 'facebook',
        isActive: true,
        profileImage: 1,
        name,
        email,
        token,
        id,
      };
      socialRegisterHandler(data);
    }
  };

  const handleApple = async () => {
    const resForData = await Utils.getAppleData();
    if (resForData) {
      const { name, email, id, token } = resForData;
      const data = {
        address: 'string',
        role: 'User',
        permission: 'Viewer',
        phoneNumber: '923920283',
        additionalDetails: 'Enter extra details such as bio, job title, company',
        platform: 'apple',
        isActive: true,
        profileImage: 1,
        name,
        email,
        id,
        token,
      };
      socialRegisterHandler(data);
    }
  };

  const handleSignUp = () => {
    NavService.navigate(EAuthScreens.SIGN_UP);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Spacer25 />
        <Image source={Assets.images.logo_secondary} width={157} height={68} />
        <Spacer40 />
        <Text color="secondary" variant="h1Cg30">
          Join Lilli Health
        </Text>
        <Spacer10 />
        <Text color="secondary" variant="body16">
          Create an account and discover comprehensive information about the PCOS diet and food
          plan.
        </Text>
        <Spacer30 />
        <SocialButton
          title="Connect with Facebook"
          icon={Assets.images.facebook}
          onPress={handleFacebook}
        />
        <Spacer15 />
        <SocialButton
          title="Connect with Google"
          icon={Assets.images.google}
          onPress={handleGoogle}
        />
        <Spacer15 />
        {Platform.OS === 'ios' && (
          <>
            <SocialButton
              title="Connect with Apple"
              icon={Assets.images.apple}
              onPress={handleApple}
            />
            <Spacer15 />
          </>
        )}
        <MainButton title="Sign up with Email" onPress={handleSignUp} />
        <Row justifyContent="center" style={styles.footer}>
          <Pressable onPress={() => NavService.navigate(EAuthScreens.LOGIN)}>
            <Text style={styles.underline} variant="body16" color="primary">
              Sign In
            </Text>
          </Pressable>
        </Row>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.appPadding,
  },
  body: { height: height - 40 },
  underline: { textDecorationLine: 'underline' },
  footer: { position: 'absolute', width: '100%', bottom: Platform.OS === 'ios' ? 70 : 20 },
});

export default SocialSignUpScreen;
