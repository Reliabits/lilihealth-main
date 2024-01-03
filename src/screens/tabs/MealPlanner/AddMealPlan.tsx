import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { theme } from 'src/styles/theme';
import { Image } from 'src/components/Image';
import Assets from 'src/utils/Assets';
import { Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing';
import fonts from 'src/assets/fonts';
import { CheckBox } from 'src/components/CheckBox';
import { RadioButton, RadioButtongreen } from 'src/screens/survey/components/RadioButton';
import { InputField } from 'src/components/InputField';
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker';
import Utils from 'src/utils/Utils';
import { Row } from 'src/components/Row';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavService from 'src/navigation/NavService';

const AddMealPlan = () => {
    const [dob, setDob] = useState<string>();


    const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedGoals, setSelectedGoals] = useState('');
  
  const [Foods, setFoods] = useState('');
    const golas = [
        { title: 'Today',  },
        { title: 'Custom Date Range',  },
        
       
    ];
    const meals = [
        { title: 'Breakfast', },
        { title: 'Lunch', },
        { title: 'Snacks', },
        { title: 'Dinner', },


    ];
  
  const food = [
    { title: 'Egg'},
    { title: 'Coffee'},
    { title: 'Berries'},
    {
      title: 'Nuts & Butters',
      //  assets: Assets.images.add
      
    },
    { title: 'Flaxseed'},
    { title: 'Greel yogurt'},
    { title: 'Tea'},
    { title: 'Cootage Cheese'},
  ]

 
  return (
    <View style={styles.main}>
      <View style={styles.backiconView}>
        <Spacer40 />
        <Pressable onPress={()=> NavService.goBack()}>
          <Image source={Assets.images.back} height={28} width={28} />
        </Pressable>
        
      </View>
      <ScrollView style={{marginBottom:120}}>
        <View style={styles.padding}>
      <View style={styles.mainTextView}>
        <Text style={styles.mainText}>Add New Meal Plan</Text>
      </View>
      <Spacer20 />
      <View style={styles.selectDateView}>
              <Text style={styles.selectText}>Select Date</Text>
              
              {golas.map((data, index) => (
                  <RadioButtongreen
                      key={index}
                      title={data.title}
                    
                      selected={selectedGoal}
                      onSelect={setSelectedGoal}
                  />
              ))}
              </View>

              <Spacer30 />
              
              <View style={styles.inputView}>
                  <View style={styles.input}>
                      <Text  style={styles.date}>
                          Mar, 2023
                          
                      </Text>
                      
                      <DatePickerPrimary
                          
                          label=""
                          value={dob ? Utils.parseDate(dob) : new Date()}
                          onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
                      />
                      
                  </View>
              </View>
              
              <Spacer30 />

              <View style={styles.mealcategoryView}>
                  <Text style={styles.categoryText}>
                      Select Meal Category
                  </Text>

                  {meals.map((data, index) => (
                      <RadioButtongreen
                          key={index}
                          title={data.title}

                          selected={selectedGoals}
                          onSelect={setSelectedGoals}
                      />
                  ))}

                  <Spacer20 />

                  <View style={styles.divider}>
                      
                  </View>
                  
              </View>

              <Spacer30 />

        <View style={styles.selectFoodItemView}>
          
          
          <CheckBox
            textVariant="bodyBold20"
            title={"Selected Food"}

          />

          <Image height={32} width={32} source={Assets.images.dropdown_active} />
                  
     
          
        </View>
        <Spacer20 />
        
        <View style={styles.selectedItemInner}>
          {food.map((data, index) => 
            <CheckBox
              key={index}
              title={data.title}
              // value={data.Foods}
              
              onValueChange={() => setFoods}
              

          />
          )}

        </View>

       
        </View>

        <Spacer30 />
        <View style={styles.Recipes}>

          <CheckBox
            textVariant="bodyBold20"
            title={"Selected Food"}

          />

          <Image source={Assets.images.dropdown} height={32} width={32} /> 

        </View >

       
              
      </ScrollView>

      <View style={styles.savemealbutton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>
            Save Meal Plans
          </Text>
        </TouchableOpacity>

      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  buttontext: {
    fontFamily: fonts.CatamaranMedium, fontSize: 16,
    color:theme.colors.white
  },
  button: {
    width: "100%", height: 54, justifyContent: 'center', alignItems: 'center',
    backgroundColor: theme.colors.primary,
      borderRadius:4,  

  },
  savemealbutton: {
    position: 'absolute', bottom: 20,
    // marginBottom:20,
    width: "100%", 
    height:94,
    backgroundColor:theme.colors.white,
    //  alignItems: "center",
    justifyContent:"center",
    paddingHorizontal: theme.spacing.appPadding,

  },
  Recipes: {
    width: '100%', 
    backgroundColor: theme.colors.white,
    height: 68,
    paddingHorizontal: theme.spacing.appPadding,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:'center'
    
    
  },

  selectedItemInner: {
    width: '100%', 
    paddingHorizontal:theme.spacing.appPadding

  },
    selectFoodItemView: {

    flexDirection: "row", 
    justifyContent: 'space-between',
      width:'100%'
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.textForeground
    },
    date: {
        fontFamily: fonts.CatamaranSemiBold,
        fontSize: 18,
        color:theme.colors.textForeground
    },
    categoryText: {
        fontFamily: fonts.CatamaranRegular,
        fontSize: 16,
        color:theme.colors.primary

    },
    mealcategoryView: {
        width: "100%", 
        gap: 12,
    
        


    },
    input: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor:theme.colors.textForeground
    },
    inputView: {
        width: "100%",
        flexDirection:'row',
    },
  selectText: {
    fontFamily: fonts.CatamaranRegular,
    fontSize: 16,
    color: theme.colors.primary,
  },
  selectDateView: {
    width: '100%',
    // paddingHorizontal: theme.spacing.appPadding,
    gap: 12,
  },
  mainText: {
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 22,
    color: theme.colors.secondary,
    },
    padding: {
      paddingHorizontal: theme.spacing.appPadding,
      // marginBottom:100

  },

  mainTextView: {
    width: '100%',
    marginTop: 13,
  },
  backiconView: {
    height: 95,
    width: '100%',
    paddingHorizontal: theme.spacing.appPadding,
  },
  main: {
    flex: 1,
    backgroundColor: theme.colors.secondaryLight,
  },
});

export default AddMealPlan;
