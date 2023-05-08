import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet, Text } from "react-native";
import AvatarText from "../components/AvatarText";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DrawerContent = (props) => {

  const onchangeScreen = (screen) => {
    const {navigation} = props;
    navigation.navigate(screen);
  };


  return (
  <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>

        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15, bottom:5}}>
              {<AvatarText size={30} />}
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                }}>
                <Text style={styles.title}>Josue A. Flores </Text>
                {/*<Text style={styles.caption}>correo@gmail.com</Text>*/}
              </View>
            </View>
          </View>

          <DrawerItem
            label="Inicio"
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('home')}
          />

            <DrawerItem
              label="Adicionar Vehículos"
              icon={({color, size}) => (
                <Icon name="plus-circle" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('addVehicle')}
            />
            <DrawerItem
              label="Historial Mantenimientos"
              icon={({color, size}) => (
                <Icon name="history" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('profile')}
            />
            <DrawerItem
              label="Historial Compras"
              icon={({color, size}) => (
                <Icon name="money" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('setting')}
            />

            <DrawerItem
              label="Consultar Estado Orden"
              icon={({color, size}) => (
                <Icon name="check-circle" color={color} size={size} />
              )}
              onPress={() => onchangeScreen('support')}
            />
          <DrawerItem
            label="Ir al Carrito de compras"
            icon={({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('support')}
          />
          <DrawerItem
            label="Notificaciones"
            icon={({color, size}) => (
              <Icon name="bell-o" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('support')}
          />

          <DrawerItem
            label="Cambiar contraseña"
            icon={({color, size}) => (
              <Icon name="edit" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('support')}
          />

          <DrawerItem
            label="Salir"
            icon={({color, size}) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            )}
            onPress={() => onchangeScreen('support')}
          />

        </View>

    </DrawerContentScrollView>
  </View>
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
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
});
