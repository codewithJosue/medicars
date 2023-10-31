import {AppText, Screen} from '../../components';
import {StyleSheet, View} from 'react-native';
import AvatarText from '../../components/AvatarText';
import {Caption, Title} from 'react-native-paper';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.containerUser}>
        <View style={styles.detail}>
          <AvatarText size={30} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppText style={styles.title}>Josue Ariel Flores Matute</AppText>
            <Icon size={20} name="account-edit" />
          </View>

          <AppText style={styles.caption}>josueari20@gmail.com</AppText>
        </View>
      </View>
      <View style={styles.options}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.action}>
              <Icon size={17} name="lock-open-alert-outline" />
              <AppText style={styles.text}>Cambiar contraseña</AppText>
            </View>
            <Icon name="arrow-right" />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.action}>
              <Icon size={17} name="logout" />
              <AppText style={styles.text}>Cerrar</AppText>
            </View>
            <Icon name="arrow-right" />
          </View>
        </View>
      </View>
    </Screen>
  );
};
export default Account;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  options: {
    marginVertical: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 5,
    top: 2,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
