import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'src/styles/ThemeProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'src/styles/theme';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import VisualFeedbackComponent from 'src/hooks/VisualFeedback/VisualFeedbackComponent';
import SplashScreen from 'react-native-splash-screen';
import RNBootSplash from 'react-native-bootsplash';
import { store, persistor } from './src/store/store';
import AppNavigation from './src/navigation/AppNavigation';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={styles.toastSuccess}
      text1Style={styles.toastTextOne}
      text2Style={styles.toastTextTwo}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
      text2NumberOfLines={3}
      text1Style={styles.toastTextOne}
      text2Style={styles.toastTextTwo}
      style={styles.toastError}
    />
  ),
};

function AppWrapper() {
  useEffect(() => {
    setTimeout(() => {
      Platform.OS === 'ios' ? RNBootSplash.hide({ fade: true }) : SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toast config={toastConfig} visibilityTime={1500} />
      </PersistGate>
    </Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <VisualFeedbackComponent>
          <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
          <SafeAreaView style={styles.safeArea} edges={['top']}>
            <AppNavigation />
          </SafeAreaView>
        </VisualFeedbackComponent>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.white },
  toastSuccess: {
    width: '80%',
    borderLeftColor: theme.colors.primary,
    height: 60,
  },
  toastTextOne: {
    flexWrap: 'wrap',
    ...theme.textVariants.body12,
  },
  toastTextTwo: {
    height: '100%',
    ...theme.textVariants.body12,
  },
  toastError: {
    width: '80%',
    borderLeftColor: theme.colors.red,
    height: 60,
  },
});

export default AppWrapper;
