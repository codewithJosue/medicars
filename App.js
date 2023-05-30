import RootNavigations from "./src/navigations/RootNavigations";
import { Provider as PaperProvider } from "react-native-paper";

function App() {

  return (
    <PaperProvider>
      <RootNavigations />
    </PaperProvider>
  );
}

export default App;
