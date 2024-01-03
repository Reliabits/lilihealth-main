import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Row } from 'src/components/Row';
import Assets from 'src/utils/Assets';
import { InputField, InputFieldWhite } from 'src/components/InputField';
import { Spacer10, Spacer15, Spacer20 } from 'src/utils/Spacing';
import { theme } from 'src/styles/theme';
import fonts from 'src/assets/fonts';
import { CheckBox } from 'src/components/CheckBox';
import { useAppDispatch, useAppSelector } from 'src/store/reduxHook';
import { IFood, IFoodCategory } from 'src/types/interfaces/Eat';
import {
  removeShoppingIngredientItems,
  setShoppingCompletedItems,
  setShoppingUpdateDate,
} from 'src/store/reducers/eatReduces';
import Utils from 'src/utils/Utils';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';
import ShoppingHeader from '../components/ShoppingHeader';
// import CheckBox from '@react-native-community/checkbox';

const ListView = () => {
  const dispatch = useAppDispatch();
  const foodState = useAppSelector((state) => state.eat);
  const [foodData, setFoodData] = useState<{ category: IFoodCategory; foods: IFood[] }[]>([]);
  const [completeFoodData, setCompleteFoodData] = useState<
    { category: IFoodCategory; foods: IFood[] }[]
  >([]);
  const [selectedFoodData, setSelectedFoodData] = useState<IFood[]>([]);
  const [tempFoodData, setTempFoodData] = useState<{ category: IFoodCategory; foods: IFood[] }[]>(
    []
  );

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setCompleteFoodData(foodState.shoppingCompletedItems || []);
  }, [foodState.shoppingCompletedItems]);

  useEffect(() => {
    setFoodData(foodState.shoppingIngredientItems || []);
  }, [foodState.shoppingIngredientItems]);

  const findItem = (id: number): boolean => {
    const red = selectedFoodData.filter((find) => find.id === id);
    if (red.length > 0) return true;
    return false;
  };

  const handleCompletedSearch = (txt: string) => {
    const res: { category: IFoodCategory; foods: IFood[] }[] = [];
    foodState.shoppingCompletedItems.forEach((item) => {
      if (item.category.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) res.push(item);
      else {
        item.foods.forEach((food) => {
          if (food.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) {
            const checkItem = res.filter((postItem) => item.category.id === postItem.category.id);
            if (checkItem.length === 0) {
              res.push(item);
            }
          }
        });
      }
    });
    setCompleteFoodData([...res]);
  };
  const handleIngredientSearch = (txt: string) => {
    const res: { category: IFoodCategory; foods: IFood[] }[] = [];
    foodState.shoppingIngredientItems.forEach((item) => {
      if (item.category.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) res.push(item);
      else {
        item.foods.forEach((food) => {
          if (food.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) {
            const checkItem = res.filter((postItem) => item.category.id === postItem.category.id);
            if (checkItem.length === 0) {
              res.push(item);
            }
          }
        });
      }
    });
    setFoodData([...res]);
  };

  const renderIngredientList = () => (
    <FlatList
      data={foodData}
      renderItem={({ item }) => (
        <View style={styles.fruitslistView}>
          <View style={styles.topView}>
            <Text style={styles.text1}>{item.category.name}</Text>

            <View style={styles.leftView}>
              <Image source={Assets.images.add_simple} style={{ width: 15, height: 15 }} />
              <Image source={Assets.images.three_dots} />
            </View>
          </View>

          <Spacer20 />

          {item.foods.map((foodItem) => (
            <View key={foodItem.id} style={styles.dataView}>
              <View style={styles.startView}>
                <CheckBox
                  style={{top:5}}
                  title=""
                  value={findItem(foodItem.id)}
                  onValueChange={(val) => {
                    if (val) {
                      let foundFlag = false;
                      tempFoodData.forEach((tFood) => {
                        if (tFood.category.id === item.category.id) {
                          const res = tFood.foods.filter((sel) => sel.id !== foodItem.id);
                          res.push(foodItem);
                          tFood.foods = res;
                          foundFlag = true;
                          setTempFoodData([...tempFoodData]);
                        }
                      });
                      if (!foundFlag) {
                        const catFoodObj = { category: item.category, foods: [{ ...foodItem }] };
                        tempFoodData.push(catFoodObj);
                        setTempFoodData([...tempFoodData]);
                      }

                      const res = selectedFoodData.filter((sel) => sel.id !== foodItem.id);
                      res.push(foodItem);
                      setSelectedFoodData([...res]);
                    } else {
                      const res = selectedFoodData.filter((sel) => sel.id !== foodItem.id);
                      setSelectedFoodData([...res]);

                      let emptyFlag = false;
                      tempFoodData.forEach((tFood) => {
                        if (tFood.category.id === item.category.id) {
                          const resObj = tFood.foods.filter((sel) => sel.id !== foodItem.id);
                          tFood.foods = resObj;
                          if (resObj.length === 0) {
                            emptyFlag = true;
                          }
                          setTempFoodData([...tempFoodData]);
                        }
                      });
                      if (emptyFlag) {
                        const tfdRes = tempFoodData.filter(
                          (tFood) => tFood.category.id !== item.category.id
                        );
                        setTempFoodData([...tfdRes]);
                      }
                    }
                  }}
                />

                <View style={{width:50, height:50, justifyContent:'center', alignItems:'center', backgroundColor:'#ffffff', elevation:5, borderRadius:50}}>
                <Image
                  style={{ height: 29, width: 29, resizeMode: 'contain', marginHorizontal: 12 }}
                  source={Assets.temp.potato}
                  />
                </View>

                <View>
                  <Text style={styles.fruitstext1}>{foodItem.name}</Text>
                  <Text style={styles.fruitstext2}>{foodItem.quantity} pieces</Text>
                </View>
              </View>

              <View style={styles.endView}>
                <Pressable
                  onPress={() => {
                    const res = item.foods.filter((fItem) => fItem.id !== foodItem.id);
                    item.foods = res;
                    setFoodData([...foodData]);
                  }}
                >
                  <Image
                    style={{ width: 17, height: 17, resizeMode: 'contain' }}
                    source={Assets.images.delete}
                  />
                </Pressable>
                <Image source={Assets.images.edit_simple} />
              </View>
            </View>
          ))}
        </View>
      )}
    />
  );

  const renderCompletedItems = () => (
    <View>
      <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 15 }}>
        {foodState.lastShoppingUpdate && `Last Updated: ${foodState.lastShoppingUpdate}`}
      </Text>
      <FlatList
        data={completeFoodData}
        renderItem={({ item }) => (
          <View style={styles.fruitslistView}>
            <View style={styles.topView}>
              <Text style={styles.text1}>{item.category.name}</Text>
            </View>

            <Spacer20 />

            {item.foods.map((foodItem) => (
              <View key={foodItem.id} style={styles.dataView}>
                <View style={styles.startView}>
                  <Image
                    style={{ height: 29, width: 29, resizeMode: 'contain', marginRight: 12 }}
                    source={Assets.temp.potato}
                  />

                  <View>
                    <Text style={styles.fruitstext1}>{foodItem.name}</Text>
                    <Text style={styles.fruitstext2}>{foodItem.quantity} pieces</Text>
                  </View>
                </View>

                <View style={styles.endView}>
                  <Image style={{ width: 15, height: 11 }} source={Assets.images.check_simple} />
                </View>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.secondaryLight }}>
      <ShoppingHeader />
      <View style={styles.padding}>
        <Spacer20 />
        <Row>
          <View style={styles.flex}>
            <InputFieldWhite
              leftIcon={Assets.images.search}
              placeholder="Search by food or category name"
              onChangeText={
                activeTab === 1
                  ? handleIngredientSearch
                  : activeTab === 3
                  ? handleCompletedSearch
                  : undefined
              }
            />
          </View>
          <Pressable
            onPress={() => {
              NavService.popTo(3);
              NavService.navigate(EEatStack.MANAGE_FOOD);
            }}
          >
            <Image source={Assets.images.add} style={{ width: 54, height: 54 }} />
          </Pressable>
        </Row>

        <Spacer20 />

        <View style={styles.textSelectionView}>
          <Pressable onPress={() => setActiveTab(1)}>
            <Text style={activeTab === 1 ? styles.textSelection : styles.textSelection1}>
              Ingredient List
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab(2)}>
            <Text style={activeTab === 2 ? styles.textSelection : styles.textSelection1}>
              Pending items
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab(3)}>
            <Text style={activeTab === 3 ? styles.textSelection : styles.textSelection1}>
              Completed items
            </Text>
          </Pressable>
        </View>
        <Spacer20 />
      </View>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        {activeTab === 1 && renderIngredientList()}
        {activeTab === 3 && renderCompletedItems()}
      </View>
      <Spacer20 />
      {activeTab === 1 && (
        <View style={styles.bottombutton}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setShoppingCompletedItems(tempFoodData));
              dispatch(removeShoppingIngredientItems(tempFoodData));
              dispatch(setShoppingUpdateDate(Utils.formateDate(new Date())));
            }}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Mark As Completed</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textForeground: {
    color: theme.colors.textForeground,
  },
  primaryText: {
    color: theme.colors.primary,
  },
  buttontext: {
    fontFamily: fonts.CatamaranMedium,
    color: theme.colors.white,
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 54,
    borderRadius: 4,
  },
  bottombutton: {
    width: '100%',
    bottom: 20,
    paddingHorizontal: theme.spacing.appPadding,
  },

  fruitstext2: {
    fontFamily: fonts.CatamaranRegular,
    fontSize: 14,
    color: theme.colors.textForeground,
  },

  fruitstext1: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 16,
    color: theme.colors.secondary,
  },
  endView: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 22,
    alignItems: 'center',
  },
  startView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    paddingVertical: 12,
    gap:12
  },

  dataView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 37,
  },
  text1: {
    color: theme.colors.secondary,
    fontFamily: fonts.CormorantGaramondSemiBold,
    fontSize: 20,
  },

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fruitslistView: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 26,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    marginBottom: 20,
  },

  textSelection1: {
    fontFamily: fonts.CatamaranMedium,
    color: theme.colors.textForeground,
    fontSize: 15,
  },
  textSelection: {
    fontFamily: fonts.CatamaranBold,
    color: theme.colors.primary,
    fontSize: 15,
  },

  textSelectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  flex: { flex: 1, marginRight: 10 },

  padding: {
    paddingHorizontal: theme.spacing.appPadding,
    // marginBottom:80
  },
});

export default ListView;
