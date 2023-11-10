import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Products, Services} from './Home/index';
import colors from '../config/colors';
import {Screen} from '../components';
import {requestLocationPermission} from '../helpers/permissions';

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'services', title: 'Servicios'},
    {key: 'products', title: 'Productos'},
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    services: Services,
    products: Products,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 24,
      }}
      style={{
        backgroundColor: colors.white,
        shadowColor: theme.colors.text,
        height: 30,
        marginBottom: 10,
      }}
      labelStyle={styles.label}
      activeColor={colors.secondary}
      inactiveColor={colors.primary}
    />
  );

  const currentLocation = async () => {
    const granted = await requestLocationPermission();
  };

  console.log(currentLocation);

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  label: {
    color: colors.primary,
    fontSize: 10,
    bottom: 5,
    fontWeight: 'bold',
  },
});
