import { StatusBar } from 'react-native';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { theme } from './src/theme';
import { SignIn } from '@screens/Signin';
import { SignUp } from '@screens/Signup';

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
