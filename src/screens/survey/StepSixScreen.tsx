import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { theme } from 'src/styles/theme';
import { Text } from 'src/components/Text';
import { Spacer15, Spacer30 } from 'src/utils/Spacing';
import { Image } from 'src/components/Image';
import Assets from 'src/utils/Assets';
import NavService from 'src/navigation/NavService';
import { EStacks } from 'src/navigation/appRoutes';
import SurveyContainer from './components/SurveyContainer';

const StepSixScreen = () => {
  const proteinList = [
    { title: 'Potato', icon: Assets.temp.potato },
    { title: 'Pea', icon: Assets.temp.pea },
    { title: 'Red Onion', icon: Assets.temp.onion },
    { title: 'Mushrooms', icon: Assets.temp.mushroom },
    { title: 'Lettuce', icon: Assets.temp.lettuce },
  ];

  const renderSection = (title: string) => (
    <View>
      <Text color="secondary" variant="bodyBold18">
        {title}
      </Text>
      <Spacer15 />
      <FlatList
        nestedScrollEnabled
        data={proteinList}
        numColumns={5}
        columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Pressable style={styles.item} key={item.title}>
            <View style={styles.itemIcon}>
              <Image source={item.icon} width={25} height={25} />
            </View>
            <Text style={styles.text} color="textForeground" variant="body12">
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
  return (
    <SurveyContainer
      title="What ingredients do you normally have at home?"
      detail="Choose at least 5 ingredients, so we can create personalised suggestions for you."
      progress="100%"
      onNext={() => NavService.navigate(EStacks.BOTTOM_TABS)}
      onSkip={() => NavService.navigate(EStacks.BOTTOM_TABS)}
    >
      <Spacer30 />

      {renderSection('Proteins')}
      <Spacer30 />
      {renderSection('Grains')}
      <Spacer30 />
      {renderSection('Vegetables and Fruits')}
      <Spacer30 />
    </SurveyContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 13,
  },
  itemIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.textForeground,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: theme.colors.textForeground,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowRadius: 6,
    elevation: 2.5,
  },
  text: { marginLeft: 10 },
});

export default StepSixScreen;
