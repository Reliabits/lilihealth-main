import { useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  SectionList,
  Dimensions,
  TextInput,
} from 'react-native';
import { Image } from 'src/components/Image';
import { InputField } from 'src/components/InputField';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { mealList } from 'src/utils/DummyData';
import { Spacer15, Spacer20, Spacer40 } from 'src/utils/Spacing';

const { width } = Dimensions.get('screen');
const AddFoodScreen = () => {
  const [foodList] = useState([...mealList]);

  const renderFoodItem = (item: any) => (
    <Pressable style={styles.itemContainer}>
      <View>
        <Image source={item.image} width={73} height={73} />
        <Image style={styles.imgCheck} source={Assets.images.check} width={17} height={17} />
      </View>
      <View style={styles.itemDetailContainer}>
        <Text color="secondary" variant="h2Cg22">
          {item.title}
        </Text>
        <Row>
          <Pressable style={styles.mailPlanner}>
            <Text color="primary" variant="bodyBold12">
              ADD INTO MEAL PLANNER
            </Text>
          </Pressable>
          <Row style={styles.rowMargin}>
            <Pressable>
              <Image source={Assets.images.share} width={18} height={18} />
            </Pressable>
            <Pressable>
              <Image style={styles.margin} source={Assets.images.delete} width={18} height={18} />
            </Pressable>
          </Row>
        </Row>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <View>
        <Spacer40 />
        <Row justifyContent="flex-start" style={styles.padding}>
          <Pressable onPress={() => NavService.goBack()}>
            <Image source={Assets.images.back} width={28} height={28} />
          </Pressable>
          <Text style={{ marginLeft: 12 }} color="secondary" variant="bodyBold18">
            Saved Meal
          </Text>
        </Row>
        <View style={styles.shadowContainer}>
          <View style={styles.shadow} />
        </View>
      </View>
      <ScrollView style={styles.padding}>
        <Spacer20 />
        <Row>
          <View style={styles.flex}>
            <InputField
              leftIcon={Assets.images.search}
              placeholder="Search by food or category name "
            />
          </View>
          <Pressable onPress={() => NavService.navigate(EEatStack.FOOD_DETAIL)}>
            <Image source={Assets.images.add} width={54} height={54} />
          </Pressable>
        </Row>
        <Spacer20 />
        <Text color="secondary" variant="bodyBold22">
          Meal For PCOS
        </Text>

        <Text color="lightGray" variant="body14">
          Created:{' '}
          <Text color="lightGray" variant="bodyBold14">
            3 May, 2023
          </Text>
        </Text>
        <Spacer15 />
        {foodList.map((foodItem) => (
          <View>
            <View style={styles.category}>
              <Text color="white" variant="bodyBold14">
                {foodItem.category}
              </Text>
            </View>
            <ScrollView horizontal>
              <SectionList
                nestedScrollEnabled
                sections={foodItem.data}
                renderItem={({ item }) => renderFoodItem(item)}
                renderSectionHeader={({ section }) => (
                  <Row style={styles.marginTen}>
                    <Text color="secondary" variant="h2Cg20">
                      {section.title}
                      <Text
                        color="lightGray"
                        variant="h2Cg20"
                      >{` (${section.data.length} items)`}</Text>
                    </Text>
                    <Pressable>
                      <Image source={Assets.images.add_simple} width={15} height={15} />
                    </Pressable>
                  </Row>
                )}
              />
            </ScrollView>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  padding: { paddingHorizontal: theme.spacing.appPadding },
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
  flex: { flex: 1, marginRight: 10 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', flex: 1, marginBottom: 14 },
  imgCheck: { position: 'absolute', right: -5, top: -5 },
  itemDetailContainer: { marginLeft: 20, flex: 1 },
  mailPlanner: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: theme.colors.blue200,
    borderRadius: 3,
    marginTop: 12,
  },
  margin: { marginLeft: 18 },
  rowMargin: { marginTop: 5 },
  category: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 64,
    alignSelf: 'baseline',
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.textBackground,
    marginVertical: 13,
  },
  marginTen: { marginVertical: 10, width: width - 40 },
});

export default AddFoodScreen;
