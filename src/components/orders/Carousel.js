import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Platform, Dimensions
} from "react-native";
import { useState } from "react";
import { Card } from '@rneui/themed';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Screen } from "../index";

const screenWidth = Dimensions.get('window').width;
const Carousel = ({img, width=screenWidth, height=150}) => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={()=> setIsVisible(!isVisible)}>
          <View style={styles.containerImg}>
            <Card.Image
              style={{ width:'100%', height:height}}
              source={img}>
            </Card.Image>
          </View>

      </TouchableOpacity>

      <Modal visible={isVisible}
      animationType='slide' onRequestClose={()=> setIsVisible(!isVisible)}>
        <ImageZoom img={img} closeModal={() => setIsVisible(false)} />
      </Modal>
    </>
  )
}


const ImageZoom = ({ img, closeModal }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageZoom} source={img} />
      <View style={styles.back}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View style={[styles.btnClose, styles.menu]}>
            <AntDesign name="close" size={24} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageZoom: {
    width: 400,
    height: Platform.OS === 'ios' ? 500 : 400,
    top: 100,
  },
  back: {
    position: 'absolute',
    alignItems: 'center',
    marginLeft: 170,
    bottom: 100,
  },
  btnClose: {
    //position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
    marginTop:10,
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  containerImg: {
    margin: 10,
    padding: 5,
    backgroundColor: "white",
    borderStyle: "solid"
  },

});

