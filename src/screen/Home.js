
import Card from "../components/Card";
import { ScrollView, View } from "react-native";

const image = require('../assets/Aceite-1.jpg');
const image2 = require('../assets/PZ-3.jpeg');
const Home = () => {


  return (
    <>
    <ScrollView>
      <View style={{flexDirection:"row"}}>
      <Card title='Aceite' image={image} subTitle='aceite de automovil' />
      <Card title='Aceite' image={image} subTitle='aceite de automovil' />
      </View>
      <View style={{flexDirection:"row"}}>
      <Card title='Aceite' image={image2} subTitle='aceite de automovil' />
      <Card title='Aceite' image={image2} subTitle='aceite de automovil' />
      </View>
    </ScrollView>
    </>
  )
}

export default Home;
