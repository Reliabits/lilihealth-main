import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Platform, BackHandler } from 'react-native';
import { Formik } from 'formik';

import { InputField } from 'src/components/InputField';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer15, Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing';
import NavService from 'src/navigation/NavService';
import { EAuthScreens, EStacks } from 'src/navigation/appRoutes';
import Utils from 'src/utils/Utils';
import { setToken, setUser } from 'src/store/reducers/authReducer';
import { useAppDispatch } from 'src/store/reduxHook';
import { signInFormValidation } from 'src/utils/ValidationSchema';
import Toast from 'react-native-toast-message';
import { useSocialLoginMutation, useLoginMutation } from 'src/store/services/authService';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import AuthContainer from './components/AuthContainer';
import { SocialButton } from './components/SocalButton';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [socialLogin] = useSocialLoginMutation();
  const [login] = useLoginMutation();
  const visualFeedback = useVisualFeedback();

  const socialLoginHandler = async (data: any) => {
    visualFeedback?.showLoadingBackdrop();
    try {
      const response = await socialLogin(data).unwrap();

      Toast.show({
        type: 'success',
        text1: response?.message,
      });

      setTimeout(() => {
        dispatch(setUser(response?.data));
        dispatch(setToken(response?.token));
      }, 500);

      await Utils.setLocalStorageData('@access_token', {
        accessToken: response?.token,
      });
      NavService.navigate(EStacks.SURVEY_STACK);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error?.data?.errors ? error?.data?.errors[0].error : error?.data?.message,
      });
    } finally {
      visualFeedback?.hideLoadingBackdrop();
    }
  };

  const handleContinue = async (values: { email: string; password: string }) => {
    visualFeedback?.showLoadingBackdrop();
    try {
      const data = {
        email: values?.email,
        password: values?.password,
      };
      const response = await login(data).unwrap();

      Toast.show({
        type: 'success',
        text1: response?.message,
      });

      setTimeout(() => {
        dispatch(setUser(response?.data));
        dispatch(setToken(response?.token));
      }, 500);

      await Utils.setLocalStorageData('@access_token', {
        accessToken: response?.token,
      });
      NavService.navigate(EStacks.SURVEY_STACK);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error?.data?.errors ? error?.data?.errors[0].error : error?.data?.message,
      });
    } finally {
      visualFeedback?.hideLoadingBackdrop();
    }
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const handleFacebook = async () => {
    const resForData = await Utils.getFacebookData();

    if (resForData) {
      const {
        token,
        data: { id },
      } = resForData;
      const data = {
        token,
        id,
        platform: 'facebook',
      };
      socialLoginHandler(data);
    }
  };

  const handleGoogle = async () => {
    const resForData = await Utils.getGoogleData();

    if (resForData) {
      const { token, id } = resForData;
      const data = {
        token,
        id,
        platform: 'google',
      };
      socialLoginHandler(data);
    }
  };

  const handleApple = async () => {
    const resForData = await Utils.getAppleData();
    if (resForData) {
      const { id, token } = resForData;
      const data = {
        token,
        id,
        platform: 'apple',
      };
      socialLoginHandler(data);
    }
  };

  return (
    <AuthContainer
      title="Welcome To Lilli Health"
      detail="Please enter your email and password."
      fixed={false}
    >
      <Spacer30 />

      <Formik
        validationSchema={signInFormValidation}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleContinue}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <>
            <InputField
              name="email"
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values?.email}
              error={errors.email && touched.email ? errors.email : null}
            />
            <Spacer15 />
            <InputField
              name="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values?.password}
              error={errors.password && touched.password ? errors.password : null}
            />
            <Spacer15 />
            <MainButton title="Continue" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <Spacer10 />
      <Text style={{ textAlign: 'center' }} color="textForeground" variant="body14">
        Or via social network
      </Text>
      <Spacer20 />
      <Row>
        <SocialButton title="Facebook" icon={Assets.images.facebook} onPress={handleFacebook} />
        <SocialButton title="Google" icon={Assets.images.google} onPress={handleGoogle} />
        {Platform.OS === 'ios' && (
          <SocialButton title="Apple" icon={Assets.images.apple} onPress={handleApple} />
        )}
      </Row>

      <Row style={styles.footer}>
        <Pressable onPress={() => NavService.navigate(EAuthScreens.SOCIAL_SIGN_UP)}>
          <Text style={styles.underline} variant="body16" color="primary">
            Join
          </Text>
        </Pressable>
        <Pressable onPress={() => NavService.navigate(EAuthScreens.FORGET_PASSWORD)}>
          <Text style={styles.underline} variant="body16" color="primary">
            Forgot Password?
          </Text>
        </Pressable>
      </Row>
      <Spacer30 />
      <Spacer40 />
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  socialButton: { backgroundColor: theme.colors.textBackground, padding: 13, borderRadius: 4 },
  underline: { textDecorationLine: 'underline' },
  footer: { width: '100%', marginTop: 80 },
});

export default LoginScreen;
