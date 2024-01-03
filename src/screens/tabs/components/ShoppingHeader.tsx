import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import fonts from 'src/assets/fonts';
import NavService from 'src/navigation/NavService';
import backIocn from '../../../assets/images/backIcon.png';

const ShoppingHeader = () => (
  <View>
    <View style={styles.HeaderView}>
      <Pressable onPress={() => NavService.goBack()}>
        <Image source={backIocn} />
      </Pressable>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#093057',
    fontFamily: fonts.CatamaranSemiBold,
  },
  HeaderView: {
    width: '100%',
    height: 98,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 20,
    elevation: 5,
    paddingTop: 52,
    gap: 12,
  },
});

export default ShoppingHeader;
