import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import splashScreen from '../../assets/images/SplashScreen.png';
import NavService from 'src/navigation/NavService';
import { ESPLASH, EStacks } from 'src/navigation/appRoutes';
import { useAppSelector } from 'src/store/reduxHook';
import Assets from 'src/utils/Assets';
import { theme } from 'src/styles/theme';

const SplashScreen = () => {
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      NavService.navigate(user ? EStacks.BOTTOM_TABS : ESPLASH.SPLASHONE);
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: theme.colors.secondary }}>
      <View style={{justifyContent:'flex-end', flex:1}}>
      <Image source={Assets.images.splash} />
      </View>
      <View style={{flex:1, justifyContent:'flex-end' }}>
        <Image source={Assets.images.leaf} />
        
    </View>
      
    </View>
  );
};

export default SplashScreen;
