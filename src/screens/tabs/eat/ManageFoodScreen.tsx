/* eslint-disable no-param-reassign */
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { CheckBox } from 'src/components/CheckBox';
import { Image } from 'src/components/Image';
import { RadioButton } from 'src/components/RadioButton';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { MainButton } from 'src/components/buttons/MainButton';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import NavService from 'src/navigation/NavService';
import { setFoodCategory } from 'src/store/reducers/eatReduces';
import { useAppDispatch, useAppSelector } from 'src/store/reduxHook';
import { useSaveMealMutation } from 'src/store/services/MealService';
import { useFoodCategoryQuery } from 'src/store/services/eatService';
import { theme } from 'src/styles/theme';
import { IFood, IFoodCategory, IFoodSubCategory } from 'src/types/interfaces/Eat';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer15, Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing';
import InfoButton from '../components/InfoButton';
import InfoModal from '../components/InfoModal';

const ManageFoodScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<IFoodCategory>();
  const [foodData, setFoodData] = useState<IFoodCategory[]>();
  const visualFeedback = useVisualFeedback();
  const userState = useAppSelector((state) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState<boolean>(false);
  const [addFoodType, setAddFoodType] = useState<string>('Add to Meal Planner');
  const [mealName, setMealName] = useState<string>();
  const [mealNameError, setMealNameError] = useState<boolean>(false);
  const [saveMeal] = useSaveMealMutation();
  const foodMenuQuery = useFoodCategoryQuery({
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    foodMenuQuery.isLoading
      ? visualFeedback?.showLoadingBackdrop()
      : visualFeedback?.hideLoadingBackdrop();
    if (foodMenuQuery.isSuccess === true) {
      dispatch(setFoodCategory(foodMenuQuery.data.data.categories || []));
      setFoodData(foodMenuQuery.data.data.categories || []);
    }
    return () => setFoodData([]);
  }, [foodMenuQuery.isLoading, foodMenuQuery.isFetching]);

  useFocusEffect(
    useCallback(() => {
      foodMenuQuery.refetch();
    }, [])
  );
  const onSelectCategory = (item: IFoodCategory) => {
    setSelectedCategory(item);
  };

  const renderTag = (item: IFoodCategory) => (
    <Pressable
      onPress={() => onSelectCategory(item)}
      style={[styles.tab, selectedCategory === item && styles.tabActive]}
    >
      <Row>
        <Text color={selectedCategory === item ? 'white' : 'textForeground'} variant="bodyBold14">
          {item.name}
        </Text>
        {selectedCategory === item && <InfoButton onPress={() => setCategoryModalVisible(true)} />}
      </Row>
    </Pressable>
  );

  const selectFoodData = (cat: IFoodCategory, item: IFoodSubCategory, index: number) => {
    item.selected = !item.selected;
    cat.subCategories[index] = item;
    const updateData = foodData?.filter((child) => (child.id === cat.id ? cat : child));
    setFoodData(updateData);
  };

  const handleSaveMeal = async () => {
    if (!mealName) {
      setMealNameError(true);
      return;
    }
    setMealNameError(false);
    setModalVisible(false);
    if (addFoodType === 'Add to Saved Meal') {
      const selectedFood: { id: number }[] = [];
      foodData?.forEach((cat) => {
        cat.subCategories.forEach((item) => {
          if (item.selected) {
            item.foods.forEach((food) => {
              if (food.selected === true) {
                selectedFood.push({ id: food.id });
              }
            });
          }
        });
      });
      setFoodData(foodData ? [...foodData] : []);
      if (selectedFood.length === 0) {
        Toast.show({
          type: 'error',
          text1: 'Please select food items',
          visibilityTime: 5000,
        });
        return;
      }
      const postData = {
        userId: userState.user?.id,
        name: mealName,
        userMeals: selectedFood,
      };
      try {
        visualFeedback?.showLoadingBackdrop();
        const response = await saveMeal(postData).unwrap();
        console.log('success', response);
        Toast.show({
          type: 'success',
          text1: 'Meal added successfully',
          visibilityTime: 5000,
        });
        // reset state data
        foodData?.forEach((cat) => {
          cat.subCategories.forEach((item) => {
            if (item.selected) {
              item.foods.forEach((food) => {
                if (food.selected === true) {
                  food.selected = false;
                }
              });
              item.selected = false;
            }
          });
        });
        setFoodData(foodData ? [...foodData] : []);
      } catch (error: any) {
        console.log('error', error);
        Toast.show({
          type: 'error',
          text1: error?.data?.error ? error?.data?.message : 'Invalid server response!',
          visibilityTime: 5000,
        });
      } finally {
        visualFeedback?.hideLoadingBackdrop();
      }
    }
  };

  const renderListItem = (cat: IFoodCategory, item: IFoodSubCategory, index: number) => (
    <View>
      <View style={styles.itemHeader}>
        <CheckBox
          title={item.name}
          value={item.selected}
          textVariant="bodyBold20"
          onValueChange={() => selectFoodData(cat, item, index)}
        />
        <TouchableOpacity
          onPress={() => selectFoodData(cat, item, index)}
          style={styles.itemHeader}
        >
          <Image
            source={item.selected ? Assets.images.dropdown_active : Assets.images.dropdown}
            width={26}
            height={26}
          />
        </TouchableOpacity>
      </View>
      {item.selected && (
        <View style={{ marginLeft: 30 }}>
          {item.foods.map((child: IFood, ind: number) => (
            <CheckBox
              title={child.name}
              value={child.selected}
              onValueChange={() => {
                child.selected = !child.selected;
                setFoodData(foodData ? [...foodData] : []);
              }}
            />
          ))}
        </View>
      )}
    </View>
  );

  const renderAddFoodModal = () => (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ width: '100%' }}>
            <Row>
              <Text color="secondary" variant="bodyBold16">
                Add Foods
              </Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Image source={Assets.images.close_primary} width={28} height={28} />
              </Pressable>
            </Row>
            <Spacer30 />
            <RadioButton
              title="Add to Meal Planner"
              selected={addFoodType}
              onSelect={(val) => setAddFoodType(val)}
            />
            <Spacer10 />
            <RadioButton
              title="Add to Shopping List"
              selected={addFoodType}
              onSelect={(val) => setAddFoodType(val)}
            />
            <Spacer10 />
            <RadioButton
              title="Add to Saved Meal"
              selected={addFoodType}
              onSelect={(val) => setAddFoodType(val)}
            />
            <Spacer20 />
            <Text color="primary" variant="body14">
              Meal Name *
            </Text>
            <TextInput
              value={mealName}
              onChangeText={setMealName}
              style={{ height: 42, ...theme.textVariants.bodyBold18 }}
            />
            <View style={styles.hr} />
            {mealNameError && (
              <Text color="red" variant="body14">
                Enter meal name
              </Text>
            )}
            <Spacer30 />
            <MainButton title="Save" onPress={handleSaveMeal} />
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Spacer40 />
        <Row justifyContent="flex-start" style={styles.padding}>
          <Pressable onPress={() => NavService.goBack()}>
            <Image source={Assets.images.back} width={28} height={28} />
          </Pressable>
          <Text style={{ marginLeft: 12 }} color="secondary" variant="bodyBold18">
            Food List
          </Text>
        </Row>
        <Spacer15 />
        <ScrollView
          style={{ marginLeft: theme.spacing.appPadding }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {foodData?.map((item) => renderTag(item))}
        </ScrollView>
        <View style={styles.shadowContainer}>
          <View style={styles.shadow} />
        </View>
      </View>
      <View style={[styles.padding, { backgroundColor: theme.colors.secondaryLight, flex: 1 }]}>
        <FlatList
          data={selectedCategory?.subCategories}
          ListEmptyComponent={() => (
            <View style={styles.noData}>
              <Text color="textForeground" variant="body14">
                No data found
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => renderListItem(selectedCategory, item, index)}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
      <View
        style={{
          padding: theme.spacing.appPadding,
          backgroundColor: theme.colors.secondaryLight,
        }}
      >
        <MainButton title="Add Food" onPress={() => setModalVisible(true)} />
      </View>
      {renderAddFoodModal()}
      <InfoModal
        setModalVisible={setCategoryModalVisible}
        modalVisible={categoryModalVisible}
        category={selectedCategory?.name}
        info={selectedCategory?.notes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  padding: { paddingHorizontal: theme.spacing.appPadding },
  tab: {
    borderRadius: 64,
    backgroundColor: theme.colors.textBackground,
    paddingHorizontal: 17,
    paddingVertical: 4,
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  shadowContainer: { overflow: 'hidden', paddingBottom: 5, marginTop: 15 },
  shadow: {
    height: 1,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  hr: { height: 1, backgroundColor: theme.colors.secondaryDark },
  noData: { alignItems: 'center', marginTop: 20 },
  infoButton: {
    borderRadius: 360,
    borderWidth: 1,
    borderColor: theme.colors.white,
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: -5,
  },
  divider: {
    height: 1,
    backgroundColor: '#DEE5E7',
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default ManageFoodScreen;
