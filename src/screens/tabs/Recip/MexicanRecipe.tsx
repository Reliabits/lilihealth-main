import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from 'src/styles/theme'

const MexicanRecipe = () => {
  return (
    <View>
      <Text>MexicanRecipe</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:theme.colors.white
    }
})

export default MexicanRecipe