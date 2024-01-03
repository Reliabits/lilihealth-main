import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';
import Assets from 'src/utils/Assets';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';
import { Spacer10, Spacer15, Spacer20 } from 'src/utils/Spacing';
import { foodDetailsRecipes } from 'src/utils/DummyData';
import { useState } from 'react';
import { MainButton } from 'src/components/buttons/MainButton';

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 2;

const FoodDetailScreen = () => {
  const [recipesData] = useState([...foodDetailsRecipes]);
  const [modal, setModal] = useState(false);
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        width={itemWidth}
        height={90}
        resizeMode="cover"
        style={styles.recipesImage}
      />
      <Spacer10 />
      <Text color="secondary" variant="cg18">
        {item.title}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={Assets.temp.ed_main} style={styles.imageBackground}>
        <Pressable style={styles.body}>
          <Image source={Assets.images.back_filled} width={28} height={28} />
        </Pressable>
      </ImageBackground>
      <Spacer20 />
      <View style={styles.secondContainer}>
        <View style={styles.heading}>
          <Text color="secondary" variant="h2Cg20">
            Ground Chicken
          </Text>
          <Image source={Assets.images.tick} height={16} width={16} style={styles.tick} />
        </View>
        <Spacer15 />
        <View style={styles.heading}>
          <Pressable>
            <Image source={Assets.images.share} width={18} height={18} />
          </Pressable>
          <Pressable>
            <Image source={Assets.images.bookmark} width={18} height={18} style={styles.icon} />
          </Pressable>
          <Pressable>
            <Image source={Assets.images.add_meal} width={18} height={18} style={styles.icon} />
          </Pressable>
        </View>
        <Spacer10 />
        <Text color="textForeground" variant="body16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem tincidunt,
          feugiat purus eget, pretium est. Aliquam ut tincidunt lorem. Proin ultricies, nisi ac
          vulputate mattis, ante orci feugiat quam, at tempor libero ligula sit amet nisi.
        </Text>
        <Spacer20 />
        <Text color="secondary" variant="h2Cg20">
          Recipes Based On
        </Text>
        <Spacer15 />
        <FlatList
          focusable
          data={recipesData}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-between' }}
        />
        <Modal animationType="fade" transparent visible={modal}>
          <View style={styles.modalStyle}>
            <Pressable style={{ marginTop: 40 }} onPress={() => setModal(false)}>
              <Image source={Assets.images.back} width={28} height={28} />
            </Pressable>
            <View style={styles.flexView}>
              <MainButton
                icon={Assets.images.add_meal}
                title="Add to Meal Planner"
                onPress={() => setModal(false)}
              />
              <Spacer10 />
              <MainButton
                backgroundColor={theme.colors.white}
                icon={Assets.images.share}
                title="Add to Shopping List"
                onPress={() => setModal(false)}
              />
              <Spacer10 />
              <MainButton
                backgroundColor={theme.colors.white}
                icon={Assets.images.bookmark}
                title="Add to Saved Meal"
                onPress={() => setModal(false)}
              />
              <Spacer10 />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    paddingHorizontal: theme.spacing.appPadding,
  },
  imageBackground: {
    width: '100%',
    height: 225,
  },
  body: {
    marginTop: 40,
    paddingLeft: 20,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 3,
  },
  tick: {
    marginLeft: 7,
  },
  icon: {
    marginLeft: 20,
  },
  itemContainer: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: 6,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipesImage: {
    borderRadius: 6,
  },
  add_meal: { alignSelf: 'flex-end', padding: 3, marginRight: 10, marginTop: -30 },
  modalStyle: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#00000090',
    marginBottom: 69,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flexView: { flex: 1, justifyContent: 'flex-end' },
});

export default FoodDetailScreen;
