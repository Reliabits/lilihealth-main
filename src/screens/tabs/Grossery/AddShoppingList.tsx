import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import Assets from 'src/utils/Assets';
import { theme } from 'src/styles/theme';
import fonts from 'src/assets/fonts';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';

const AddShoppingList = () => (
  <View style={styles.mainView}>
    <View style={styles.mainIconView}>
      <Image style={styles.image} source={Assets.images.cart_big} />
      <Image style={{ opacity: 0.7 }} source={Assets.images.cart_background} />
    </View>
    <View style={styles.mainTextView}>
      <Text style={styles.mainText}>Shopping List is Empty</Text>

      <View style={styles.secondaryTextView}>
        <Text style={styles.text1}>start your shopping list by adding ingredients</Text>

        <Text style={styles.text1}>using the add button below</Text>
      </View>
    </View>

    <View style={styles.buttonView}>
      <Pressable
        onPress={() => {
          NavService.navigate(EEatStack.LISTINGVIEW);
        }}
        style={styles.button}
      >
        <Image source={Assets.images.cart_small} />
        <Text style={styles.buttontext}>Add Shopping List</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: -10,
    bottom: 0,
  },
  mainIconView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 16,
    color: theme.colors.white,
  },
  button: {
    gap: 10,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    height: 54,
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    padding: theme.spacing.appPadding,
  },
  mainTextView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30.58,
  },
  secondaryTextView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  text1: {
    fontFamily: fonts.CatamaranRegular,
    color: theme.colors.secondary,
    fontSize: 16,
  },

  mainText: {
    color: theme.colors.secondary,
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 26,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
});

export default AddShoppingList;
