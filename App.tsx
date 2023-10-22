import Navigation from '@/navigation';
import useUserGlobalStore from '@/store/useUserGlobalStore';
import theme, { Text } from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const { user, updateUser } = useUserGlobalStore()

  console.log("user", JSON.stringify(user, null, 2))

  /* useEffect(() => {
    updateUser({
      email: "lukas@gmail.com",
      name: "lukas"
    })
  
    return () => {
      
    }
  }, []) */
  

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      <Navigation />
      <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


