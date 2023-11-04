import {Provider as PaperProvider} from 'react-native-paper';
import RootNavigations from './src/navigations/RootNavigations';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './src/config/theme';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <RootNavigations />
    </PaperProvider>
  );
}

export default App;
