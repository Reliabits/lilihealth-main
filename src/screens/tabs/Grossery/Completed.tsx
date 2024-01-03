import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from 'src/styles/theme'
import { Spacer15, Spacer20 } from 'src/utils/Spacing'
import fonts from 'src/assets/fonts'
import { Image } from 'src/components/Image'
import Assets from 'src/utils/Assets'

const Completed = () => {

  const headers = [
    { title:'Proteins'},
    { title:'Grains'},
    { title:'Vegatables & Fruits'},
  ]

  const items = [
    {images: Assets.temp.onion, title:'Red Onion', pecies:'6 Pieces'},
    {images: Assets.temp.mushroom, title:'Mushrooms', pecies:'12 Pieces'},
  ]
  return (
    <View style={styles.main}>
      <View style={styles.divider}>
      </View>

      <Spacer20 />

      <View style={styles.updateView}>
        <Text style={styles.updateText}>
          Last Updated: <Text style={styles.updateText1}>  Sun 19, 2023 </Text>
        </Text>
      </View>

      <Spacer20 />

      {headers.map((item)=>
<>

      <View style={styles.proteinmainView}>

        <Text style={styles.headerText}>
          {item.title}
        </Text>

      </View>

      <Spacer20 />
          {items.map((data) =>
        
            <>
      <View style={styles.itemsView}>

        <View style={styles.startView}>
          <View style={styles.imageview}>

            <Image height={31} width={29} source={data.images} />

          </View>

          <View style={styles.textView}>
            <Text style={styles.text1}>
              {data.title}
            </Text>
            <Text style={styles.text2}>
              {data.pecies}
            </Text>

          </View>

        </View>

        

          <Image source={Assets.images.simple_check } height={11.05} width={15} />

          
       

      </View>
       <Spacer15 />

      <View style={styles.divider}>
              </View>
              <Spacer15 />
              
              </>
          )}

     
        </>
      )}
    
    </View>
  )
}

const styles = StyleSheet.create({

  text2: {
    fontFamily: fonts.CatamaranRegular, fontSize: 14, color: theme.colors.textForeground

  },
  text1: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:16, color:theme.colors.secondary

  },
  textView: {
    

  },
  imageview: {
width:50, height:50, justifyContent:'center', alignItems:'center', 
  },
  startView: {
    flexDirection: 'row', alignItems: 'center', gap: 12, 
    
  },
  itemsView: {
    width:'100%', justifyContent:'space-between', flexDirection:"row", alignItems:'center'

  },
  headerText: {
    fontFamily:fonts.CatamaranSemiBold, fontSize:20, color:theme.colors.secondary

  },
  updateText1: {
   
      fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.lightGray

    
  },
  updateText: {
    fontFamily:fonts.CatamaranRegular, fontSize:14, color:theme.colors.lightGray

  },
  updateView: {
    width: '100%', justifyContent: 'center', alignItems: 'center'
  },
  proteinmainView: {
    width:'100%', paddingHorizontal:theme.spacing.appPadding, paddingVertical:8,backgroundColor:theme.colors.secondaryLight, borderRadius:6

  },

  divider: {
    borderWidth:0.2, width:'100%', borderColor:theme.colors.textForeground

  },

  main: {

    flex:1, backgroundColor:theme.colors.white

  },
})

export default Completed