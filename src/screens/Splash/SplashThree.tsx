import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavService from 'src/navigation/NavService';
import { ESPLASH, EStacks } from 'src/navigation/appRoutes';
import splash3 from '../../assets/images/splash3.png';
import logo from '../../assets/images/logo.png';
import dot from '../../assets/images/dot.png';
import dot1 from '../../assets/images/dot1.png';

import fonts from '../../assets/fonts';
import Assets from 'src/utils/Assets';

const SplashThree = () => {
  const navigation = useNavigation();
  const { height } = Dimensions.get('window');
  const imageHeight = height * 0.35;
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* <ScrollView> */}
      <View style={styles.image}>
        <Image style={{ width: '100%', height: imageHeight }} source={splash3} />
      </View>

      <View style={styles.logo}>
        <Image source={Assets.images.splash_logo} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>
          Reduce your food waste with our weekly meal plans and automatic grocery list{' '}
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={styles.dotView}>
          <Image source={dot} />
          <Image source={dot} />
          <Image source={dot1} />
          <Image source={dot} />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => {
              NavService.navigate(ESPLASH.SPLASHFOUR);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextView}>
          <Pressable onPress={() => NavService.navigate(EStacks.AUTH_STACK)}>
            <Text style={styles.bottomText}>Already a user? <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text></Text>
          </Pressable>
        </View>
      </View>

      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: fonts.CatamaranMedium,
  },
  bottomText: {
    fontSize: 16,
    color: '#093057',
    fontFamily: fonts.CatamaranMedium,
  },
  bottomTextView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51B2BC',
    height: 54,
    borderRadius: 4,
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  dotView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 80,
    gap: 10,
  },
  text: {
    color: '#093057',
    fontSize: 30,
    fontFamily: fonts.CormorantGaramondBold,
  },
  textView: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 21,
  },

  image: {
    width: '100%',
  },
  logo: {
    marginTop: 20,
    paddingHorizontal: 21,
  },
});

export default SplashThree;
