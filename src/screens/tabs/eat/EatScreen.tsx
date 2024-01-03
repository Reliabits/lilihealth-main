import { useCallback, useEffect, useState } from 'react';
import { ScrollView, Pressable, StyleSheet, View, RefreshControl } from 'react-native';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';
import { setFoodMenu } from 'src/store/reducers/eatReduces';
import { useAppDispatch, useAppSelector } from 'src/store/reduxHook';
import { useLearnListQuery } from 'src/store/services/Learn.service';
import { useFoodMenuQuery } from 'src/store/services/eatService';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { eatCategories } from 'src/utils/DummyData';
import { Spacer20, Spacer30 } from 'src/utils/Spacing';

const EatScreen = () => {
  const visualFeedback = useVisualFeedback();
  const [eatList] = useState([...eatCategories]);
  const [focused, setFocused] = useState<number>(-1);
  const foodMenuQuery = useFoodMenuQuery({ refetchOnFocus: true });

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => { NavService.goBack() }} style={styles.body}>
        <Image source={Assets.images.back} width={28} height={28} />
      </Pressable>
      <Spacer30 />
      <Text color="secondary" variant="h1Cg30">
        Categories
      </Text>
      <Spacer20 />

      {/* {eatState.foodList.map((value) => ( */}
      {eatList.map((value) => (
        <Pressable
          key={value.id}
          onLongPress={() => setFocused(value.id)}
          onPressOut={() => setFocused(-1)}
          onPress={() => {
            if (value.title.toLocaleLowerCase().includes('food')) {
              NavService.navigate(EEatStack.MANAGE_FOOD, { title: value.title });
            } else if (value.title.toLocaleLowerCase().includes('recipe')) {
              NavService.navigate(EEatStack.RECIPES_CATEGORY);
            } else if (value.title.toLocaleLowerCase().includes('meal planner')) {
              NavService.navigate(EEatStack.MEALPLANNERLISTING);
            } else if (value.title.toLocaleLowerCase().includes('grocery list')) {
              NavService.navigate(EEatStack.ADDSHOPPINGLIST);
            } else if (value.title.toLocaleLowerCase().includes('saved meal')) {
              NavService.navigate(EEatStack.ADD_FOOD);
            }
          }}
          style={[styles.itemContainer, value.id === focused ? styles.itemFocused : {}]}
        >
          <Text color={value.id === focused ? 'white' : 'black'} variant="bodyBold18">
            {value.title}
          </Text>
          <View style={styles.image}>
            <Image source={value.image} width={80} height={80} />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue100,
    paddingHorizontal: theme.spacing.appPadding,
  },
  body: { marginTop: 40 },
  itemContainer: {
    paddingHorizontal: 35,
    paddingVertical: 29,
    backgroundColor: theme.colors.white,
    marginBottom: 48,
    borderBottomLeftRadius: 40,
    borderTopEndRadius: 40,
  },
  itemFocused: {
    backgroundColor: theme.colors.primary,
  },
  image: {
    position: 'absolute',
    right: 46,
    top: -21,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
});

export default EatScreen;
