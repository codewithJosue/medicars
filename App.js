import { Provider as PaperProvider } from "react-native-paper";
import RootNavigations from "./src/navigations/RootNavigations";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
  return (
    <PaperProvider>
      <RootNavigations />
    </PaperProvider>
  );
}

export default App;
