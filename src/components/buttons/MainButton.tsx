import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { EColorPalette, theme } from '../../styles/theme';
import { Text } from '../Text';
import { Row } from '../Row';
import { Image } from '../Image';

interface IMainButton {
  title: string;
  onPress: () => void;
  loading?: boolean;
  icon?: ImageSourcePropType;
  backgroundColor?: EColorPalette.PRIMARY | EColorPalette.WHITE;
}

export const MainButton = ({ loading, onPress, title, icon, backgroundColor }: IMainButton) => (
  <Pressable onPress={!loading ? onPress : undefined}>
    <View style={[styles.buttonContainer, backgroundColor && { backgroundColor }]}>
      {!loading ? (
        <Row>
          {icon && (
            <Image
              source={icon}
              width={20}
              height={20}
              style={backgroundColor ? styles.iconPrimary : styles.iconWhite}
            />
          )}
          <Text variant="body16" color={backgroundColor ? 'primary' : 'white'} style={styles.label}>
            {title}
          </Text>
        </Row>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    height: 54,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    marginLeft: 10,
  },
  iconWhite: { tintColor: 'white' },
  iconPrimary: { tintColor: 'primary' },
});
