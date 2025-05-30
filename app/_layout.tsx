import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { RegistrationProvider } from '@/contexts/RegistrationContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RegistrationProvider>
        <Stack>
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="setPin" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
          <Stack.Screen name="confirmPin" options={{ headerShadowVisible: false, headerTitle: '', animation: 'fade_from_bottom' }} />
          <Stack.Screen name="pushNotification" options={{ headerShadowVisible: false, headerTitle: '', animation: 'fade_from_bottom' }} />
          <Stack.Screen name="addPhone" options={{ headerShadowVisible: false, headerTitle: '', animation: 'fade_from_bottom' }} />
          <Stack.Screen name="code" options={{ headerShadowVisible: false, headerTitle: '', animation: 'fade_from_bottom' }} />
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </RegistrationProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
