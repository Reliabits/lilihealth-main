import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { theme } from 'src/styles/theme';
import MealHeader from '../components/MealHeader';
import { Spacer10, Spacer20 } from 'src/utils/Spacing';
import fonts from 'src/assets/fonts';
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker';
import Utils from 'src/utils/Utils';
import { Image } from 'src/components/Image';
import Assets from 'src/utils/Assets';
import NavService from 'src/navigation/NavService';
import { EEatStack } from 'src/navigation/appRoutes';

const MealPlannerListing = () => {
  const [dob, setDob] = useState<string>();

  return (
    <View style={styles.main}>
      <MealHeader />

      <Spacer20 />

      <View style={styles.dateView}>
        <View style={styles.todayDate}>
          <Text style={styles.datetext}>Mar, 2023</Text>
        </View>

        <View style={styles.calender}>
          <View style={styles.todaytextView}>
            <Text style={styles.todaytext}>Today</Text>
          </View>

          <DatePickerPrimary
            label=""
            value={dob ? Utils.parseDate(dob) : new Date()}
            onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
          />

          <View style={styles.addicon}>
            <Image source={Assets.images.add_small_simple} height={9} width={9} />
          </View>
        </View>
      </View>

      <Spacer20 />

      <View style={styles.bigDateView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.afterscroll}>
            <View style={styles.dateandday}>
              <Text style={styles.day}>Mon</Text>

              <Text style={styles.date}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>

            <View style={styles.dateandday1}>
              <Text style={styles.day1}>Mon</Text>

              <Text style={styles.date1}>27</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.padding}>
        <View style={styles.breakfastView}>
          <Text style={styles.breakfasttext}>BreakFast</Text>
          <Pressable onPress={()=> NavService.navigate(EEatStack.ADDMEALPLAN)} style={styles.addicon}>
            <Image source={Assets.images.add_small_simple} height={9} width={9} />
          </Pressable>
        </View>
        <Spacer20 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>

        <Spacer10 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>

        <View style={styles.breakfastView}>
          <Text style={styles.breakfasttext}>Lunch</Text>
          <Pressable onPress={()=> NavService.navigate(EEatStack.ADDMEALPLAN)} style={styles.addicon}>
            <Image source={Assets.images.add_small_simple} height={9} width={9} />
          </Pressable>
        </View>
        <Spacer20 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>

        <Spacer10 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>

        <View style={styles.breakfastView}>
          <Text style={styles.breakfasttext}>Dinner</Text>
          <Pressable onPress={()=> NavService.navigate(EEatStack.ADDMEALPLAN)} style={styles.addicon}>
            <Image source={Assets.images.add_small_simple} height={9} width={9} />
          </Pressable>
        </View>
        <Spacer20 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>

        <Spacer10 />

        <View style={styles.cardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={Assets.temp.egg} height={61} width={66} />

            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Egg Bruschetta</Text>
              <View style={styles.mainsmallView}>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_clock} height={16} width={16} />
                  <Text style={styles.smalltext}>22</Text>
                </View>
                <View style={styles.smalliconsandtext}>
                  <Image source={Assets.images.small_fruits} height={16} width={16} />

                  <Text style={styles.smalltext}>8</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.threedotView}>
            <Image source={Assets.images.three_dots} height={17.5} width={3.5} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  smalltext: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 16,
    color: theme.colors.textForeground,
  },
  threedotView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainsmallView: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 5,
  },
  smalliconsandtext: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 18,
    color: theme.colors.secondary,
  },
  cardTextView: {
    // alignItems:'center'
  },
  cardView: {
    padding: 12,
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  breakfasttext: {
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 20,
    color: theme.colors.secondary,
  },
  afterscroll: { gap: 12, justifyContent: 'center', flexDirection: 'row', width: '100%' },
  addicon: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
  },
  padding: {
    paddingHorizontal: theme.spacing.appPadding,
  },
  breakfastView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 23,
  },
  date1: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 18,
    color: theme.colors.textForeground,
  },
  day1: {
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 14,
    color: theme.colors.textForeground,
  },

  dateandday1: {
    width: 54,
    height: 66,
    backgroundColor: '#E8F7FA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 18,
    color: theme.colors.white,
  },
  day: {
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 14,
    color: theme.colors.white,
  },
  dateandday: {
    width: 54,
    height: 66,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigDateView: {
    width: '100%',
    paddingHorizontal: theme.spacing.appPadding,
  },
  todaytext: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
    color: theme.colors.textForeground,
  },
  todaytextView: {
    backgroundColor: theme.colors.white,
    height: 32,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datetext: {
    fontFamily: fonts.CatamaranMedium,
    fontSize: 18,
    color: theme.colors.secondary,
  },
  calender: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    width: '50%',
    alignItems: 'center',
  },
  todayDate: {},
  dateView: {
    width: '100%',
    paddingHorizontal: theme.spacing.appPadding,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: theme.colors.secondaryLight,
  },
});

export default MealPlannerListing;
