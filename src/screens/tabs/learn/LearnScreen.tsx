import { FlatList, Dimensions, StyleSheet, Pressable } from 'react-native';
import { Text } from 'src/components/Text';
import { useState } from 'react';
import { theme } from 'src/styles/theme';
import { Image } from 'src/components/Image';
import { Spacer10 } from 'src/utils/Spacing';
import NavService from 'src/navigation/NavService';
import { ELearnStack } from 'src/navigation/appRoutes';
import { learnCategories } from 'src/utils/DummyData';
import { LearnContainer } from '../components/LearnContainer';

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 2;
const LearnScreen = () => {
  const [listData] = useState([...learnCategories]);
  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => NavService.navigate(ELearnStack.LEARN_DETAIL)}
      style={styles.itemContainer}
    >
      <Image source={item.image} width={76} height={76} />
      <Spacer10 />
      <Text color="secondary" variant="bodyBold16">
        {item.title}
      </Text>
    </Pressable>
  );
  return (
    <LearnContainer searchPlaceholder="Search by category…">
      <FlatList
        focusable
        data={listData}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-between' }}
      />
    </LearnContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: itemWidth,
    height: itemWidth,
    backgroundColor: theme.colors.secondaryLight,
    borderRadius: 6,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LearnScreen;
