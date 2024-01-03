import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from 'src/styles/theme'
import { Image } from '../Image'
import Assets from 'src/utils/Assets'
import { Spacer20, Spacer40 } from 'src/utils/Spacing'
import fonts from 'src/assets/fonts'
import { MainButton } from '../buttons/MainButton'

const ActivatedScreen = () => {
  return (
      <View style={styles.main}>
          <View style={{flex:10, justifyContent:'center', alignItems:'center'}}>
          <Image height={70} width={70} source={Assets.images.check_circle} />
          <Spacer40 />
          <Text style={styles.maintext}>
              Subscribtion
              
          </Text>
          <Text style={styles.maintext}>
              Has Been Activated
          </Text>
          <Spacer20 />

          <Text style={styles.smalltext1}>
              You have successfully paid $35 USDT
              
          </Text>
          <Text>
              and activated plan for <Text style={styles.smalltext}>3 months</Text> 
          </Text>
          </View>

          <View style={styles.buttonView}>
              <MainButton onPress={()=> {}} title='Continue' />
              
          </View>


          
     
    </View>
  )
}

const styles = StyleSheet.create({
    buttonView: {
        flex:1,
 width:'100%', paddingHorizontal:theme.spacing.appPadding, justifyContent:'flex-end', marginBottom:59
    },
    smalltext1: {
        fontFamily: fonts.CatamaranRegular, fontSize: 16, color: theme.colors.secondary

    }, 
    smalltext: {
        fontFamily:fonts.CatamaranSemiBold, fontSize:16, color:theme.colors.secondary

    }, 
    maintext: {
        fontFamily:fonts.CormorantGaramondBold, fontSize:36 , color:theme.colors.secondary

    },
    main: {
        flex: 1,
        backgroundColor: theme.colors.secondaryLight, justifyContent:'center', alignItems:'center'
    
}
})

export default ActivatedScreen