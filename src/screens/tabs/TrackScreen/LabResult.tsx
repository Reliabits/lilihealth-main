import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'src/components/Image'
import Assets from 'src/utils/Assets'
import fonts from 'src/assets/fonts'
import { theme } from 'src/styles/theme'
import NavService from 'src/navigation/NavService'
import AddLabResults from './AddLabResults'
import { ETrackScreen } from 'src/navigation/appRoutes'

const LabResult = () => {
  return (
      <View style={styles.main}>
          
          <Image height={144.78} width={120} source={Assets.images.lab_logo} />

          <View style={styles.mainTextView}>
              <Text style={styles.firstText}>
                  There’re No Lab Results Yet!
              </Text>

              <View style={styles.textView}>
                  <Text style={styles.secondtext}>
                      Start your lab result tracking by using
                      
                  </Text>
                  <Text style={styles.secondtext}>
                      the add button below
                  </Text>
                  
              </View>
          </View>
          
          <View style={styles.buttonview}>
              <Pressable onPress={()=> {NavService.navigate(ETrackScreen.ADDLABRESULTS)}} style={styles.button} >
                  <Text style={styles.buttontext}>
                      Add New Lab Result
                  </Text>
              </Pressable>
          </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    buttontext: {
        fontFamily:fonts.CatamaranMedium, fontSize:16, color:theme.colors.white

    },
    button: {
        height: 54, width: '100%', borderRadius: 4, justifyContent: 'center', alignItems: 'center', 
        backgroundColor:theme.colors.primary

    },
    buttonview: {
width:'100%', paddingHorizontal:theme.spacing.appPadding

    },
    secondtext: {
        fontFamily: fonts.CatamaranRegular,
        fontSize:16, color:theme.colors.secondary
    },
    textView: {
        width:'100%', justifyContent:'center', alignItems:'center'

    },

    firstText: {
        fontFamily:fonts.CormorantGaramondBold, fontSize:26, color:theme.colors.secondary
    },
    mainTextView: {
        width:'100%', justifyContent:'center', alignItems:'center', gap:16.11


    },
    main: {
        flex:1, justifyContent:'center', alignItems:'center', gap:30

    }
})

export default LabResult