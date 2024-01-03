import { useRoute } from '@react-navigation/native';
import { StyleSheet, Pressable, Image as RNImage, ScrollView, View } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import NavService from 'src/navigation/NavService';
import { theme } from 'src/styles/theme';
import { ILearn } from 'src/types/interfaces/Learn';
import Assets from 'src/utils/Assets';
import { Spacer30 } from 'src/utils/Spacing';
import ContentWebView from '../components/ContentWebView';

const InfographicScreen = () => {
  const { article } = useRoute().params as ILearn;
  return (
    <ScrollView style={styles.container}>
      <Spacer30 />
      <Row>
        <Pressable onPress={() => NavService.goBack()}>
          <Image source={Assets.images.back} width={28} height={28} />
        </Pressable>
        <Pressable>
          <Image source={Assets.images.share} width={16} height={16} />
        </Pressable>
      </Row>
      <Spacer30 />
      <View>
        <ContentWebView sourceHtml={article.content} style={{ height: 200 }} />
      </View>
      <Spacer30 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.appPadding,
    backgroundColor: theme.colors.secondary,
  },
});

export default InfographicScreen;
