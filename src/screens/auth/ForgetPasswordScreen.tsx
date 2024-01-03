import React from 'react';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';

import { InputField } from 'src/components/InputField';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import { Spacer10, Spacer15, Spacer30 } from 'src/utils/Spacing';
import { forgotPasswordFormValidation } from 'src/utils/ValidationSchema';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import { useForgotPasswordMutation } from 'src/store/services/authService';
import AuthContainer from './components/AuthContainer';
import NavService from '../../navigation/NavService';

const ForgetPasswordScreen = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const visualFeedback = useVisualFeedback();

  const handleSendRequest = async (values: { email: any }) => {
    visualFeedback?.showLoadingBackdrop();
    const data = { email: values.email };
    try {
      const response = await forgotPassword(data).unwrap();
      Toast.show({
        type: 'success',
        text1: response?.message,
      });

      setTimeout(() => {
        NavService.goBack();
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

  return (
    <AuthContainer
      title="Forgot Password"
      detail="Please fill in this information to create and account."
    >
      <Formik
        validationSchema={forgotPasswordFormValidation}
        initialValues={{ email: '' }}
        onSubmit={handleSendRequest}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <>
            <Spacer30 />
            <InputField
              name="email"
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values?.email}
              error={errors.email && touched.email ? errors.email : null}
            />
            <Spacer10 />
            <Text color="textForeground" variant="body14">
              Your confirmation link will be sent to your email address.
            </Text>
            <Spacer15 />
            <MainButton title="Send Request" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default ForgetPasswordScreen;
