import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Caption, Drawer, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import AvatarText from '../components/AvatarText';
import Icon from 'react-native-vector-icons/FontAwesome';
import route from './route';
import iconSize from '../config/iconSize';
import colors from '../config/colors';

const DrawerContent = ({navigation, ...props}) => {
  const onchangeScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.userInfoSection}>
            {<AvatarText size={30} />}
            <View style={styles.userInfoSectionDetails}>
              <Title style={styles.title}>Josue A. Flores </Title>
              <Caption style={styles.caption}>correo@gmail.com</Caption>
            </View>
          </View>

          <Drawer.Section showDivider={false}>
            <DrawerItem
              label="Inicio"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="home"
                  color={colors.primary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen(route.HOME)}
            />
            <DrawerItem
              label="Adicionar Vehículos"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="plus-circle"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen(route.ADD_VEHICLE)}
            />
            <DrawerItem
              label="Historial Mantenimientos"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="history"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen('profile')}
            />
          </Drawer.Section>
          <Drawer.Section showDivider={false}>
            <DrawerItem
              label="Historial Compras"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="money"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen('setting')}
            />

            <DrawerItem
              label="Consultar Estado Orden"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="check-circle"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen('support')}
            />
            <DrawerItem
              label="Ir al Carrito de compras"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="shopping-cart"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen('support')}
            />
            <DrawerItem
              label="Notificaciones"
              labelStyle={styles.labelItem}
              icon={() => (
                <Icon
                  name="bell"
                  color={colors.secondary}
                  size={iconSize.small}
                />
              )}
              onPress={() => onchangeScreen('support')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section showDivider={false} style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Cerrar Sesión"
          labelStyle={styles.labelItem}
          onPress={() => console.log('logout')}
          icon={() => (
            <Icon name="sign-in" color={colors.danger} size={iconSize.small} />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    marginLeft: 10,
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
  },
  userInfoSectionDetails: {
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 10,
    lineHeight: 10,
  },

  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  labelItem: {
    fontSize: 10,
  },
});
