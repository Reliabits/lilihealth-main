import { ImageSourcePropType, Pressable, StyleSheet } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';

interface IButton {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}
export const SocialButton = ({ title, icon, onPress }: IButton) => (
  <Pressable onPress={onPress} style={styles.socialButton}>
    <Row justifyContent="flex-start">
      <Image source={icon} width={30} height={30} />
      <Text style={styles.text} color="secondary" variant="bodyBold16">
        {title}
      </Text>
    </Row>
  </Pressable>
);

const styles = StyleSheet.create({
  socialButton: {
    backgroundColor: theme.colors.textBackground,
    paddingVertical: 13,
    paddingHorizontal: 9,
    borderRadius: 4,
  },
  text: { marginLeft: 5 },
});
