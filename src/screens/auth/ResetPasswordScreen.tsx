import { InputField } from 'src/components/InputField';
import { MainButton } from 'src/components/buttons/MainButton';
import { Spacer15, Spacer30 } from 'src/utils/Spacing';
import AuthContainer from './components/AuthContainer';

const ResetPasswordScreen = () => {
  const handleSendRequest = () => {
    // TODO
  };

  return (
    <AuthContainer
      title="Reset Password"
      detail="Set the new password for your account so you can login and access all the features."
    >
      <Spacer30 />
      <InputField placeholder="New password" />
      <Spacer15 />
      <InputField placeholder="Confirm password" />
      <Spacer15 />
      <MainButton title="Reset Password" onPress={handleSendRequest} />
    </AuthContainer>
  );
};

export default ResetPasswordScreen;
