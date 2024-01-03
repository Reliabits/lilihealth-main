import { View, Text } from 'react-native';
import { MainButton } from 'src/components/buttons/MainButton';
import NavService from 'src/navigation/NavService';
import { EStacks } from 'src/navigation/appRoutes';
import { setToken, setUser } from 'src/store/reducers/authReducer';
import { useAppDispatch } from 'src/store/reduxHook';
import { theme } from 'src/styles/theme';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{ flex: 1, paddingHorizontal: theme.spacing.appPadding, justifyContent: 'center' }}
    >
      <MainButton
        title="Logout (Debug)"
        onPress={() => {
          setTimeout(() => {
            dispatch(setUser(null));
            dispatch(setToken(null));
          }, 50);
          NavService.reset(EStacks.AUTH_STACK);
        }}
      />
    </View>
  );
};

export default ProfileScreen;
