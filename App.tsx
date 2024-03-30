import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';
import Loading from './src/components/Loading';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import AppProvider from './src/context';

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
        { fontsLoaded ?  <Routes/> : <Loading/>}      
      </ThemeProvider>   
    </AppProvider>
  );
}

