import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { theme } from 'src/styles/theme'
import { Spacer10, Spacer40 } from 'src/utils/Spacing'
import { Image } from 'src/components/Image'
import Assets from 'src/utils/Assets'
import fonts from 'src/assets/fonts'
import NavService from 'src/navigation/NavService'

const AddLabHeader = () => {
  return (
      <View style={styles.main}>
          
          <Spacer40 />
          <Spacer10 />

          <View style={styles.innerView}>
              <Pressable onPress={()=> NavService.goBack()}>
                  <Image source={Assets.images.back} height={28} width={28} />
              </Pressable>
              <Text style={styles.text}>
                  Add New Lab Result
              </Text>
          </View>
          
      
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily:fonts.CormorantGaramondBold, fontSize:26, color:theme.colors.secondary
    },
    innerView: {
        flexDirection: 'row', alignItems: 'center', gap: 15, 
        width:'100%'
        
    },
    main: {
        width: '100%', paddingHorizontal: theme.spacing.appPadding, 
        
        

    }
})

export default AddLabHeader