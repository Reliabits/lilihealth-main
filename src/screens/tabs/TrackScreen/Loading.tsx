import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'src/components/Image'
import Assets from 'src/utils/Assets'
import fonts from 'src/assets/fonts'
import { theme } from 'src/styles/theme'
import * as Progress from 'react-native-progress';
import NavService from 'src/navigation/NavService'
import { ETrackScreen } from 'src/navigation/appRoutes'


const Loading = () => {
  useEffect(() => {

    setTimeout(() => {
      NavService.navigate(ETrackScreen.MENSTRUATIONCYCLETWO)
    }, 3000)
    
  }, [])
  return (
    <View style={styles.main}>

      <View style={styles.mainView}>
        <Image height={101.49} width={101.49} source={Assets.images.loading} />
        
        <Text style={styles.percent}>
          75%
        </Text>

        <View style={styles.textView}>

        
        <Text style={styles.analysis}>
          Analyzing Your Data
         
        </Text>
        <Text style={styles.analysis}>
          Program...
          </Text>
        </View>
      </View>
      
      <View style={styles.progressbar}>

      <Progress.Bar color={theme.colors.primary} progress={0.3} width={250} />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
//   progress: {
// width:'100%', 
//   },
  progressbar: {
    width:'100%', justifyContent:'center', alignItems:'center'
  },
  textView: {

    width:'100%', justifyContent:'center', alignItems:'center'

  },
  analysis: {
    fontFamily:fonts.CormorantGaramondBold, fontSize:32, color:theme.colors.secondary

  },
  mainView: {
    width:'100%', justifyContent:'center', alignItems:'center',
gap:30, paddingHorizontal:59
  },
  percent: {

    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 31.88,
    color:theme.colors.secondary
  },
  main: {

    justifyContent:"center", alignItems:'center', flex:1, gap:50

  },

})

export default Loading