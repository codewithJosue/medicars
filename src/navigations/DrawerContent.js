import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Caption, Drawer, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import AvatarText from '../components/account/AvatarText';
import route from './route';
import {useContext, useState} from 'react';
import AuthLoginContext from '../contexts/authLoginContext';
import AppIcon from '../components/shopping_cart/AppIcon';
import AppDialog from '../components/notify/AppDialog';

const DrawerContent = ({navigation, ...props}) => {
  const {signOut} = useContext(AuthLoginContext);
  const [isVisible, setIsVisible] = useState(false);
  const [onPress, setOnPress] = useState(null);

  const onchangeScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <AppDialog
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onPress={onPress}
        button={false}
        title="¡Proximamente!"
        message="Una nueva caracteristica muy pronto"
        color="info"
      />
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
              icon={() => <AppIcon name="home-variant-outline" />}
              onPress={() => onchangeScreen(route.HOME)}
            />
            <DrawerItem
              label="Adicionar Vehículos"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="car-2-plus" />}
              onPress={() => onchangeScreen(route.VEHICLE)}
            />
            <DrawerItem
              label="Historial Mantenimientos"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="history" />}
              //onPress={() => onchangeScreen('profile')}
              onPress={() => {
                setIsVisible(!isVisible);
                setOnPress(() => () => {});
              }}
            />
          </Drawer.Section>
          <Drawer.Section showDivider={false}>
            <DrawerItem
              label="Historial Compras"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="shopping-outline" />}
              //onPress={() => onchangeScreen('setting')}
              onPress={() => {
                setIsVisible(!isVisible);
                setOnPress(() => () => {});
              }}
            />

            <DrawerItem
              label="Consultar Estado Orden"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="order-bool-descending" />}
              //onPress={() => onchangeScreen('support')}
              onPress={() => {
                setIsVisible(!isVisible);
                setOnPress(() => () => {});
              }}
            />
            <DrawerItem
              label="Ir al Carrito de compras"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="cart-outline" />}
              onPress={() => onchangeScreen('cart_detail_shopping')}
            />
            <DrawerItem
              label="Notificaciones"
              labelStyle={styles.labelItem}
              icon={() => <AppIcon name="bell-ring-outline" />}
              //onPress={() => onchangeScreen('support')}
              onPress={() => {
                setIsVisible(!isVisible);
                setOnPress(() => () => {});
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section showDivider={false} style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Cerrar Sesión"
          labelStyle={styles.labelItem}
          onPress={() => signOut()}
          icon={() => <AppIcon name="logout" />}
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
    fontSize: 14,
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
    fontSize: 13,
    color: '#020024',
    fontWeight: 'bold',
  },
});
