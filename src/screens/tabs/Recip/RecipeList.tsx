import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { theme } from 'src/styles/theme';
import MexicanRecipeHeader from '../components/MexicanRecipeHeader';
import { Row } from 'src/components/Row';
import { InputField } from 'src/components/InputField';
import Assets from 'src/utils/Assets';
import { Image } from 'src/components/Image';
import { EEatStack } from 'src/navigation/appRoutes';
import NavService from 'src/navigation/NavService';
import fonts from 'src/assets/fonts';
import { Spacer10, Spacer30 } from 'src/utils/Spacing';

const RecipeList = () => {
  return (
    <View style={styles.main}>
      <MexicanRecipeHeader />

      <Row style={styles.row}>
        <View style={styles.flex}>
          <InputField leftIcon={Assets.images.search} placeholder="Search by food name..." />
        </View>
        <Pressable onPress={() => NavService.navigate(EEatStack.FOOD_DETAIL)}>
          <Image source={Assets.images.filter} width={54} height={54} />
        </Pressable>
      </Row>

          <ScrollView style={styles.padding}>
              
        <View style={styles.imageview}>
          <Pressable onPress={()=> {NavService.navigate(EEatStack.RECIPEDETAIL)}}>

          <Image height={217} style={{width:'100%'}}  source={Assets.images.Gluten} />
          </Pressable>

          <Text style={styles.maintext}>GLUTEN FREE LOW CARB KETO FISH TACOS</Text>
          <Spacer10 />
          <View style={styles.smalliconsView}>
            <View style={styles.starticon}>
              <View style={styles.smalliconmain}>
                <Image height={16} width={16} source={Assets.images.small_clock} />

                <Text style={styles.smalltext}>45</Text>
              </View>
              <View style={styles.smalliconmain}>
                <Image height={16} width={16} source={Assets.images.small_fruits} />

                <Text style={styles.smalltext}>12</Text>
              </View>
            </View>

            <View style={styles.endiconview}>
              <Image source={Assets.images.share} height={18.72} width={18.71} />

              <Image source={Assets.images.save} height={18.72} width={18.71} />
              <Image source={Assets.images.calender_plus} height={18.72} width={18.71} />
            </View>
          </View>

          <Spacer10 />

          <View style={styles.lorem}>
            <Text style={styles.loremtext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem tincidunt,
              feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.
            </Text>
          </View>
              </View>

              <Spacer30 />
              
              <View style={styles.imageview}>
                  <Image height={217} source={Assets.images.Gluten} />

                  <Text style={styles.maintext}>GLUTEN FREE LOW CARB KETO FISH TACOS</Text>
                  <Spacer10 />
                  <View style={styles.smalliconsView}>
                      <View style={styles.starticon}>
                          <View style={styles.smalliconmain}>
                              <Image height={16} width={16} source={Assets.images.small_clock} />

                              <Text style={styles.smalltext}>45</Text>
                          </View>
                          <View style={styles.smalliconmain}>
                              <Image height={16} width={16} source={Assets.images.small_fruits} />

                              <Text style={styles.smalltext}>12</Text>
                          </View>
                      </View>

                      <View style={styles.endiconview}>
                          <Image source={Assets.images.share} height={18.72} width={18.71} />

                          <Image source={Assets.images.save} height={18.72} width={18.71} />
                          <Image source={Assets.images.calender_plus} height={18.72} width={18.71} />
                      </View>
                  </View>

                  <Spacer10 />

                  <View style={styles.lorem}>
                      <Text style={styles.loremtext}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem tincidunt,
                          feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.
                      </Text>
                  </View>
              </View>

              <Spacer30 />

              <View style={styles.imageview}>
                  <Image height={217} source={Assets.images.Gluten} />

                  <Text style={styles.maintext}>GLUTEN FREE LOW CARB KETO FISH TACOS</Text>
                  <Spacer10 />
                  <View style={styles.smalliconsView}>
                      <View style={styles.starticon}>
                          <View style={styles.smalliconmain}>
                              <Image height={16} width={16} source={Assets.images.small_clock} />

                              <Text style={styles.smalltext}>45</Text>
                          </View>
                          <View style={styles.smalliconmain}>
                              <Image height={16} width={16} source={Assets.images.small_fruits} />

                              <Text style={styles.smalltext}>12</Text>
                          </View>
                      </View>

                      <View style={styles.endiconview}>
                          <Image source={Assets.images.share} height={18.72} width={18.71} />

                          <Image source={Assets.images.save} height={18.72} width={18.71} />
                          <Image source={Assets.images.calender_plus} height={18.72} width={18.71} />
                      </View>
                  </View>

                  <Spacer10 />

                  <View style={styles.lorem}>
                      <Text style={styles.loremtext}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem tincidunt,
                          feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.
                      </Text>
                  </View>
              </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loremtext: {
    fontFamily: fonts.CatamaranRegular,
    fontSize: 16,
    color: theme.colors.textForeground,
  },
  lorem: {
    width: '100%',
  },
  endiconview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  smalliconmain: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  smalltext: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 16,
    color: theme.colors.textForeground,
  },
  starticon: {
    flexDirection: 'row',
    gap: 13,
  },
  smalliconsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  imageview: {
    width: '100%',
  },
  maintext: {
    fontFamily: fonts.CormorantGaramondSemiBold,
    fontSize: 20,
    color: theme.colors.secondary,
    marginTop: 16,
  },
  padding: {
    paddingHorizontal: theme.spacing.appPadding,
  },
  row: {
    paddingHorizontal: theme.spacing.appPadding,
    height: 87,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: { flex: 1, marginRight: 10 },

  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

export default RecipeList;
