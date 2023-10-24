import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
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
        <AppText style={styles.subTitle}>`Lps: ${subTitle}`</AppText>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 1,
    marginTop: 10,
    overflow: 'hidden',
    height: 100,
    width: '48%',
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 50,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 8,
    fontWeight: 'bold',
  },
  title: {
    color: colors.primary,
    fontSize: 9,
    marginBottom: 5,
  },
});
