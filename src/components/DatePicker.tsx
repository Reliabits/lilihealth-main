import { useState } from 'react';
import { Pressable, View } from 'react-native';
import Assets from 'src/utils/Assets';
import { theme } from 'src/styles/theme';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Text } from './Text';
import { Image } from './Image';

interface IDate {
  label: string;
  value: Date;
  // eslint-disable-next-line no-unused-vars
  onChange(date: Date | undefined): void;
}

const DatePicker = ({ label, value, onChange }: IDate) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => setShow(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingBottom: 16,
        }}
      >
        <Text color="textForeground" variant="body16">
          {label}
        </Text>
        <Image  source={Assets.images.calendar} width={26} height={26} />
      </Pressable>
      <View style={{ height: 1, backgroundColor: theme.colors.textForeground }} />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={value}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            onChange(selectedDate);
          }}
        />
      )}
    </View>
  );
};

export default DatePicker;

export const DatePickerPrimary = ({ label, value, onChange }: IDate) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => setShow(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingBottom: 16,
        }}
      >
        <Text color="textForeground" variant="body16">
          {label}
        </Text>
        <Image style={{tintColor:theme.colors.primary}} source={Assets.images.calendar} width={26} height={26} />
      </Pressable>
      <View style={{ }} />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={value}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            onChange(selectedDate);
          }}
        />
      )}
    </View>
  );
};


