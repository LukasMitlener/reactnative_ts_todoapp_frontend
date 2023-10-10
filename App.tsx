import Button from '@/components/button';
import Navigation from '@/navigation';
import theme, { Text } from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
    
  );
}


