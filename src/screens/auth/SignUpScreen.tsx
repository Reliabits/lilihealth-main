import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

import { InputField } from 'src/components/InputField';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import { theme } from 'src/styles/theme';
import { Spacer10, Spacer15, Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing';
import NavService from 'src/navigation/NavService';
import { EAuthScreens } from 'src/navigation/appRoutes';
import Assets from 'src/utils/Assets';
import { useState } from 'react';
import { ImagePicker } from 'src/components/ImagePicker';
import { signUpFormValidation } from 'src/utils/ValidationSchema';
import { useRegisterMutation, useUploadMediaMutation } from 'src/store/services/authService';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import Toast from 'react-native-toast-message';
import AuthContainer from './components/AuthContainer';

const SignUpScreen = () => {
  const [register] = useRegisterMutation();
  const [uploadMedia] = useUploadMediaMutation();
  const visualFeedback = useVisualFeedback();

  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageId, setImageId] = useState(null);

  const handleSignUp = async (values: { phone: any; name: any; email: any; password: any }) => {
    try {
      visualFeedback?.showLoadingBackdrop();
      const data = {
        address: 'string',
        role: 'User',
        permission: 'Viewer',
        additionalDetails: 'Enter extra details such as bio, job title, company',
        platform: 'facebook',
        profileImage: imageId || 1,
        phoneNumber: values?.phone,
        name: values?.name,
        email: values?.email,
        password: values?.password,
        confirmPassword: values?.password,
      };
      await register(data).unwrap();
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

  const getImageId = async (image: any) => {
    const formData = new FormData();
    formData.append('media', {
      type: image?.mime,
      uri: image?.path,
      name: image?.path.split('/').pop(),
    });
    try {
      const response = await uploadMedia(formData).unwrap();
      setImageId(response?.data?.id);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error?.data?.errors ? error?.data?.errors[0].error : error?.message,
      });
    }
  };

  return (
    <AuthContainer
      title="Sign up with email"
      detail="Please fill in this information to create an account."
      fixed={false}
    >
      <Spacer30 />
      <TouchableOpacity onPress={() => setShowImagePicker(true)} style={{ alignSelf: 'center' }}>
        <Image
          source={selectedImage ? { uri: selectedImage } : Assets.images.user}
          style={styles.imgUser}
        />
        <Image source={Assets.images.edit} style={styles.imgEditProfile} />
      </TouchableOpacity>
      <Spacer15 />

      <Formik
        validationSchema={signUpFormValidation}
        initialValues={{ name: '', email: '', password: '', phone: '' }}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <>
            <InputField
              name="name"
              placeholder="Name"
              onChangeText={handleChange('name')}
              value={values?.name}
              error={errors.name && touched.name ? errors.name : null}
            />
            <Spacer15 />
            <InputField
              name="phone"
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={handleChange('phone')}
              value={values?.phone}
              error={errors.phone && touched.phone ? errors.phone : null}
            />
            <Spacer15 />
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
            <MainButton title="Sign Up" onPress={handleSubmit} />
            <Spacer20 />
          </>
        )}
      </Formik>

      <Row justifyContent="center">
        <Text variant="body14" color="textForeground">
          {'By joining, you agree to Lilli Health '}
          <Text style={styles.underline} variant="body14" color="primary">
            Terms of Services
          </Text>
        </Text>
      </Row>
      <Spacer40 />
      <Spacer40 />

      <ImagePicker
        visibility={showImagePicker}
        onCancel={() => setShowImagePicker(false)}
        onImageSelect={async (image) => {
          setShowImagePicker(false);
          setSelectedImage(image.path);
          getImageId(image);
        }}
      />
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  socialButton: { backgroundColor: theme.colors.textBackground, padding: 13, borderRadius: 4 },
  underline: { textDecorationLine: 'underline' },
  footer: { position: 'absolute', width: '100%', bottom: Platform.OS === 'ios' ? 40 : 20 },
  imgUser: { alignSelf: 'center', width: 92, height: 92, borderRadius: 92 / 2 },
  imgEditProfile: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    right: -5,
  },
});

export default SignUpScreen;
