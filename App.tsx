import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Groups from './src/screens/Groups';

import theme from './src/theme';
import Loading from './src/components/Loading';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import AppProvider from './src/context';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <AppProvider>         
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='light-content'
          translucent
          />                  
        <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600, paddingTop: 10}}>
          { fontsLoaded ?  <Routes/> : <Loading/>}
        </SafeAreaView>
      </ThemeProvider>   
    </AppProvider>
  );
}

