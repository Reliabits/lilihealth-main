import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
  ImageSourcePropType,
} from 'react-native';
import { Spacer10 } from 'src/utils/Spacing';
import { theme } from '../styles/theme';
import { useTheme } from '../styles/ThemeProvider';
import { Image } from './Image';
import { Text } from './Text';

interface IInputField extends TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  leftIcon?: ImageSourcePropType;
  error?: string | null;
  name?: string;
}

export const InputField = ({
  placeholder,
  secureTextEntry,
  leftIcon,
  error,
  name,
  ...rest
}: IInputField) => {
  const { appTheme } = useTheme();
  return (
    <View style={styles.container}>
      {leftIcon && <Image style={styles.leftIcon} source={leftIcon} width={24} height={24} />}
      <RNTextInput
        style={[styles.input, leftIcon ? styles.padding : {}]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        placeholderTextColor={appTheme.colors.textForeground}
        {...rest}
      />
      {error && (
        <>
          <Spacer10 />
          <Text color="red" variant="body14">
            {error}
          </Text>
        </>
      )}
    </View>
  );
};

export const InputFieldWhite = ({
  placeholder,
  secureTextEntry,
  leftIcon,
  error,
  name,
  ...rest
}: IInputField) => {
  const { appTheme } = useTheme();
  return (
    <View style={styles.container}>
      {leftIcon && <Image style={styles.leftIcon} source={leftIcon} width={24} height={24} />}
      <RNTextInput
        style={[styles.input1, leftIcon ? styles.padding : {}]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        placeholderTextColor={appTheme.colors.textForeground}
        {...rest}
      />
      {error && (
        <>
          <Spacer10 />
          <Text color="red" variant="body14">
            {error}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input1: {
    ...theme.textVariants.body16,
    width: '100%',
    height: 54,
    padding: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    color: theme.colors.black,
  },
  input: {
    ...theme.textVariants.body16,
    width: '100%',
    height: 54,
    padding: 16,
    backgroundColor: theme.colors.textBackground,
    borderRadius: 4,
    flex: 1,
    color: theme.colors.black,
  },
  leftIcon: { position: 'absolute', zIndex: 10, top: 15, left: 10 },
  padding: { paddingLeft: 46 },
});
