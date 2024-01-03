import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../styles/ThemeProvider';

interface IText extends TextProps {
  style?: TextStyle;
  variant: keyof typeof theme.textVariants;
  color: keyof typeof theme.colors;
  fontWeight?: string;
}
export const Text = ({ color, style, variant, fontWeight, ...rest }: IText) => {
  const { appTheme } = useTheme();
  return (
    <RNText
      allowFontScaling={false}
      style={{
        fontWeight: '600',
        color: appTheme.colors[color],
        ...appTheme.textVariants[variant],
        ...style,
      }}
      {...rest}
    />
  );
};
