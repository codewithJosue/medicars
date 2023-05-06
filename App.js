import RootNavigations from "./src/navigations/RootNavigations";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App () {

  return (
    <SafeAreaProvider>
      <RootNavigations />
    </SafeAreaProvider>
  );
}

export default App;
