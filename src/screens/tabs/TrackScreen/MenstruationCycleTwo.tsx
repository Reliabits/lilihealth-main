import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { theme } from 'src/styles/theme'
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker'
import Utils from 'src/utils/Utils'
import { Image } from 'src/components/Image'
import fonts from 'src/assets/fonts'
import Assets from 'src/utils/Assets'
import { Spacer10, Spacer15, Spacer20, Spacer30, Spacer40 } from 'src/utils/Spacing'
import { MainButton } from 'src/components/buttons/MainButton'
import NavService from 'src/navigation/NavService'
import { ETrackScreen } from 'src/navigation/appRoutes'

const MenstruationCycleTwo = () => {

  const [dob, setDob] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.main}>

      <ScrollView>
      <Spacer40 />
      <Spacer10 />
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

      <Spacer40 />
      
      <View style={styles.dropView}>

        <Image style={styles.drop} source={Assets.images.drop} height={335} />
        
        <View style={styles.outerView}>
          <Text style={styles.dropText}>
            Period
          </Text>

          <View style={styles.innerView}>
          <Text style={styles.dropDay1}>
            Days
          </Text>
          <Text style={styles.dropDay}>
            2
            </Text>
          </View>
          
        </View>

        <Image style={{position:'absolute', bottom:15}} height={80} width={80} source={Assets.images.drop_edit} />
        
          
         
      </View>

      

      <View style={styles.cycleLength}>
        <Text style={styles.cycleLenthText}>
          Previous Cycle Length
        </Text>

        <View style={styles.dateSearchView}>

            <Text style={styles.searchText}>
              Search by date or range
            </Text>

            <Pressable onPress={() => setModalVisible(true)} >

            <Image height={25} width={24} source={Assets.images.calender} />
            </Pressable>
        </View>

        </View>

        <Spacer20 />
        <View style={styles.padding}>
          <View style={styles.MycycleLength}>
            
            <Text style={styles.cycleHeaderText}>
              My Cycle Length
            </Text>

            <View style={styles.startendView}>

              <Text style={styles.startendText}>
                Start & End Date:  <Text style={styles.startendText2}> 22 apr - 12 may</Text> 
              </Text>

            </View>

            <Spacer15 />

            <View style={styles.maximum}>
              <Text style={styles.maximumText}>
                Maximum Cycle Range
              </Text>
              
              <Text style={styles.days}>
                17 Days
              </Text>
            </View>

            <Spacer15 />

            <View style={styles.divider}>
            </View>
            <Spacer15 />


            <View style={styles.maximum}>
              <Text style={styles.maximumText}>
                Minimum Cycle Range
              </Text>

              <Text style={styles.days}>
                5 Days
              </Text>
            </View>

            <Spacer30 />

            {/* <View style={styles.download}> */}

              <Pressable onPress={()=> {}} style={styles.downlaodbutton}>
                <Text style={styles.downloadtext}>
                  Download Report
                </Text>
              </Pressable>

            {/* </View> */}


          </View>
        </View>

        

     
      </ScrollView>

      <View>
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
              <Text style={styles.ModalHeaderText}>
                Search by date range  
              </Text>

              <Spacer30 />

              <Text style={styles.fromTo}>
                From
              </Text>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', borderBottomColor:theme.colors.textForeground, borderBottomWidth:1 }}>
                
                <Text style={styles.dob}>
                 {dob}
                </Text>



              <DatePicker
                label=""
                value={dob ? Utils.parseDate(dob) : new Date()}
                onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
                />
                
              </View>

                <Spacer15 />
              <Text style={styles.fromTo}>
                To
              </Text>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: theme.colors.textForeground, borderBottomWidth: 1 }}>

                <Text style={styles.dob}>
                  {dob}
                </Text>



                <DatePicker
                  label=""
                  value={dob ? Utils.parseDate(dob) : new Date()}
                  onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
                />

              </View>

              <Spacer30 />

              <MainButton title='Search'  onPress={()=> setModalVisible(!modalVisible)} />

              
            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  downloadtext: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:16, color:theme.colors.white
  },
  downlaodbutton: {
    width:157, height:40, justifyContent:'center', alignItems:'center', backgroundColor:theme.colors.primary, borderRadius:4, 
  },
  // download: {
  //   width:'100%', 
  // }, 
  divider: {
    borderWidth:0.3, borderColor:theme.colors.textForeground

  },
  days: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:18, color:theme.colors.secondary

  },
  maximumText: {
    fontFamily:fonts.CatamaranMedium, fontSize:15, color:theme.colors.textForeground

  },
  maximum: {
    width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  startendText2: {
    fontFamily: fonts.CatamaranMedium, fontSize: 15, color: theme.colors.secondary

  },
  startendText: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:15, color:theme.colors.primary

  },
  startendView: {
    marginTop:12

  },
  cycleHeaderText: {
    fontFamily:fonts.CormorantGaramondBold, fontSize:20, color:theme.colors.secondary

  },
  dob: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:18, color:theme.colors.textForeground

  },
  MycycleLength: {
paddingVertical:22, paddingHorizontal:theme.spacing.appPadding, borderRadius:10,  backgroundColor:theme.colors.white, width:'100%'
  },
  fromTo: {
fontFamily:fonts.CatamaranRegular, fontSize:16, color:theme.colors.primary
  },
  ModalHeaderText: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:20, color:theme.colors.secondary

  },
  centeredView: {
    flex: 1, width:'100%',
    justifyContent:'flex-end'
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    paddingHorizontal:40, paddingVertical:40,
    backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
 
 
  searchText: {
  fontFamily:fonts.CatamaranRegular, fontSize:16, color: theme.colors.textForeground, 
  },
  dateSearchView: {
    marginTop: 16,
    paddingVertical:13, paddingHorizontal:22,backgroundColor:theme.colors.white, justifyContent:'space-between', flexDirection:'row', borderRadius:4

  },
  cycleLenthText: {
  fontFamily:fonts.CormorantGaramondBold, fontSize:22, color:theme.colors.secondary
},
  cycleLength: {

    width:'100%', paddingHorizontal:theme.spacing.appPadding

  },
  outerView: { width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: -10, top: 70 },
  innerView: { justifyContent: "center", alignItems: 'center', gap: -30 },
  dropDay1: {
    fontFamily: fonts.CatamaranSemiBold, fontSize: 56, color: theme.colors.white

  },
  dropDay: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:68, color:theme.colors.white

  },
  drop: {
    width : 300,
    // height: 300,
    justifyContent: "center", alignItems: 'center'

  },
  dropText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 20, color: theme.colors.white
  },
  dropView: {
    paddingHorizontal:theme.spacing.appPadding,

    justifyContent: 'center', alignItems:'center', width:'100%',
    // marginTop:30,
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
    backgroundColor:theme.colors.secondaryLight
    
  }


})

export default MenstruationCycleTwo