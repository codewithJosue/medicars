import { Provider as PaperProvider } from "react-native-paper";
import RootNavigations from "./src/navigations/RootNavigations";

function App() {
  return (
    <PaperProvider>
      <RootNavigations />
    </PaperProvider>
  );
}

export default App;
