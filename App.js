import Screen from "./src/components/Screen";
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  return (
    <Screen>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={()=> console.log('onpress')}
      >
        Login with Facebook
      </Icon.Button>
    </Screen>
  )
}

export default App;
