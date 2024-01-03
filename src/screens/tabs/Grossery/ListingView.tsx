import { View, Text, StyleSheet, Image, Pressable, FlatList, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer20, Spacer30 } from 'src/utils/Spacing';
import { Row } from 'src/components/Row';
import { InputField, InputFieldWhite } from 'src/components/InputField';
import fonts from 'src/assets/fonts';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';
import { useAppDispatch, useAppSelector } from 'src/store/reduxHook';
import { useFoodMenuQuery, useFoodCategoryQuery } from 'src/store/services/eatService';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import {
  setFoodMenu,
  setFoodCategory,
  setGroceryList,
  setShoppingIngredientItems,
} from 'src/store/reducers/eatReduces';
import { IFoodCategory } from 'src/types/interfaces/Eat';

const ListingView = () => {
  const visualFeedback = useVisualFeedback();
  const [foodList, setFoodList] = useState<IFoodCategory[]>([]);
  const foodState = useAppSelector((state) => state.eat);
  const foodMenuQuery = useFoodCategoryQuery({ refetchOnFocus: true });
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshing = useCallback(() => {
    foodMenuQuery.refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // setFoodList([...foodState.groceryList]);
    foodMenuQuery.isLoading
      ? visualFeedback?.showLoadingBackdrop()
      : visualFeedback?.hideLoadingBackdrop();
    if (foodMenuQuery.isSuccess === true) {
      dispatch(setGroceryList(foodMenuQuery.data.data.categories || []));
      setFoodList(foodMenuQuery.data.data.categories || []);
    }
  }, [foodMenuQuery.isLoading, foodMenuQuery.isFetching]);

  const handleSearch = (txt: string) => {
    const res: IFoodCategory[] = [];
    foodState.groceryList.map((item) => {
      if (item.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) res.push(item);
      else {
        item.subCategories.forEach((subCat) => {
          subCat.foods.forEach((food) => {
            if (food.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) {
              const checkItem = res.filter((postItem) => item.id === postItem.id);
              if (checkItem.length === 0) {
                res.push(item);
              }
            }
          });
        });
      }
    });
    setFoodList([...res]);
  };

  const handleCancel = () => {
    const res = [...foodState.groceryList];
    res.forEach((item) => {
      item.selected = false;
      item.subCategories.map((child) =>
        child.foods.forEach((food) => {
          food.selected = false;
        })
      );
    });
    dispatch(setGroceryList([...res]));
    NavService.goBack();
  };

  return (
    <View style={styles.mainView}>
      <View>
        <Spacer30 />
        <Pressable onPress={() => NavService.goBack()} style={styles.backiconView}>
          <Image style={styles.backicon} source={Assets.images.back} />
        </Pressable>

        <Spacer20 />
        <Row>
          <View style={styles.input}>
            <InputFieldWhite
              leftIcon={Assets.images.search}
              placeholder="Search by food or category name"
              onChangeText={handleSearch}
            />
          </View>
        </Row>
        <Spacer30 />
      </View>
      <View style={styles.paddingView}>
        <FlatList
          data={foodList}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />}
          renderItem={({ item }) => (
            <View style={styles.itemDetail}>
              <Pressable
                onPress={() => {
                  item.selected = !item.selected;
                  setFoodList([...foodList]);
                }}
                style={styles.itemView}
              >
                <Text style={styles.text}>{item.name}</Text>
                <Image
                  style={styles.dropdown}
                  source={
                    item.selected ? Assets.images.down_arrow_dark : Assets.images.left_arrow_dark
                  }
                />
              </Pressable>
              {item.selected && <Spacer30 />}
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                {item.selected &&
                  item.subCategories.map((child) =>
                    child.foods.map((food) => (
                      <Pressable
                        onPress={() => {
                          food.selected = !food.selected;
                          setFoodList([...foodList]);
                          // handleSelectFood(item.id, child.id, food.id);
                        }}
                        style={styles.item}
                      >
                        <View>
                          <View style={styles.itemIcon}>
                            <Image style={{ width: 24, height: 24 }} source={Assets.temp.potato} />
                          </View>
                          {food.selected && (
                            <Image
                              style={{
                                width: 23,
                                height: 23,
                                resizeMode: 'contain',
                                position: 'absolute',
                                right: 0,
                                top: -10,
                              }}
                              source={Assets.images.check_round}
                            />
                          )}
                        </View>
                        <Text style={styles.txtItem}>{food.name}</Text>
                      </Pressable>
                    ))
                  )}
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable
          onPress={() => {
            const tempCategory: { category: IFoodCategory; foods: IFood[] }[] = [];
            foodList.forEach((item) => {
              const tempFood: IFood[] = [];
              item.subCategories.forEach((subItem) => {
                subItem.foods.forEach((food) => {
                  if (food.selected) {
                    tempFood.push(food);
                  }
                });
              });
              if (tempFood.length > 0) {
                const temp = { category: item, foods: tempFood };
                tempCategory.push(temp);
              }
            });
            dispatch(setShoppingIngredientItems(tempCategory));
            NavService.navigate(EEatStack.LISTVIEW);
          }}
          style={styles.button}
        >
          <Text style={styles.buttontext}>Save</Text>
        </Pressable>

        <Pressable onPress={handleCancel} style={styles.button2}>
          <Text style={styles.buttontext2}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: theme.spacing.appPadding,
    gap: 10,
  },
  button: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    height: 54,
    alignItems: 'center',
  },

  buttontext: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 16,
    color: theme.colors.white,
  },

  button2: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    height: 54,
    alignItems: 'center',
  },

  buttontext2: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 16,
    color: theme.colors.primary,
  },

  dropdown: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 20,
    flex: 1,
    color: theme.colors.secondary,
  },
  itemView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDetail: {
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 22,
  },
  paddingView: {
    paddingHorizontal: theme.spacing.appPadding,
    flex: 1,
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  backicon: {
    width: 28,
    height: 28,
  },
  backiconView: {
    paddingHorizontal: theme.spacing.appPadding,
  },
  mainView: {
    flex: 1,
    backgroundColor: theme.colors.secondaryLight,
  },
  item: {
    marginBottom: 20,
    alignItems: 'center',
    marginRight: 22,
  },
  itemIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.textForeground,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: theme.colors.textForeground,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 6,
    elevation: 2.5,
  },
  txtItem: {
    fontSize: 12,
    color: theme.colors.textForeground,
  },
});

export default ListingView;
