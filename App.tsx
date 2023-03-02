import { StatusBar } from 'react-native';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { theme } from './src/theme';
import { Routes } from '@routes/index';
import { AuthProvider } from '@contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>{fontsLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </NativeBaseProvider>
  );
}
