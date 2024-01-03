import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddLabHeader from '../components/AddLabHeader'

const AddLabResults = () => {
  return (
      <View style={styles.main}>
          <AddLabHeader />
      
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
       flex:1
   } 
})

export default AddLabResults