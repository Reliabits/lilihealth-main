import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageSourcePropType, Platform, StyleSheet, View } from 'react-native';
import { Text } from 'src/components/Text';
import LearnScreen from 'src/screens/tabs/learn/LearnScreen';
import EatScreen from 'src/screens/tabs/eat/EatScreen';
import HomeScreen from 'src/screens/tabs/HomeScreen';
import ProfileScreen from 'src/screens/tabs/ProfileScreen';
import Assets from 'src/utils/Assets';
import { Image } from 'src/components/Image';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnDetailScreen from 'src/screens/tabs/learn/LearnDetailScreen';
import ArticleDetailScreen from 'src/screens/tabs/learn/ArticleDetailScreen';
import FavoriteScreen from 'src/screens/tabs/learn/FavoriteScreen';
import ManageFoodScreen from 'src/screens/tabs/eat/ManageFoodScreen';
import FoodDetailScreen from 'src/screens/tabs/eat/FoodDetailScreen';
import AddFoodScreen from 'src/screens/tabs/eat/AddFoodScreen';
import ListView from 'src/screens/tabs/Grossery/ListView';
import AddShoppingList from 'src/screens/tabs/Grossery/AddShoppingList';

import MealPlannerListing from 'src/screens/tabs/MealPlanner/MealPlannerListing';
import AddMealPlan from 'src/screens/tabs/MealPlanner/AddMealPlan';
import ReciepeCategory from 'src/screens/tabs/Recip/ReciepeCategory';
import RecipeList from 'src/screens/tabs/Recip/RecipeList';
import RecipeDetail from 'src/screens/tabs/Recip/RecipeDetail';
import HairGrowth from 'src/screens/tabs/TrackScreen/HairGrowth';
import MenstruationCycle from 'src/screens/tabs/TrackScreen/MenstruationCycle';
import MenstruationCycleTwo from 'src/screens/tabs/TrackScreen/MenstruationCycleTwo';
import Loading from 'src/screens/tabs/TrackScreen/Loading';
import AddLabResults from 'src/screens/tabs/TrackScreen/AddLabResults';
import ListingView from 'src/screens/tabs/Grossery/ListingView';
import { EBottomTabs, EEatStack, ELearnStack, ETrackScreen } from './appRoutes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LearnStack = () => (
  <Stack.Navigator
    initialRouteName={ELearnStack.LEARN_DETAIL}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ELearnStack.LEARN} component={LearnScreen} />
    <Stack.Screen name={ELearnStack.LEARN_DETAIL} component={LearnDetailScreen} />
    <Stack.Screen name={ELearnStack.ARTICLE_DETAIL} component={ArticleDetailScreen} />
    <Stack.Screen name={ELearnStack.FAVORITE} component={FavoriteScreen} />
  </Stack.Navigator>
);

const EatStack = () => (
  <Stack.Navigator initialRouteName={EEatStack.EAT} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={EEatStack.RECIPEDETAIL} component={RecipeDetail} />
    <Stack.Screen name={EEatStack.RECIPELIST} component={RecipeList} />
    <Stack.Screen name={EEatStack.RECIPES_CATEGORY} component={ReciepeCategory} />
    <Stack.Screen name={EEatStack.ADDMEALPLAN} component={AddMealPlan} />
    <Stack.Screen name={EEatStack.MEALPLANNERLISTING} component={MealPlannerListing} />
    <Stack.Screen name={EEatStack.ADDSHOPPINGLIST} component={AddShoppingList} />
    <Stack.Screen name={EEatStack.LISTINGVIEW} component={ListingView} />
    <Stack.Screen name={EEatStack.LISTVIEW} component={ListView} />
    <Stack.Screen name={EEatStack.EAT} component={EatScreen} />
    <Stack.Screen name={EEatStack.MANAGE_FOOD} component={ManageFoodScreen} />
    <Stack.Screen name={EEatStack.FOOD_DETAIL} component={FoodDetailScreen} />
    <Stack.Screen name={EEatStack.ADD_FOOD} component={AddFoodScreen} />
  </Stack.Navigator>
);

const TrackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ETrackScreen.HAIRGROWTH} component={HairGrowth} />
    <Stack.Screen name={ETrackScreen.MENSTRUATIONCYCLE} component={MenstruationCycle} />
    <Stack.Screen name={ETrackScreen.MENSTRUATIONCYCLETWO} component={MenstruationCycleTwo} />
    <Stack.Screen name={ETrackScreen.LOADING} component={Loading} />
    <Stack.Screen name={ETrackScreen.ADDLABRESULTS} component={AddLabResults} />
  </Stack.Navigator>
);

export const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let title = '';
        let image = '';
        switch (route.name) {
          case EBottomTabs.LEARN:
            title = 'Learn';
            image = focused ? Assets.images.learn_active : Assets.images.learn;
            break;
          case EBottomTabs.EAT:
            title = 'Eat';
            image = focused ? Assets.images.eat_active : Assets.images.eat;
            break;
          case EBottomTabs.HOME:
            title = 'Home';
            image = focused ? Assets.images.home_active : Assets.images.home;
            break;
          case EBottomTabs.TRACK:
            title = 'Track';
            image = focused ? Assets.images.track_active : Assets.images.track;
            break;
          case EBottomTabs.PROFILE:
            title = 'Profile';
            image = focused ? Assets.images.profile_active : Assets.images.profile;
            break;
          default:
            break;
        }

        return (
          <View style={styles.container}>
            <Image source={image as ImageSourcePropType} width={24} height={24} />
            <Text
              style={styles.text}
              color={focused ? 'primary' : 'textForeground'}
              variant="bodyBold14"
            >
              {title}
            </Text>
          </View>
        );
      },
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: { ...styles.tabStyle },
    })}
  >
    <Tab.Screen name={EBottomTabs.LEARN} component={LearnStack} options={{ headerShown: false }} />
    <Tab.Screen name={EBottomTabs.EAT} component={EatStack} options={{ headerShown: false }} />
    <Tab.Screen name={EBottomTabs.HOME} component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name={EBottomTabs.TRACK} component={TrackScreen} options={{ headerShown: false }} />
    {/* <Tab.Screen name={EBottomTabs.TRACK} component={TrackScreen} options={{ headerShown: false }} /> */}
    <Tab.Screen
      name={EBottomTabs.PROFILE}
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabStyle: {
    height: Platform.OS === 'ios' ? 95 : 69,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  text: { marginTop: 8 },
});
