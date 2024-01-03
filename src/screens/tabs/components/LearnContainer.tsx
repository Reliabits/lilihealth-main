/* eslint-disable no-unused-vars */
import { useFocusEffect } from '@react-navigation/native';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Keyboard, Pressable, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'src/components/Image';
import { InputField } from 'src/components/InputField';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import NavService from 'src/navigation/NavService';
import { ELearnStack } from 'src/navigation/appRoutes';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { learnSearchTags } from 'src/utils/DummyData';
import { Spacer15, Spacer20 } from 'src/utils/Spacing';

interface ILearn {
  searchPlaceholder: string;
  children: ReactNode;
  onFilter?: () => void;
  favorite?: boolean;
  onSearch?(text: string): void;
  onSelectCategory?(category: string): void;
  onRefresh?: () => void;
}

export const LearnContainer = ({
  searchPlaceholder,
  children,
  onFilter,
  favorite,
  onSelectCategory,
  onSearch,
  onRefresh,
}: ILearn) => {
  const [tab, setTab] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [showSearchTags, setShowSearchTags] = useState<boolean>(false);
  const [searchTags, setSearchTags] = useState([...learnSearchTags]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshing = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (searchTags.length === 0) {
      setShowSearchTags(false);
    }
  }, [searchTags]);

  useFocusEffect(
    useCallback(() => {
      // setSearch('');
      // onSearch && onSearch('');
    }, [])
  );

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setTimeout(() => {
        setShowSearchTags(false);
      }, 2000);
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleFavorite = () => {
    // TODO
    if (NavService.getCurrentRoute() === ELearnStack.FAVORITE) {
      NavService.goBack();
    } else {
      NavService.navigate(ELearnStack.FAVORITE);
    }
  };

  const renderTag = (title: string) => (
    <Pressable
      onPress={() => {
        onSelectCategory && onSelectCategory(title);
        setTab(title);
        setSearch('');
      }}
      style={[styles.tab, tab === title && styles.tabActive]}
    >
      <Text color={tab === title ? 'white' : 'textForeground'} variant="bodyBold14">
        {title}
      </Text>
    </Pressable>
  );
  return (
    <ScrollView
      onScroll={() => setShowSearchTags(false)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            onRefresh && onRefresh();
            onRefreshing();
            onSelectCategory && onSelectCategory('');
            setTab('');
          }}
        />
      }
      style={styles.container}
    >
      <View style={styles.padding}>
        <Text color="secondary" variant="bodyBold18">
          Learn
        </Text>
        <Spacer15 />
        <Row justifyContent="flex-start">
          {renderTag('Article')}
          {renderTag('Videos')}
          {renderTag('Infographics')}
        </Row>
      </View>
      <Spacer20 />
      <View style={styles.shadowContainer}>
        <View style={styles.shadow} />
      </View>
      <Spacer20 />
      <Row style={styles.padding}>
        <View style={styles.flex}>
          <InputField
            // onBlur={() => setShowSearchTags(false)}
            onFocus={() => {
              setShowSearchTags(true);
              setSearchTags([...learnSearchTags]);
            }}
            leftIcon={Assets.images.search}
            placeholder={searchPlaceholder}
            value={search}
            onChangeText={(text) => {
              onSearch && onSearch(text);
              setSearch(text);
            }}
          />
        </View>
        <View style={styles.margin}>
          {/* {favorite && (
            <Pressable onPress={handleFavorite}>
              <Image
                source={
                  NavService.getCurrentRoute() === ELearnStack.FAVORITE
                    ? Assets.images.favorite_selected
                    : Assets.images.favorite
                }
                width={54}
                height={54}
              />
            </Pressable>
          )} */}
        </View>
        <Pressable onPress={() => NavService.navigate(ELearnStack.SEARCH_FILTERS)}>
          <Image source={Assets.images.filter} width={54} height={54} />
        </Pressable>
      </Row>
      <Spacer20 />
      <View style={styles.padding}>
        {showSearchTags && (
          <View>
            <Text color="secondary" variant="h2Cg20">
              Search Tags
            </Text>
            <View style={styles.searchTagBody}>
              {searchTags.map((item) => (
                <Pressable
                  onPress={() => {
                    onSearch && onSearch(item.title);
                    setSearch(item.title);
                  }}
                  style={styles.searchItem}
                >
                  <Text color="primary" variant="body14">
                    {item.title}
                  </Text>
                  <Pressable
                    onPress={() => {
                      setSearchTags(searchTags.filter((tag) => tag.id !== item.id));
                    }}
                    style={styles.tagMargin}
                  >
                    <Image source={Assets.images.close} width={12} height={12} />
                  </Pressable>
                </Pressable>
              ))}
            </View>
          </View>
        )}
        {children}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  padding: { paddingHorizontal: theme.spacing.appPadding },
  tab: {
    borderRadius: 64,
    backgroundColor: theme.colors.textBackground,
    paddingHorizontal: 17,
    paddingVertical: 4,
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  shadow: {
    height: 1,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  shadowContainer: { overflow: 'hidden', paddingBottom: 5 },
  flex: { flex: 1 },
  margin: { marginRight: 7 },
  searchTagBody: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  searchItem: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 17,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagMargin: { marginLeft: 11 },
});
