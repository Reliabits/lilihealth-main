import React, { useState } from 'react';
import {
  Linking,
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const { width } = Dimensions.get('window');
interface ContentWebViewProps {
  sourceHtml: string;
  style?: StyleProp<ViewStyle>;
}

const ContentWebView = ({ sourceHtml, style }: ContentWebViewProps) => {
  const [webviewHeight, setWebviewHeight] = useState(4000);
  const [loading, setLoading] = useState(false);
  const onProductDetailsWebViewMessage = (event: any) => {
    setWebviewHeight(Number(event.nativeEvent.data));
  };
  // const replaceChar = /\[.*\]/gi;
  const replaceChar =
    /\[vc_row\]|\[vc_column\]|\[vc_column_text\]|\[\/vc_column_text\]|\[\/vc_column\]|\[\/vc_row\]/gi;
  function getFinalHtml(mSourceHtml: string) {
    return `<!DOCTYPE html>
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css?family=Catamaran"
            rel="stylesheet" />
      
          <style>
            body {
              font-family: 'Catamaran';
              font-size: 16px;
              color: #9099A3;
              width: ${width - 80}px;
            }
            img{
              width: ${width - 50}px;
              height: auto;
              border-radius: 6px;
            }
            iframe{
              width: ${width - 50}px;
              height: auto;
            }
          </style>
        </head>
        <body>
          ${mSourceHtml.replace(replaceChar, '')}
        </body>
      </html>`;
  }

  return (
    <WebView
      style={[styles.webView, { height: webviewHeight + 70 }]}
      source={{
        html: getFinalHtml(sourceHtml),
      }}
      allowsFullscreenVideo
      scalesPageToFit={false}
      contentMode="mobile"
      scrollEnabled={false}
      nestedScrollEnabled={false}
      textZoom={100}
      onLoad={() => setLoading(false)}
      onLoadEnd={() => setLoading(false)}
      onMessage={onProductDetailsWebViewMessage}
      injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      onShouldStartLoadWithRequest={(request) => {
        if (request.url !== 'about:blank') {
          console.log('link', request.url);
          if (request.url.includes('youtube')) return true;
          Linking.openURL(request.url);
          return false;
        }
        return true;
      }}
    />
  );
};

export default ContentWebView;

const styles = StyleSheet.create({
  webView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
});
