/* eslint-disable no-param-reassign */
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';

interface IInfoButton {
  onPress: (() => void) | null | undefined;
}

const InfoButton = ({ onPress }: IInfoButton) => (
  <Pressable onPress={onPress} style={styles.infoButton}>
    <Text color="white" variant="body8">
      i
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  infoButton: {
    borderRadius: 360,
    borderWidth: 1,
    borderColor: theme.colors.white,
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: -5,
  },
});

export default InfoButton;
