import { Pressable, View, ViewStyle } from 'react-native';
import RCheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { theme } from 'src/styles/theme';
import { Text } from './Text';

interface ICheckBox {
  title: string;
  value: boolean;
  style?: ViewStyle;
  textVariant?: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange(newValue: boolean): void;
}

export const CheckBox = ({
  title,
  value,
  onValueChange,
  style,
  textVariant = 'body18',
}: ICheckBox) => (
  <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', ...style }}>
    <RCheckBox
      tintColors={{ true: theme.colors.primary }}
      onFillColor={theme.colors.primary}
      disabled={false}
      value={value}
      onValueChange={onValueChange}
      style={{ marginLeft: 3, marginRight: 10, width: 20, height: 20 }}
      boxType="square"
      onCheckColor="white"
      lineWidth={2}
      onTintColor={theme.colors.primary}
    />
    <Pressable
      onPress={() => {
        onValueChange(!value);
      }}
    >
      <Text color="secondary" variant={textVariant as any}>
        {title}
      </Text>
    </Pressable>
  </View>
);
