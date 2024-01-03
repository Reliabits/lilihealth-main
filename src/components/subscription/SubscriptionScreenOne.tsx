import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { Image } from '../Image'
import Assets from 'src/utils/Assets'
import { theme } from 'src/styles/theme'
import fonts from 'src/assets/fonts'
import { Spacer15, Spacer20 } from 'src/utils/Spacing'
import { MainButton } from '../buttons/MainButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavService from 'src/navigation/NavService'
import { ESUBSCRIPTION, ETrackScreen } from 'src/navigation/appRoutes'

const SubscriptionScreenOne = () => {



    const tire1 = [
        { title: 'Everything in Tier 1' },
        { title: 'Spoonacular Recipes' },
        { title: 'Meal Planner' },
        { title: 'Shopping List' },
        { title: 'All Tracking Features' },
    ]

    const tire2 = [
        {title: 'Education (everything in learn)'},
        {title: 'Lilli Health Approved Food List (admin library)'},
        {title: 'Lilli Health Recipes (from admin library)'},
        {title: 'Limited Tracking'},
    ]

    const [tab, setTab] = useState("tab1")
  return (
      <View style={styles.main}>
          <View style={styles.headerImage}>
              <Image style={{ width: "100%" }} source={Assets.images.subscribe_header} />

              <View style={styles.imageTextView}>
                  <Text style={styles.imagetextHeader}>
                      Get your personalised weekly plan
                  </Text>

                  <View style={styles.headeInner}>
                  <Text style={styles.imagesecondText}>
                      Reach your nutritional goals by eating health, tasty and
                      
                  </Text>
                  <Text style={styles.imagesecondText}>
                      varied with lilli health premium. Try it for free!
                      </Text>
                  </View>
              </View>
          </View>

          <Spacer15 />

          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
              
             

          <View style={styles.plansView}>
              <Text style={styles.plansText}>
                  Free Plan vs. Premium Plan
              </Text>
              
          </View>
          <Spacer20 />
              {tab == 'tab1' &&
                  <>
          <View style={styles.tireouterView}>
          <Pressable onPress={()=> {setTab('tab2')}} style={styles.TireView}>
              
              <Text style={styles.tireText}>
                  Tier 1 Subscription Plan <Text style={{color:theme.colors.primary}}>(Free)</Text> 
              </Text>

              <Image style={{width:7.78, height:14}} source={Assets.images.right} />
              
              </Pressable>
          </View>

          <Spacer20 />
          <View style={styles.tireouterView}>
              <Pressable onPress={()=> {setTab('tab1')}} style={styles.TireView1}>

                  <Text style={styles.tireText1}>
                      Tier 2 Subscription Plan (Paid)
                  </Text>

                  <Image style={{ width: 14, height: 7.78 }} source={Assets.images.down} />

              </Pressable>
          </View>
          <Spacer20 />
          <View style={styles.tire1detailView}>
              {tire1.map((item)=>
          <View style={styles.detailView}>
              <Image source={Assets.images.dot1} />
              <Text style={styles.detailtext}>
                  {item.title}
              </Text>
                  </View>
              )}
                  </View>
              </>
              } 


              {tab == 'tab2' &&
                  <>
                      

                      <Spacer20 />
                      <View style={styles.tireouterView}>
                          <Pressable onPress={() => { setTab('tab1') }} style={styles.TireView1}>

                              <Text style={styles.tireText1}>
                              Tier 1 Subscription Plan (Free)
                              </Text>

                              <Image style={{ width: 14, height: 7.78 }} source={Assets.images.down} />

                          </Pressable>
                      </View>
                      <Spacer20 />
                      <View style={styles.tire1detailView}>
                          {tire1.map((item) =>
                              <View style={styles.detailView}>
                                  <Image source={Assets.images.dot1} />
                                  <Text style={styles.detailtext}>
                                      {item.title}
                                  </Text>
                              </View>
                      )}
                        <View style={{ flexDirection:'row' }}>
                      <View style={styles.tire2detailView}>
                          <Image source={Assets.images.dot} />
                              <Text style={styles.detailtext1}>
                              Daily Yes/No Following Diet, Weight & Insulin
                          </Text>

                          </View>
                      </View>
                      
                      
                  </View>
                  
                  <Spacer20 />

                  <View style={styles.tireouterView}>
                      <Pressable onPress={() => { setTab( 'tab1' )}} style={styles.TireView}>

                          <Text style={styles.tireText}>
                              Tier 2 Subscription Plan <Text style={{ color: theme.colors.primary }}>(Paid)</Text>
                          </Text>

                          <Image style={{ width: 7.78, height: 14 }} source={Assets.images.right} />

                      </Pressable>
                  </View>
                  </>
              } 
            
              
         

          <View style={styles.bottomView}>
              
              <Pressable style={styles.monthsButton} >
                  <Text style={styles.starttext}>
                      3 months
                  </Text>

                  <View style={styles.endView}>
                      <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                      <Text style={styles.usd1}>
                          $105 USD
                          </Text>
                      </View>
                      <Text style={styles.usd2}>
                          $35 USD / month
                      </Text>
                  </View>
              </Pressable>
              
              <MainButton title='Purchase' onPress={()=> {NavService.navigate(ESUBSCRIPTION.ACTIVATEDSCREEN)}} />
              
          </View>

          {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
    usd2: {
        fontFamily:fonts.CatamaranMedium, fontSize:14, color:theme.colors.primary

    },
    usd1: {
fontFamily:fonts.CatamaranBold, fontSize:20, color:theme.colors.white,
    },
    endView: {
        justifyContent:'flex-end'

    },
    starttext: {
        fontFamily:fonts.CatamaranMedium, fontSize:16, color:theme.colors.white

    },
    monthsButton: {
        width:'100%', justifyContent:'space-between', alignItems:'center', height:54, backgroundColor:theme.colors.secondary, borderRadius:4, flexDirection:'row', paddingHorizontal:15

    },
    bottomView: {
        width: '100%', elevation: 5,
        flex: 1, justifyContent: 'flex-end', 
        paddingHorizontal: theme.spacing.appPadding, gap: 10, backgroundColor: theme.colors.white,
        // marginTop:87
        
    },
    tire2detailView: {
        paddingStart: 30, width: '100%', gap: 8, flexDirection:'row', alignItems:'center',
    },
    tire1detailView: {
        paddingHorizontal: 34,width:'100%', gap:8
    },
    detailtext: {
        fontFamily: fonts.CatamaranRegular, fontSize: 16, color:'#000000'

    },
    detailtext1: {
        fontFamily: fonts.CatamaranRegular, fontSize: 16, color:theme.colors.textForeground

    },
    detailView: {
        width:'100%', alignItems:'center', flexDirection:'row',  gap:8

    },
    tireouterView: { width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: theme.spacing.appPadding },
    tireText1: {
        fontFamily: fonts.CatamaranSemiBold, fontSize: 16, color: theme.colors.white

    },
    tireText: {
        fontFamily:fonts.CatamaranSemiBold, fontSize:16, color:theme.colors.secondary

    },

    TireView1: {
        width: '100%', borderRadius: 4, height:54,

        paddingHorizontal: 15, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor:theme.colors.primaryDark
    }, 
    TireView: {
        width: '100%', borderWidth: 1, borderRadius: 4, height:54,

        paddingHorizontal:15, paddingVertical:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', 
        
    }, 
    plansText: {
fontFamily:fonts.CormorantGaramondBold, fontSize:26, color:theme.colors.secondary
    },
    plansView: {
        justifyContent:'center', alignItems:'center', width:'100%'

    },
    headeInner: {
        width: '100%',
        justifyContent:'center', alignItems:'center', gap:8

    },
    imagesecondText: {
        fontFamily:fonts.CatamaranRegular, fontSize:14, color:theme.colors.secondary

    },
    imagetextHeader: {
        fontFamily:fonts.CormorantGaramondBold, fontSize:28, color:theme.colors.primary, 
    },
    imageTextView: {
        position: 'absolute', bottom:-10,
        width: '100%',
        justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: '#F9F7F8', paddingVertical:12
        // paddingHorizontal:19

    },
    headerImage: {

    },
    main: {
        flex: 1, 
        backgroundColor:theme.colors.secondaryLight

    }
})

export default SubscriptionScreenOne