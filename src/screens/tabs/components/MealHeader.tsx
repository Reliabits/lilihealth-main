import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import fonts from 'src/assets/fonts';
import NavService from 'src/navigation/NavService';

const MealHeader = () => {
  return (
    <View style={styles.main}>
      <Pressable onPress={()=> NavService.goBack()}>

      <Image style={styles.back} source={Assets.images.back} />
      </Pressable>
      <Text style={styles.text}>Meal Planner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 18,
    color: theme.colors.secondary,
  },
  main: {
    height: 98,
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.appPadding,
    paddingTop: 50,
    flexDirection: 'row',
    gap: 12,
    elevation: 5,
  },
  back: {
    height: 28,
    width: 28,
  },
});

export default MealHeader;
