import { Pressable, View, StyleSheet } from 'react-native';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';

interface IRadioButton {
  title: string;
  detail?: string;
  selected: string;
  // eslint-disable-next-line no-unused-vars
  onSelect(value: string): void;
}

export const RadioButton = ({ title, detail, selected, onSelect }: IRadioButton) => (
  <Pressable onPress={() => onSelect(title)} style={styles.radioButton}>
    <View style={[styles.radio, selected === title && styles.radioSelected]} />
    <View>
      <Text color="secondary" variant="body18" fontWeight="400">
        {title}
      </Text>
      {detail && (
        <Text color="textForeground" variant="body14" fontWeight="400">
          {detail}
        </Text>
      )}
    </View>
  </Pressable>
);


export const RadioButtongreen = ({ title, detail, selected, onSelect }: IRadioButton) => (
  <Pressable onPress={() => onSelect(title)} style={styles.radioButton1}>
    <View style={[styles.radio1, selected === title && styles.radioSelected]} />
    <View>
      <Text color="secondary" variant="body18" fontWeight="400">
        {title}
      </Text>
      {detail && (
        <Text color="textForeground" variant="body14" fontWeight="400">
          {detail}
        </Text>
      )}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  radioButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: theme.colors.textForeground,
  },

  radio1: {
    width: 20,
    height: 20,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 19,
    borderRadius: 4,
    shadowColor: theme.colors.textForeground,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 6,
    elevation: 2.5,
    marginBottom: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
  radioSelected: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
});
