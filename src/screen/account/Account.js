import {AppText, Screen} from '../../components';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AvatarText from '../../components/AvatarText';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import route from '../../navigations/route';

const Account = () => {
  const navigation = useNavigation();

  return (
    <Screen style={styles.container}>
      <View style={styles.containerUser}>
        <View style={styles.detail}>
          <AvatarText size={30} />
          <View>
            <AppText style={styles.title}> Josue Ariel Flores</AppText>
            <Icon
              size={20}
              style={styles.iconEdit}
              name="account-edit"
              onPress={() => console.log('edit')}
            />
          </View>
          <AppText style={styles.caption}>josueari20@gmail.com</AppText>
        </View>
      </View>
      <View style={styles.options}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate(route.CHANGE_PASSWORD)}
              style={styles.action}>
              <Icon
                color={colors.secondary}
                size={17}
                name="lock-open-alert-outline"
              />
              <AppText style={styles.text}>Cambiar contraseña</AppText>
            </TouchableOpacity>
            <Icon name="arrow-right" style={styles.icon} />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.action}>
              <Icon color={colors.secondary} size={17} name="logout" />
              <AppText style={styles.text}>Cerrar</AppText>
            </View>
            <Icon name="arrow-right" style={styles.icon} />
          </View>
        </View>
      </View>
    </Screen>
  );
};
export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  iconEdit: {
    position: 'absolute',
    right: -20,
  },
  icon: {
    right: 10,
  },
  options: {
    marginVertical: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 2,
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  containerUser: {
    elevation: 2,
    backgroundColor: colors.white,
    borderRadius: 14,
    marginBottom: 10,
    top: 5,
  },
  detail: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  caption: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginLeft: 5,
    top: 2,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
