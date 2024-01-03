import { Text } from 'src/components/Text';
import { Pressable, StyleSheet, View } from 'react-native';
import { Spacer10 } from 'src/utils/Spacing';
import { Image } from 'src/components/Image';
import Assets from 'src/utils/Assets';
import { Row } from 'src/components/Row';
import { theme } from 'src/styles/theme';
import NavService from 'src/navigation/NavService';
import { ELearnStack } from 'src/navigation/appRoutes';
import Share from 'react-native-share';
import { ILearn as ILearnType } from '../../../types/interfaces/Learn';

interface ILearn {
  showCategory: boolean;
  item: any | ILearnType;
  favoriteScreen?: boolean;
  localItem?: boolean;
  // eslint-disable-next-line no-unused-vars
  onRemoveFavorite?(id: number): void;
}
export const LearnItem = ({
  showCategory,
  item,
  favoriteScreen,
  onRemoveFavorite,
  localItem = false,
}: ILearn) => (
  <Pressable
    onPress={() => {
      if (item.category === 'Article')
        NavService.navigate(ELearnStack.ARTICLE_DETAIL, { article: item });
      else if (item.custom_field && item.custom_field[0] === 'Infographics')
        NavService.navigate(ELearnStack.INFOGRAPHIC, { article: item });
      else NavService.navigate(ELearnStack.ARTICLE_DETAIL, { article: item });
    }}
    style={styles.itemContainer}
  >
    <View>
      <Image
        style={styles.image}
        source={localItem ? item.image : item.image && { uri: item.image }}
        height={220}
      />
      {showCategory && (
        <View style={styles.category}>
          <Text variant="body14" color="primary">
            {item.custom_field ? item.custom_field[0] : 'Article'}
          </Text>
        </View>
      )}
      {item.category === 'Video' && (
        <View style={{ position: 'absolute', alignSelf: 'center', top: 80 }}>
          <Image source={Assets.images.play_circle} width={50} height={50} />
        </View>
      )}
    </View>
    <Spacer10 />
    <Row>
      <Row justifyContent="flex-start">
        <Text color="black" variant="body14">
          {item.date || 'January-04-2023'}
        </Text>
        <View style={styles.divider} />
        <Text color="primary" variant="body14">
          {item.tags && item.tags[0].name}
        </Text>
      </Row>
      <Row>
        {/* <Pressable>
          <Image source={Assets.images.like} width={17} height={17} />
        </Pressable> */}
        <Pressable
          onPress={async () => {
            const shareUrl = `https://uat.lillyhealth.agencypartnerinteractive.com/${item?.title
              .split(' ')
              .join('-')}`;
            const options = {
              title: 'Blogs',
              message: `Hi, there don't miss latest update ${shareUrl}`,
              // social: Share.Social.INSTAGRAM,
            };
            Share.open(options)
              .then((res) => {
                // catch response silently
              })
              .catch((err) => {
                // catch error silently
              });
          }}
          style={{ marginLeft: 15 }}
        >
          <Image source={Assets.images.share} width={17} height={17} />
        </Pressable>
      </Row>
    </Row>
    <Spacer10 />
    <Text color="secondary" variant="cg18">
      {item.title}
    </Text>
    <Spacer10 />
    {favoriteScreen && (
      <Pressable onPress={() => onRemoveFavorite && onRemoveFavorite(item.id)}>
        <Text style={{ textDecorationLine: 'underline' }} color="red" variant="body16">
          Remove
        </Text>
      </Pressable>
    )}
  </Pressable>
);
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 30,
  },
  image: { borderTopLeftRadius: 30, borderBottomRightRadius: 30 },
  divider: {
    width: 1,
    height: 10,
    backgroundColor: theme.colors.black,
    marginHorizontal: 8,
  },
  category: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 13,
    paddingVertical: 2,
    borderRadius: 6,
  },
});
