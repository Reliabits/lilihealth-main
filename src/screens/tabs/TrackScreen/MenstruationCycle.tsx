import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { theme } from 'src/styles/theme'
import { Spacer20, Spacer30 } from 'src/utils/Spacing'
import fonts from 'src/assets/fonts'
import { RadioButton } from 'src/screens/survey/components/RadioButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker'
import Utils from 'src/utils/Utils'
import NavService from 'src/navigation/NavService'
import { ETrackScreen } from 'src/navigation/appRoutes'
import { Calendar, LocaleConfig } from 'react-native-calendars';




const MenstruationCycle = ({ tab, setTab }: { tab?: string; setTab: (newTab?: string) => void }) => {
    const [selectedGoal, setSelectedGoal] = useState('');
    const [dob, setDob] = useState<string>();
    const [selected, setSelected] = useState('');

    // const [menTab, setMenTab] = useState("tab1")

    
    console.log("tab ", tab)
    console.log("setTab", setTab)


    const cycle = [
        'My cycle is regular',
        'My cycle is irregular',
        'I don’t know'
    ]

    const cycle2 = [
        'Painful menstrual cramps',
        'PMS symtoms',
        'Unusual discharge',
        'Heavy menstrual flow',
        'Other'
    ]

    const cycle3 = [
        'Yes',
        'No',
        'No, but i used to',
        'I don’t know',
        
    ]
    const cycle4 = [
        'No, I Sleep well',
        'Difficulty falling asleep',
        'Waking up tired',
        'Waking up during the night',
        'Lack of sleep schedule',
        'Insomnia'
        
    ]

    return (
      
    
        <View style={styles.main}>
            
            {tab == 'tab1' &&
                
                <>
          <Spacer30 />
          <View style={styles.maintextView}>
              <Text style={styles.maintext}>
                  Your Menstrual cylce regular
                  (Varies by no more than 7 days?)
              </Text>
          </View>

          <Spacer30 />

          <View style={styles.radioView}>
              
             
              {cycle.map((data, index) => (
                  <RadioButton key={index} title={data} selected={selectedGoal} onSelect={setSelectedGoal} />
              ))}
              
          </View>

          <View style={styles.nextButtonView}>
              <Pressable onPress={()=> {setTab('tab2')}} style={styles.button}>
                  <Text style={styles.buttontext}>
                      Next
                  </Text>
              </Pressable>
                </View>
            </>
            
            }

            {tab == 'tab2' &&

                <>
                    <Spacer30 />
                    <View style={styles.maintextView}>
                        <Text style={styles.maintext}>
                        Do you experience discomfort due to any of the following?
                        </Text>
                    </View>

                <Spacer30 />
                
                <ScrollView>

                    <View style={styles.radioView}>


                        {cycle2.map((data, index) => (
                            <RadioButton key={index} title={data} selected={selectedGoal} onSelect={setSelectedGoal} />
                        ))}

                    </View>
                </ScrollView>

                    <View style={styles.nextButtonView}>
                        <Pressable onPress={()=> {setTab('tab3')}} style={styles.button}>
                            <Text style={styles.buttontext}>
                                Next
                            </Text>
                        </Pressable>
                    </View>
                </>

            }


            {tab == 'tab3' &&

                <>
                    <Spacer30 />
                    <View style={styles.maintextView}>
                        <Text style={styles.maintext}>
                        Do you have any reproductive health disorders (endometriosis, PCOS, etc.?)
                        </Text>
                    </View>

                <Spacer30 />
                
                <ScrollView>

                    <View style={styles.radioView}>


                        {cycle3.map((data, index) => (
                            <RadioButton key={index} title={data} selected={selectedGoal} onSelect={setSelectedGoal} />
                        ))}

                    </View>
                </ScrollView>

                    <View style={styles.nextButtonView}>
                        <Pressable onPress={()=> {setTab('tab4')}} style={styles.button}>
                            <Text style={styles.buttontext}>
                                Next
                            </Text>
                        </Pressable>
                    </View>
                </>

            }


            {tab == 'tab4' &&

                <>
                    <Spacer30 />
                    <View style={styles.maintextView}>
                        <Text style={styles.maintext}>
                        Is there anything you want to improve about your sleep?
                        </Text>
                    </View>

                    <Spacer30 />

                    <ScrollView>
                <View style={styles.radioView}>
                    


                        {cycle4.map((data, index) => (
                            <RadioButton key={index} title={data} selected={selectedGoal} onSelect={setSelectedGoal} />
                        ))}


                    </View>
                    </ScrollView>

                    <View style={styles.nextButtonView}>
                        <Pressable onPress={()=> {setTab('tab5')}} style={styles.button}>
                            <Text style={styles.buttontext}>
                                Next
                            </Text>
                        </Pressable>
                    </View>
                </>

            }


            {tab == 'tab5' &&

                <>
                    <Spacer30 />
                    <View style={styles.maintextView}>
                    <Text style={styles.maintext}>
                        When did your last period start?
                        </Text>
                    </View>

                <Spacer30 />
                
              
                <Calendar
                    onDayPress={(day: { dateString: React.SetStateAction<string> }) => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />

                    <View style={styles.nextButtonView}>
                        <Pressable onPress={() => {NavService.navigate(ETrackScreen.LOADING)} } style={styles.button}>
                            <Text style={styles.buttontext}>
                                Next
                            </Text>
                        </Pressable>
                    </View>
                </>

            }
   
    </View>
  )
}

const styles = StyleSheet.create({
    buttontext: {
        fontFamily:fonts.CatamaranMedium, fontSize:16, color:theme.colors.white

    },
    button: {
        width:'100%', justifyContent:"center", alignItems:'center', backgroundColor:theme.colors.primary, height:54, borderRadius:4

    },
    nextButtonView: {
       bottom:20,
        width: "100%", paddingHorizontal: theme.spacing.appPadding, position: 'absolute', 
        

    },
    radioView: {
        paddingHorizontal: theme.spacing.appPadding,
        paddingBottom:100
        
    },
    maintext: {
        fontFamily:fonts.CormorantGaramondBold, fontSize:30, color:theme.colors.secondary
    },
    main: {
        flex:1
    },
    maintextView: {
        width:'100%', paddingHorizontal:theme.spacing.appPadding

    },
})

export default MenstruationCycle