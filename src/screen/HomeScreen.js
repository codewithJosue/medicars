import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Products, Services} from './Home/index';
import colors from '../config/colors';
import {Screen} from '../components';

const initialLayout = {width: Dimensions.get('window').width};

const HomeScreen = () => {
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
      indicatorStyle={{backgroundColor: colors.primary}}
      style={{
        backgroundColor: colors.white,
        shadowColor: theme.colors.text,
        height: 20,
      }}
      labelStyle={{color: colors.primary, fontSize: 8, bottom: 15}}
      //pressColor={rippleColor}
      activeColor={colors.black}
      inactiveColor={colors.black}
    />
  );

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
