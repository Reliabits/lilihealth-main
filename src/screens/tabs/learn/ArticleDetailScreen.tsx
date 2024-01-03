import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import NavService from 'src/navigation/NavService';
import { theme } from 'src/styles/theme';
import { ILearn, ITag } from 'src/types/interfaces/Learn';
import Assets from 'src/utils/Assets';
import { Spacer10, Spacer15, Spacer35 } from 'src/utils/Spacing';
import Share from 'react-native-share';
import ContentWebView from '../components/ContentWebView';

const ArticleDetailScreen = () => {
  // const route = useRoute<RouteProp<Record<string, ILearn>, string>>();
  const { article } = useRoute().params as ILearn;

  const socialShare = async (item: any) => {
    const shareUrl = `https://uat.lillyhealth.agencypartnerinteractive.com/${item?.title
      .split(' ')
      .join('-')}`;
    const options = {
      title: 'Blogs',
      message: `Hi, there don't miss latest update ${shareUrl}`,
      social: Share.Social.INSTAGRAM,
    };
    try {
      await Share.open(options);
    } catch (error) {
      // console.log({error})
    }
  };

  return (
    <ScrollView>
      <View>
        <Image resizeMode="cover" source={article.image && { uri: article.image }} height={280} />
        <Pressable
          onPress={() => NavService.goBack()}
          style={{ position: 'absolute', top: 30, left: 20 }}
        >
          <Image source={Assets.images.back} width={28} height={28} />
        </Pressable>
      </View>
      <Spacer10 />
      <View style={styles.container}>
        <Row>
          <Row justifyContent="flex-start">
            <Text color="black" variant="body14">
              12-05-2023
            </Text>
            <View style={styles.divider} />
            <Text color="primary" variant="body14">
              {article.tags && article.tags[0].name}
            </Text>
          </Row>
          <Row>
            <Pressable style={{ marginLeft: 15 }}>
              <Image source={Assets.images.share} width={17} height={17} />
            </Pressable>
          </Row>
        </Row>
        <Spacer10 />
        <Text color="secondary" variant="cg18">
          {article.title}
        </Text>
        <Spacer15 />
        <View>
          <ContentWebView
            sourceHtml={
              article.custom_field[0] === 'Video' ? article.video_iframe : article.content
            }
            style={{ height: 4000 }}
          />
        </View>
        <Spacer35 />
        <View style={styles.hr} />
        <Spacer15 />
        <Row style={styles.row}>
          <View style={{ flex: 3 }}>
            <Text color="secondary" variant="cg18">
              Tags:
            </Text>
            <View style={styles.tagBody}>
              {article.tags &&
                article.tags.map((item: ITag) => (
                  <View style={styles.tagItem}>
                    <Text color="primary" variant="body12">
                      {item.name}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Text color="secondary" variant="cg18">
              Share:
            </Text>
            <View style={styles.tagBody}>
              <Pressable onPress={() => socialShare(article)} style={styles.icon}>
                <Image source={Assets.images.facebook_icon} height={16} width={16} />
              </Pressable>
              <Pressable onPress={() => socialShare(article)} style={styles.icon}>
                <Image source={Assets.images.instagram_icon} height={16} width={16} />
              </Pressable>
              <Pressable onPress={() => socialShare(article)} style={styles.icon}>
                <Image source={Assets.images.linkedin_icon} height={16} width={16} />
              </Pressable>
              <Pressable onPress={() => socialShare(article)} style={styles.icon}>
                <Image source={Assets.images.twitter_icon} height={16} width={16} />
              </Pressable>
            </View>
          </View>
        </Row>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.appPadding,
  },
  divider: {
    width: 1,
    height: 10,
    backgroundColor: theme.colors.black,
    marginHorizontal: 8,
  },
  hr: {
    height: 1,
    backgroundColor: theme.colors.secondaryDark,
  },
  tagBody: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  row: { alignItems: 'flex-start' },
  tagItem: {
    backgroundColor: theme.colors.textBackground,
    marginRight: 10,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: { marginRight: 15, marginBottom: 10 },
});

export default ArticleDetailScreen;
