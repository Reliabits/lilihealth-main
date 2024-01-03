import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface IRow extends ViewProps {
  justifyContent?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Row = ({ children, justifyContent, style }: IRow) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyContent || 'space-between',
      ...style,
    }}
  >
    {children}
  </View>
);
