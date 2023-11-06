import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';
import {AppText} from './index';
import {useNavigation} from '@react-navigation/native';
import route from '../navigations/route';

const Card = ({title, subTitle, image}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(route.ORDER, {title, image})}
      style={[styles.card]}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{`Lps: ${subTitle}`}</AppText>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 3,
    marginTop: 5,
    margin: 5,
    flex: 1,
    marginVertical: '2%',
    marginBottom: 10,
    overflow: 'hidden',
    maxWidth: '50%',
    //OS
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0,
    shadowRadius: 5,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 5,
  },
});
