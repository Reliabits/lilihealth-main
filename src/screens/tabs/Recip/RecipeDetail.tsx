import { View, Text, StyleSheet, Image, ScrollView , Modal, Pressable, Alert} from 'react-native'
import React, { useState } from 'react'
// import {Image } from 'src/components/Image'
import Assets from 'src/utils/Assets'
import { theme } from 'src/styles/theme'
import fonts from 'src/assets/fonts'
import { Spacer15, Spacer20, Spacer40 } from 'src/utils/Spacing'

const RecipeDetail = () => {
    const [modalVisible, setModalVisible] = useState(false);


  const  data = [
        { name: 'Mushrooms', image: Assets.temp.mushroom, unit: '1/2 unit'},
        { name: 'Lettuce', image: Assets.temp.lettuce, unit: '1 unit'},
        { name: 'Red Onoin', image: Assets.temp.onion, unit: '2 unit'},
    ]
  return (
      <View style={styles.main}>
          <Image source={Assets.images.gluten1} style={styles.image} />
          <Spacer20 />
          <View style={styles.mainText}>
              <Text  style={styles.textmain}>
                  GLUTEN FREE LOW CARB KETO FISH TACOS
              </Text>
          </View>

          <Spacer15 />

          <View style={styles.smalliconsview}>
                          <Image style={styles.icons} source={Assets.images.share} />

                          <Image source={Assets.images.save} />
                          <Image source={Assets.images.calender_plus}  />
          </View>


          <ScrollView style={styles.padding}>
              <Spacer20 />

              
              <View style={styles.loremView}>
                  <Text style={styles.lorem}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem tincidunt, feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.
                  </Text>
              
              </View>

              <Spacer40 />
              
              <View style={styles.threeView}>
                  
                  <View style={styles.view1}>
                      
                      <Text style={styles.firstText}>
                          
                          Making Time 
                          
                      </Text>

                      <Image style={styles.icons} source={Assets.images.small_clock} />

                      <Text style={styles.lasttext}>
                          45 mins
                      </Text>
                      
                  </View>
                  <Image source={Assets.images.line} />

                  <View style={styles.view1}>

                      <Text style={styles.firstText}>

                          Making Time

                      </Text>

                      <Image style={styles.icons} source={Assets.images.small_clock} />

                      <Text style={styles.lasttext}>
                          45 mins
                      </Text>

                  </View>

                  <Image source={Assets.images.line} />
                  <View style={styles.view1}>

                      <Text style={styles.firstText}>

                          Making Time

                      </Text>

                      <Image style={styles.icons} source={Assets.images.small_clock} />

                      <Text style={styles.lasttext}>
                          45 mins
                      </Text>

                  </View>
                  
              </View>

              <Spacer40 />
              <View>
                  <Text style={styles.ingrediant}>
                      Ingredeints
                  </Text>
              </View>

              <Spacer20 />

              <View style={styles.bottomView}>
                  {data.map((value)=>
                  <View style={styles.innerView}>
                      <View style={styles.startView}>
                              <Image source={value.image} />
                              <Text style={styles.text}>
                                  {value.name}
                              </Text>
                          </View>
                          <Text style={styles.last}>
                              {value.unit}
                          </Text>
                      
                      </View>
                  )}
                  
              </View>
          </ScrollView>  
          
          <Pressable onPress={()=> setModalVisible(true)} style={styles.speedDial}>
              <Image source={Assets.images.add} style={{width:54, height:56}} />
              
          </Pressable>

          <Modal
              style={styles.modal}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              
              onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.modalView}>
                      <Image source={Assets.images.calender_plus} style={{ tintColor: 'white' }} />
                      <Text style={styles.Text}>
                          Add to Meal Planner
                      </Text>
                      
                  </Pressable>

                  <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.modalView1}>
                      <Image source={Assets.images.cart_small} style={{ tintColor: theme.colors.primary }} />
                      <Text style={styles.Text1}>
                          Add to Meal Planner
                      </Text>

                  </Pressable>

                  <Pressable onPress={()=> setModalVisible(!modalVisible)}  style={styles.modalView1}>
                      <Image source={Assets.images.save} style={{ tintColor: theme.colors.primary }} />
                      <Text style={styles.Text1}>
                          Add to Meal Planner
                      </Text>

                  </Pressable>
              </View>
          </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modal: {
      

    },
    centeredView: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 22,
        paddingHorizontal: theme.spacing.appPadding,
        marginBottom: theme.spacing.bottomTabHeight,
        marginTop: "auto",
        gap:10

    },
    modalView1: {


        width: '100%',
        height: 54,
        backgroundColor: theme.colors.white,
        borderWidth:1,
        borderColor:theme.colors.textForeground,
        // backgroundColor: 'white',    
        // paddingHorizontal:theme.spacing.appPadding,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
        borderRadius: 6,

    },
    modalView: {
      
        
        width: '100%',
        height: 54,
        backgroundColor:theme.colors.primary,
        // backgroundColor: 'white',    
        // paddingHorizontal:theme.spacing.appPadding,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        alignItems:'center',
        borderRadius: 6,
       
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
    Text: {
        fontFamily: fonts.CatamaranMedium,
        fontSize: 16, color: theme.colors.white

    },
    Text1: {
        fontFamily: fonts.CatamaranMedium,
        fontSize: 16, color: theme.colors.primary

    },
    modalText: {
      
    },
    speedDial: {
        position: 'absolute',
        bottom: 22.04,
        right:20
        

    },
    last: {
        fontFamily:fonts.CatamaranBold, fontSize:16, color:theme.colors.primary

    },
    text: {
        fontFamily:fonts.CatamaranBold, fontSize:16, color:theme.colors.textForeground

    },
    startView: {

        gap: 16.06,
        flexDirection: 'row',
        alignItems:'center'
    },
    innerView: {
        paddingHorizontal: theme.spacing.appPadding,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: "space-between", backgroundColor: theme.colors.white, borderRadius: 6, 
        paddingVertical:11

    },
    bottomView: {
        backgroundColor: theme.colors.secondaryLight,
        width: '100%', 
        paddingHorizontal: 12,
        paddingVertical: 18,
        borderRadius: 6, gap: 8, 
        marginBottom:85,

    },
    ingrediant: {   
        fontFamily: fonts.CormorantGaramondSemiBold,
        fontSize: 20,
        color:theme.colors.secondary

    },
    lasttext: {
        fontFamily: fonts.CatamaranSemiBold,
        fontSize:16, color:theme.colors.textForeground

    },
    firstText: {
        fontFamily: fonts.CatamaranRegular,
        fontSize: 16, color: theme.colors.textForeground

    },
    view1: {
        gap: 6,
        // justifyContent:"center"
        alignItems:'center'
       
    },
    threeView: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems:'center'

    },
    lorem: {
        fontFamily: fonts.CatamaranRegular,
        fontSize:16, color:theme.colors.textForeground
    },
    padding: {
        paddingHorizontal:theme.spacing.appPadding
    },
    loremView: {
        width: '100%',
        

    },
    icons: {
        height:18.72, width:18.71

    },
    smalliconsview: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal:theme.spacing.appPadding

    },
    textmain: {
        fontFamily:fonts.CormorantGaramondSemiBold, fontSize:20, color:theme.colors.secondary
    },
    mainText: {
        width:'100%', 
        paddingHorizontal:theme.spacing.appPadding

    },
    main: {
    flex:1, 
    },
    image: {
        width:"100%"
    },
})

export default RecipeDetail