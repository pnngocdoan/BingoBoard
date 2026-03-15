import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay:           require('../assets/fonts/PlayfairDisplay.ttf'),
    'PlayfairDisplay-Italic':  require('../assets/fonts/PlayfairDisplay-Italic.ttf'),
    MontserratClassic:         require('../assets/fonts/MontserratClassic.ttf'),
    MontserratClassicRegular:  require('../assets/fonts/MontserratClassic-Regular.ttf'),
    MontserratClassicSemiBold: require('../assets/fonts/MontserratClassic-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
