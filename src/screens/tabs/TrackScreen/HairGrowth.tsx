import { View, Text, StyleSheet, ScrollView, ImageBackground, PanResponder, Dimensions, TouchableOpacity, Pressable, Modal, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { theme } from 'src/styles/theme'
import SymptomsTrackingHeader from '../components/SymptomsTrackingHeader'
import fonts from 'src/assets/fonts'
import { Spacer10, Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing'
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker'
import Assets from 'src/utils/Assets'
import { Image } from 'src/components/Image'
import Utils from 'src/utils/Utils'
import Slider from '@react-native-community/slider';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import NavService from 'src/navigation/NavService'
import MenstruationCycle from './MenstruationCycle'
import LabResult from './LabResult'


const screenWidth = Dimensions.get("window").width;

const grapghWidth = screenWidth * 0.9;





const data = {
  labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
  datasets: [
    {
      data: [10, 20, 30, 40, 60, 100]
    }
  ],
  xlabledata: [10, 20, 30, 40, 100]
};


const HairGrowth = () => {

  const [menTab, setMenTab] = useState<string>("tab1")

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };
  const items = [
    { id: 1, label: 'Hair Growth & more' },
    { id: 2, label: 'Weight' },
    // { id: 3, label: 'Lab Result' },
    { id: 4, label: 'Menstruation Cycle' },
  ];

  const [selectedText, setSelectedText] = useState(null);

  const handleTextClick = (item: any) => {
    setSelectedText(item)

  }
  const problems = [
    { id: 1, label: 'Hair Growth' },
    { id: 2, label: 'Hair Loss' },
    { id: 3, label: 'Acne' },
    { id: 4, label: 'Mood' },
    { id: 5, label: 'Mental Health' },
  ];

  const [tab, setTab] = useState("Acne")
  const [startTab, setStartTab] = useState("Hair Growth & more")
  const [historyTab, setHistoryTab] = useState("weightTracker")
  const [kg, setKg] = useState(77)
  console.log("startTab", startTab)

  console.log('tab', tab)


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const { dx } = gestureState;
      const width = 300; // Width of the slider image
      const max = 100; // Maximum value
      const newValue = Math.round((dx / width) * max);
      if (newValue >= 0 && newValue <= max) {
        setValue(newValue);
      }
    },
  });

  const [value, setValue] = useState(0);
  console.log("value ", value)

  const handleSliderChange = (sliderValue: any) => {
    setValue(sliderValue);
  };
  const [dob, setDob] = useState<string>();

  const acnedata = [
    { title: 'Very Low', image: Assets.images.very_low },
    { title: 'Low', image: Assets.images.low },
    { title: 'Middle', image: Assets.images.middle },
    { title: 'High', image: Assets.images.high },
    { title: 'Very High', image: Assets.images.very_high },
  ]

  const moodData = [

    { title: 'Very Low', image: Assets.images.face_very_low },
    { title: 'Low', image: Assets.images.face_low },
    { title: 'Middle', image: Assets.images.face_middle },
    { title: 'High', image: Assets.images.face_high },
    { title: 'Very High', image: Assets.images.face_very_high },

  ]

  const weightHistory = [
    { date: 'March 10, 2023', weight: '77 kg' },
    { date: 'March 8, 2023', weight: '78 kg' },
    { date: 'March 5, 2023', weight: '80 kg' },
    { date: 'March 4, 2023', weight: '80 kg' },
    { date: 'March 3, 2023', weight: '80 kg' },
    { date: 'March 2, 2023', weight: '83 kg' },
    { date: 'March 1, 2023', weight: '83 kg' },
    { date: 'january 24, 2023', weight: '83 kg' },
    { date: 'january 20, 2023', weight: '84 kg' },
    { date: 'january 10, 2023', weight: '84 kg' },

  ]

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(98, 186, 195, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    style: {
      borderRadius: 16
    },



    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.main}>
      {/* <SymptomsTrackingHeader /> */}


      <View style={styles.header}>
        <Spacer10 />
        <Spacer40 />

        {startTab == "Hair Growth & more" &&
          <Text style={styles.topText}>Symptoms Tracking</Text>
        }

        {
          startTab == "Weight" &&
          <Text style={styles.topText}>Symptoms Tracking</Text>
        }



        {startTab == 'Menstruation Cycle' &&

          <>
            {menTab === "tab1" ? (
              <View style={{ width: '100%', flexDirection: 'row', gap: 12 }}>


                <Text style={styles.topText}>Menstruation Cycles</Text>
              </View>

            ) : (<View style={{ width: '100%', flexDirection: 'row', gap: 12 }}>

              <Pressable>
                <Image height={28} width={28} source={Assets.images.back} />
              </Pressable>


              <Text style={styles.topText}>Menstruation Cycles</Text>
            </View>)}

          </>
        }

        <View style={styles.horizontalView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.innerView}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.itemView,
                    selectedItem === item.id ? styles.selectedItem : styles.unselectedItem,
                  ]}
                  onPress={() => { handleItemClick(item.id); setStartTab(item.label) }}
                >
                  <Text
                    style={[
                      styles.itemtext,
                      selectedItem === item.id ? styles.selectedText : styles.unselectedText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <Spacer20 />


      </View>
      {/* <Spacer10 /> */}

      {startTab == "Menstruation Cycle" &&
        <MenstruationCycle tab={menTab} setTab={setMenTab} />
      }

      {startTab == "Weight" &&
        <>
          {historyTab == "history" &&
            <View style={styles.historymain}>
              <Spacer20 />

              <View style={styles.historyView}>
                <Text style={styles.historytext}>
                  Weight History
                </Text>

                <Text onPress={() => { setHistoryTab("weightTracker") }} style={styles.backtext}>
                  Back
                </Text>

              </View>


              {/* 
            
            </View> */}
              <Spacer20 />

              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 320 }}>


                  {weightHistory.map((item) =>

                    <>
                      <View style={styles.flatlist}>

                        <Text style={styles.historydate}>
                          {item.date}

                        </Text>
                        <Text style={styles.kg}>
                          {item.weight}
                        </Text>
                      </View>

                      <View style={{ borderBottomWidth: 0.3, }}>

                      </View>
                    </>
                  )}
                </View>


                <View style={styles.downloadButtonView}>
                  <TouchableOpacity style={styles.downlaodButton}>
                    <Text style={styles.downloadButtonText}>
                      Download Report
                    </Text>
                  </TouchableOpacity>

                </View>
              </ScrollView>






            </View>
          }

          {historyTab == "weightTracker" &&
            <ScrollView>


              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Add Weight</Text>
                    <View style={styles.inputview}>
                      <TextInput onChangeText={(val: any) => { setKg(val) }} placeholder='77' placeholderTextColor={theme.colors.secondary} style={styles.input} />

                      <Text style={styles.inputsidetext}>
                        kg

                      </Text>
                    </View>
                    <View style={styles.divider}>
                    </View>

                    <Spacer40 />
                    <View style={styles.savecancelView}>

                      <Text onPress={() => setModalVisible(!modalVisible)} style={styles.cancel}>
                        CANCEL
                      </Text>

                      <Text onPress={() => setModalVisible(!modalVisible)} style={styles.save}>
                        SAVE
                      </Text>

                    </View>
                  </View>
                </View>
              </Modal>
              <View style={styles.Weightmain}>
                <Text style={styles.weightHeading}>
                  Weight Tracker
                </Text>

                <View style={styles.righttop}>
                  <Text onPress={() => { setHistoryTab("history") }} style={styles.history}>
                    History
                  </Text>
                  <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addView}>
                    <Image height={14} width={14} source={Assets.images.add_small_simple} />

                  </TouchableOpacity>
                </View>


              </View>

              <View style={styles.kiloGramView}>

                <Spacer40 />

                <Spacer10 />
                <Text style={styles.kilo}>
                  {kg}
                </Text>

                <View style={styles.kilogramtextView}>
                  <Text style={styles.kilogramtext}>
                    Kilo Grams
                  </Text>
                  <Text style={styles.current}>
                    Your Current Weight
                  </Text>

                </View>

              </View>
              <Spacer30 />

              <View style={styles.graphView}>

                <View style={styles.graphinnerView}>

                  <View style={styles.firstView}>

                    <View style={styles.view1}>


                      <Text style={styles.view1Text}>
                        Body Weight Stats
                      </Text>


                      <Text style={styles.dateView1}>
                        Jan 2023 - Jun 2023
                      </Text>

                    </View>

                    <View style={styles.view2}>

                      <Text style={styles.monthsText}>
                        6 months
                      </Text>
                      <Image height={6} width={10} source={Assets.images.down} />

                    </View>

                  </View>

                  <Spacer10 />

                  <View style={styles.secondView}>
                    <Text style={styles.percentText}>
                      10%
                    </Text>

                    <Text style={styles.smalltext}>
                      Weight Loss
                    </Text>
                  </View>


                  <Spacer20 />
                  <View style={styles.graph}>

                    <BarChart
                      style={styles.graphStyle}
                      data={data}
                      width={grapghWidth}
                      height={220}
                      yAxisLabel={'$'}
                      chartConfig={chartConfig}

                      verticalLabelRotation={30}
                    />

                  </View>

                  <Spacer20 />

                  <View style={styles.divider}>

                  </View>
                  <Spacer10 />
                  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 8 }}>
                    <Image height={14} width={14} source={Assets.images.rectangle} />
                    <Text style={{ fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.secondary }}>
                      Weight
                    </Text>
                  </View>
                </View>

              </View>



            </ScrollView>
          }




        </>
      }

      {
        startTab == 'Lab Result' &&
        <>
          <LabResult />
        </>
      }


      {startTab == 'Hair Growth & more' &&

        <View>

          <View style={styles.secondScrollView}>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.innerSecond}>
                {problems.map((item) => (
                  <Text key={item.id}
                    onPress={() => { handleTextClick(item); setTab(item.label) }}
                    style={[
                      styles.innertext,
                      selectedText && selectedText.id === item.id && styles.selectedInnerText,
                    ]}
                  >{item.label}</Text>

                ))}
              </View>
            </ScrollView>
          </View>





          <ScrollView>
            <View style={{ marginBottom: 200 }}>
              <View style={styles.dateView}>
                <View style={styles.todayDate}>
                  <Text style={styles.datetext}>Mar, 2023</Text>
                </View>

                <View style={styles.calender}>

                  <DatePickerPrimary
                    label=""
                    value={dob ? Utils.parseDate(dob) : new Date()}
                    onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
                  />
                  <View style={styles.todaytextView}>
                    <Text style={styles.todaytext}>Today</Text>
                  </View>

                  {/* <View style={styles.addicon}>
            <Image source={Assets.images.add_small_simple} height={9} width={9} />
          </View> */}
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
              <Spacer30 />

              <View style={styles.hairView}>
                <Text style={styles.hairtext}>
                  How Would You Rate Your Acne Today?
                </Text>
                <Spacer20 />

                <View style={styles.acneView}>

                  {tab == "Acne" &&
                    (

                      acnedata.map((item) =>


                        <View style={styles.acnedata}>
                          <Image height={63.88} width={50.9} source={item.image} />

                          <Text style={{ fontFamily: fonts.CatamaranBold, fontSize: 12, color: theme.colors.primaryDark }}>
                            {item.title}
                          </Text>
                        </View>
                      )


                    )
                  }

                  {tab == "Mood" &&
                    (

                      moodData.map((item) =>


                        <View style={styles.acnedata}>
                          <Image height={63.88} width={50.9} source={item.image} />

                          <Text style={{ fontFamily: fonts.CatamaranBold, fontSize: 12, color: theme.colors.primaryDark }}>
                            {item.title}
                          </Text>
                        </View>
                      )


                    )
                  }

                </View>

                <Spacer10 />

                <ImageBackground source={Assets.images.slider} style={{ width: '100%', height: 38 }}  {...panResponder.panHandlers} >

                  {/* <Image source={Assets.images.pointer} style={styles.pointer} height={39.6} width={39.6} /> */}

                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    value={value}

                    onValueChange={handleSliderChange}
                    minimumTrackTintColor="transparent"
                    thumbImage={Assets.images.pointer}
                    maximumTrackTintColor="transparent"
                  />

                  {/* <Text style={[styles.pointerValue, { left: `${(value / 10) * 100}%` }]}>{value}</Text> */}

                </ImageBackground>

              </View>

              <Spacer30 />

              <View style={styles.graphView}>

                <View style={styles.graphinnerView}>

                  <View style={styles.firstView}>

                    <View style={styles.view1}>
                      {tab == 'Acne' &&
                        <Text style={styles.view1Text}>
                          Acne Stats
                        </Text>
                      }

                      {tab == 'Mood' &&
                        <Text style={styles.view1Text}>
                          Mood Stats
                        </Text>
                      }

                      <Text style={styles.dateView1}>
                        Jan 2023 - Jun 2023
                      </Text>

                    </View>

                    <View style={styles.view2}>

                      <Text style={styles.monthsText}>
                        6 months
                      </Text>
                      <Image height={6} width={10} source={Assets.images.down} />

                    </View>

                  </View>

                  <Spacer10 />

                  <View style={styles.secondView}>
                    <Text style={styles.percentText}>
                      40%
                    </Text>

                    <Text style={styles.smalltext}>
                      Improvement
                    </Text>
                  </View>


                  <Spacer20 />
                  <View style={styles.graph}>

                    <BarChart
                      style={styles.graphStyle}
                      data={data}
                      width={grapghWidth}
                      height={220}
                      yAxisLabel={'$'}
                      chartConfig={chartConfig}

                      verticalLabelRotation={30}
                    />

                  </View>
                  <Spacer20 />
                  <View style={styles.divider}>

                  </View>
                  <Spacer10 />
                  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 8 }}>
                    <Image height={14} width={14} source={Assets.images.rectangle} />

                    {tab == 'Acne' &&

                      <Text style={{ fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.secondary }}>
                        Acne Improvement
                      </Text>
                    }

                    {tab == 'Mood' &&

                      <Text style={{ fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.secondary }}>
                        Mood
                      </Text>
                    }
                  </View>
                </View>

              </View>

            </View>

          </ScrollView>

        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  save: { fontFamily: fonts.CatamaranBold, fontSize: 14, color: theme.colors.primary },
  cancel: { fontFamily: fonts.CatamaranBold, fontSize: 14, color: theme.colors.textForeground },
  savecancelView: { flexDirection: "row", alignItems: 'center', gap: 30.08 },
  divider: { borderBottomWidth: 1, borderBottomColor: theme.colors.secondaryDark, width: "100%", bottom: 15 },
  inputsidetext: { fontFamily: fonts.CatamaranMedium, color: theme.colors.textForeground, fontSize: 14 },

  input: { fontFamily: fonts.CatamaranSemiBold, fontSize: 40, color: theme.colors.secondary, },
  inputview: { marginTop: 54, flexDirection: "row", alignItems: 'center', },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: theme.spacing.appPadding,

  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.secondaryLight,
    // borderRadius: 20,
    width: "100%", justifyContent: "center", alignItems: 'center',

    paddingHorizontal: theme.spacing.appPadding,
    paddingVertical: 45,


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: fonts.CatamaranSemiBold, fontSize: 20, color: theme.colors.secondary
  },
  downloadButtonText: { fontFamily: fonts.CatamaranMedium, color: theme.colors.white, fontSize: 16 },

  downlaodButton: { width: '100%', backgroundColor: theme.colors.primary, height: 54, borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
  downloadButtonView: {
    width: "100%",
    position: 'absolute', bottom: 200,
  },

  kg: {
    fontFamily: fonts.CatamaranSemiBold, fontSize: 17, color: theme.colors.primary

  },
  historydate: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 15, color: theme.colors.textForeground
  },
  flatlist: {
    paddingVertical: 16,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"

  },
  historymain: { width: "100%", paddingHorizontal: theme.spacing.appPadding },

  historyView: { width: '100%', justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
  historytext: { fontFamily: fonts.CormorantGaramondBold, fontSize: 20, color: theme.colors.secondary },
  backtext: { fontFamily: fonts.CatamaranBold, fontSize: 15, color: theme.colors.primary },
  kilo: { fontFamily: fonts.CatamaranMedium, fontSize: 78, color: theme.colors.secondary },
  kilogramtext: { fontFamily: fonts.CatamaranBold, fontSize: 14, color: theme.colors.primary },
  current: { fontFamily: fonts.CatamaranMedium, fontSize: 14, color: theme.colors.textForeground },
  kilogramtextView: {
    width: "100%", justifyContent: "center", alignItems: "center", bottom: 20

  },
  kiloGramView: {
    width: '100%', justifyContent: "center", alignItems: "center",
    gap: 20

  },
  righttop: { gap: 20, flexDirection: 'row', alignItems: 'center', },
  addView: { width: 32, height: 32, backgroundColor: theme.colors.white, borderRadius: 4, justifyContent: "center", alignItems: "center" },
  history: { fontFamily: fonts.CatamaranBold, fontSize: 15, color: theme.colors.primary },
  weightHeading: { fontFamily: fonts.CormorantGaramondBold, fontSize: 20, color: theme.colors.secondary },
  Weightmain: {

    width: "100%", flexDirection: 'row', alignItems: "center",
    marginTop: 23, paddingHorizontal: theme.spacing.appPadding,
    justifyContent: "space-between"

  },

  selectedInnerText: {
    fontSize: 15,
    color: theme.colors.primary,
    fontFamily: fonts.CatamaranMedium,
  },

  innertext: {
    fontSize: 15,
    color: theme.colors.textForeground,
    fontFamily: fonts.CatamaranMedium,
  },
  innerSecond: {
    width: '100%',
    gap: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondScrollView: {
    width: '100%',
    height: 63,
    //   paddingVertical: 10,
    alignItems: "center",

    backgroundColor: theme.colors.secondaryLight,
    flexDirection: 'row',


    paddingHorizontal: theme.spacing.appPadding,
  },
  selectedText: {
    color: theme.colors.white,
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
  },
  unselectedText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
    color: theme.colors.textForeground,
  },

  selectedItem: {
    backgroundColor: theme.colors.primary,
  },
  unselectedItem: {
    backgroundColor: 'white',
  },
  itemtext: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
    color: theme.colors.white,
  },
  itemView: {
    paddingHorizontal: 17,
    paddingVertical: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 64,
  },
  innerView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  horizontalView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 17,
  },
  topText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 18,
    color: theme.colors.secondary,
  },
  header: {
    height: 138,
    paddingHorizontal: theme.spacing.appPadding,
    backgroundColor: theme.colors.white,
    elevation: 5,

  },
  graphStyle: {
    width: '80%', justifyContent: "center"

  },
  graph: {
    width: '100%', justifyContent: "center"
  },
  smalltext: {
    fontFamily: fonts.CatamaranMedium, fontSize: 14, color: theme.colors.textForeground
  },
  percentText: {
    fontFamily: fonts.CatamaranSemiBold, fontSize: 23, color: theme.colors.primary,

  },

  secondView: {

    flexDirection: "row", width: '100%', gap: 6, alignItems: 'center'

  },
  monthsText: {
    fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.white
  },
  view2: {
    paddingVertical: 4, paddingHorizontal: 14, borderRadius: 27, backgroundColor: theme.colors.primary, flexDirection: 'row', alignItems: 'center', gap: 8


  },
  dateView1: {
    fontFamily: fonts.CatamaranMedium, fontSize: 14, color: theme.colors.textForeground
  },
  view1Text: {
    fontFamily: fonts.CormorantGaramondSemiBold, fontSize: 20, color: theme.colors.secondary

  },

  view1: {


  },
  firstView: {

    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between'


  },
  graphinnerView: {

    width: '100%', backgroundColor: theme.colors.white,
    paddingHorizontal: 18,
    paddingVertical: 25,
    borderRadius: 10


  },
  graphView: {

    width: '100%', paddingHorizontal: theme.spacing.appPadding

  },

  value: {
    fontSize: 24,
    marginBottom: 20,
  },
  sliderContainer: {
    width: '80%',
    height: 40,
    overflow: 'hidden',
  },
  sliderBackground: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    height: 40,

  },
  pointer: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{ translateX: -15 }, { translateY: 5 }], // Adjust the position of the pointer on the image
  },
  pointerValue: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: fonts.CatamaranBold, position: 'absolute', top: 9, left: 20
  },
  acnedata: {
    gap: 10, alignItems: 'center'

  },
  acneView: {
    width: "100%", flexDirection: "row",
    // gap:20
    justifyContent: 'space-between', alignItems: "center"
  },
  hairtext: {
    fontFamily: fonts.CormorantGaramondBold,
    fontSize: 20,
    color: theme.colors.secondary

  },
  hairView: {
    width: "100%",
    paddingHorizontal: theme.spacing.appPadding

  },
  addicon: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
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
  afterscroll: { gap: 12, justifyContent: 'center', flexDirection: 'row', width: '100%' },
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

  main: {
    flex: 1,
    backgroundColor: theme.colors.secondaryLight

  }
})

export default HairGrowth