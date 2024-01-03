import { View, Image, StyleSheet, ScrollView, Pressable, FlatList, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import NavService from 'src/navigation/NavService';
import { EAuthScreens, EStacks } from 'src/navigation/appRoutes';
import Assets from 'src/utils/Assets';
import { theme } from 'src/styles/theme';
import { MainButton } from 'src/components/buttons/MainButton';
import { Spacer20 } from 'src/utils/Spacing';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import splash1 from '../../assets/images/splash1.png';
import splash2 from '../../assets/images/splash2.png';
import splash3 from '../../assets/images/splash3.png';
import splash4 from '../../assets/images/splash4.png';

const SplashOne = () => {
  const scrollViewRef = useRef(null);
  const { height, width } = Dimensions.get('window');
  const imageHeight = height * 0.35;
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      key: 1,
      text: 'Welcome to lilli health your app to take care of you and the world.',
      image: splash1,
    },
    {
      key: 2,
      text: 'Discover simple, tasty recipes that nourish your mind and body with just a few ingredients',
      image: splash2,
    },
    {
      key: 3,
      text: 'Reduce your food waste with our weekly meal plans and automatic grocery list',
      image: splash3,
    },
    {
      key: 4,
      text: 'Find your balance and track your progress to stay motivated and accountable',
      image: splash4,
    },
  ];

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 100,
  };

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    try {
      viewableItems?.length && setSlideIndex(viewableItems[0]?.index);
    } catch (error) {
      // throw error silently
    }
  }).current;

  const toNextPage = (index: number) => {
    if (slideIndex < 3) {
      setSlideIndex((prevState) => prevState + 1);
      scrollViewRef?.current?.scrollToIndex({ animated: true, index });
    } else {
      NavService.navigate(EStacks.AUTH_STACK, { screen: EAuthScreens.SOCIAL_SIGN_UP });
    }
  };

  const Pagination = ({ activeDot }: any) => (
    <View style={styles.paginationContainer}>
      {[0, 0, 0, 0].map((_, i) => (
        <View
          key={i}
          style={[
            styles.paginationStyle,
            { backgroundColor: i === activeDot ? theme.colors.primary : theme.colors.primaryLight },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, height }}
        nestedScrollEnabled
      >
        <FlatList
          ref={scrollViewRef}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={handleViewableItemsChanged}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: height * 0.75 }}
          data={slides}
          renderItem={({ item }) => (
            <View key={item?.key} style={{ width, flex: 1 }}>
              <View style={{ flex: 1 }}>
                <Image style={{ width, height: imageHeight }} source={item.image} />
                <Spacer20 />
                <Image
                  source={Assets.images.splash_logo}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Spacer20 />
                <View style={styles.textView}>
                  <Text color="black" variant="h1Cg30">
                    {item.text}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />

        <Pagination activeDot={slideIndex} />
        <Spacer20 />
        <View style={{ justifyContent: 'flex-end' }}>
          <View style={styles.buttonView}>
            <MainButton title="Next" onPress={() => toNextPage(slideIndex + 1)} />

            <Pressable
              onPress={() => {
                NavService.navigate(EStacks.AUTH_STACK, { screen: EAuthScreens.LOGIN });
              }}
            >
              <Row justifyContent="center">
                <Text color="black" variant="body16">
                  Already a user?{' '}
                </Text>
                <Text style={{ textDecorationLine: 'underline' }} color="black" variant="body16">
                  Sign in
                </Text>
              </Row>
            </Pressable>
          </View>
          <Spacer20 />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 0,
    gap: 20,
  },
  textView: {
    width: '100%',
    paddingHorizontal: 21,
  },
  logo: {
    marginLeft: 21,
    height: 96,
    width: 96,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationStyle: {
    marginRight: 8,
    width: 10,
    height: 10,
    borderRadius: 360,
  },
});

export default SplashOne;
