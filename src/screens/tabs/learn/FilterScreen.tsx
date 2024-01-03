import { useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { learnCategories, learnSearchTags } from 'src/utils/DummyData';
import { Spacer10, Spacer20, Spacer40 } from 'src/utils/Spacing';
import { InputField, InputFieldWhite } from 'src/components/InputField';
import { MainButton } from 'src/components/buttons/MainButton';
import NavService from 'src/navigation/NavService';
import { CheckBox } from 'src/components/CheckBox';

const FilterScreen = () => {
  const [searchFilters, setSearchFilters] = useState([...learnCategories]);
  const [searchTags, setSearchTags] = useState([...learnSearchTags]);
  const handleSearch = () => {
    NavService.goBack();
  };

  const handleClearFilter = () => {
    setSearchFilters([...learnCategories]);
  };

  return (
    <ScrollView style={styles.container}>
      <Row>
        <Pressable onPress={() => NavService.goBack()}>
          <Image source={Assets.images.back} width={28} height={28} />
        </Pressable>
        <Pressable onPress={handleClearFilter}>
          <Text style={styles.txtFilter} color="primary" variant="body16">
            Clear Filter
          </Text>
        </Pressable>
      </Row>
      <Spacer40 />
      <Text color="secondary" variant="h1Cg30">
        Search Filter
      </Text>
      <Spacer20 />
      <View style={styles.filterContainer}>
        {searchFilters.map((item, index) => (
          <CheckBox
            style={styles.filterBody}
            title={item.title}
            value={item.selected}
            onValueChange={(newValue) => {
              const temp = { ...item };
              temp.selected = newValue;
              searchFilters[index] = temp;
              setSearchFilters([...searchFilters]);
            }}
          />
        ))}
      </View>
      <Spacer20 />
      <Text color="secondary" variant="h2Cg20">
        Tags:
      </Text>
      <Spacer10 />
      <InputFieldWhite leftIcon={Assets.images.search} placeholder="Search by name…" />
      <Spacer20 />
      <View style={styles.filterContainer}>
        {searchTags.map((item) => (
          <Pressable
            onPress={() => {
              item.selected = !item.selected;
              setSearchTags([...searchTags]);
            }}
            style={[styles.searchItem, item.selected && { borderColor: theme.colors.primary }]}
          >
            <Text color={item.selected ? 'primary' : 'textForeground'} variant="body14">
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Spacer40 />
      <Spacer40 />
      <MainButton title="Search" onPress={handleSearch} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: theme.colors.secondaryLight,
    paddingHorizontal: theme.spacing.appPadding,
  },
  txtFilter: { textDecorationLine: 'underline' },
  filterContainer: { flexDirection: 'row', flexWrap: 'wrap', flex: 1 },
  filterBody: { width: '50%' },
  searchItem: {
    borderWidth: 1,
    borderColor: theme.colors.textForeground,
    paddingVertical: 4,
    paddingHorizontal: 17,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FilterScreen;
