import { StatusBar, Text, View } from 'react-native';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_700Bold });

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#202024',
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text style={{ fontSize: 40, fontFamily: 'Ubuntu_400Regular' }}>
          Olá Mundo !
        </Text>
      ) : (
        <View />
      )}
    </View>
  );
}
