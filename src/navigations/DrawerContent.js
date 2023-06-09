import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Caption, Drawer, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import AvatarText from '../components/AvatarText';
import Icon from 'react-native-vector-icons/FontAwesome';
import route from './route';

const DrawerContent = ({navigation, ...props}) => {
  const onchangeScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 10, bottom: 0}}>
              {<AvatarText size={30} />}
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                }}>
                <Title style={styles.title}>Josue A. Flores </Title>
                <Caption style={styles.caption}>correo@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Inicio"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              onPress={() => onchangeScreen(route.HOME)}
            />
            <DrawerItem
              label="Adicionar Vehículos"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="plus-circle" color={color} size={size} />
              )}
              onPress={() => onchangeScreen(route.ADD_VEHICLE)}
            />
            <DrawerItem
              label="Historial Mantenimientos"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="history" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('profile')}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Historial Compras"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="money" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('setting')}
            />

            <DrawerItem
              label="Consultar Estado Orden"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="check-circle" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('support')}
            />
            <DrawerItem
              label="Ir al Carrito de compras"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="shopping-cart" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('support')}
            />
            <DrawerItem
              label="Notificaciones"
              labelStyle={styles.labelItem}
              icon={({color, size}) => (
                <Icon name="bell-o" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('support')}
            />
          </Drawer.Section>

          <DrawerItem
            label="Cambiar contraseña"
            labelStyle={styles.labelItem}
            icon={({color, size}) => (
              <Icon name="edit" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('support')}
          />
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Cerrar Sesión"
          labelStyle={styles.labelItem}
          onPress={() => console.log('salir')}
          icon={({color, size}) => (
            <Icon name="sign-in" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  labelItem: {
    fontSize: 10,
  },
});
