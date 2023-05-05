import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Details' onPress={()=>navigation.navigate('detail')} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


function App () {

  return (

    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="detail" component={DetailsScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
