import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ReciepeCategoryHeader from '../components/RecipeCtaegoryHeader'
import { theme } from 'src/styles/theme'
import { Row } from 'src/components/Row'
import { InputField } from 'src/components/InputField'
import Assets from 'src/utils/Assets'
import { EEatStack } from 'src/navigation/appRoutes'
import NavService from 'src/navigation/NavService'
import { Image } from 'src/components/Image'
import { Spacer20 } from 'src/utils/Spacing'
import fonts from 'src/assets/fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ReciepeCategory = () => {
  return (
    <View style={styles.main}>
      <ReciepeCategoryHeader />

      {/* <Spacer20 /> */}

      <Row style={styles.row}>
          <View style={styles.flex}>
            <InputField
              leftIcon={Assets.images.search}
              placeholder="Search by food or category name"
            />
          </View>
          <Pressable onPress={() => NavService.navigate(EEatStack.FOOD_DETAIL)}>
            <Image source={Assets.images.filter} width={54} height={54} />
          </Pressable>
        </Row>
      
      <ScrollView style={styles.padding}>
        <View style={styles.itemView}>
          <View style={styles.inner}>
            
          <Pressable onPress={()=> NavService.navigate(EEatStack.RECIPELIST)} style={styles.item}>
              <Image height={76} width={76} source={Assets.images.mexican} />
              <Text style={styles.text}>
                Mexican
              </Text>

          </Pressable>
          <View style={styles.item}>
            <Image height={76} width={76} source={Assets.images.no_cook} />
              <Text style={styles.text}>
                No Cook
              </Text>
            </View>

          </View>

          <View style={styles.inner}>

            <View style={styles.item}>
              <Image height={76} width={76} source={Assets.images.smoothie} />
              <Text style={styles.text}>
                Smoothies
              </Text>

            </View>
            <View style={styles.item}>
              <Image height={76} width={76} source={Assets.images.soups} />
              <Text style={styles.text}>
                Soups
              </Text>
            </View>

          </View>

          <View style={styles.inner}>

            <View style={styles.item}>
              <Image height={76} width={76} source={Assets.images.healthy_snacks} />
              <Text style={styles.text}>
                Healthy Snacks
              </Text>

            </View>
            <View style={styles.item}>
              <Image height={76} width={76} source={Assets.images.meat_mains} />
              <Text style={styles.text}>
                Meat Mains
              </Text>
            </View>

          </View>


        </View>

        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {

    fontFamily: fonts.CatamaranBold, fontSize: 16,
    color:theme.colors.secondary

  },
  inner: { flexDirection: "row", justifyContent: 'space-between', paddingTop:18},
  item: {
    width: 165,
    height: 172,
    backgroundColor: theme.colors.secondaryLight,
    borderRadius: 6,
    justifyContent: "center", alignItems: "center",
    gap:12
    
  },
  itemView: {

    width: "100%",  paddingTop:100  ,
  },
  row: {
    paddingHorizontal: theme.spacing.appPadding,
    position:"absolute", top:118
  },
  flex: { flex: 1, marginRight: 10 },
  padding: {
paddingHorizontal:theme.spacing.appPadding
  },

  main: {
    flex: 1,
    backgroundColor:theme.colors.white
  }

})

export default ReciepeCategory