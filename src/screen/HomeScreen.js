import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Products, Services} from './Home/index';
import colors from '../config/colors';

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
      indicatorStyle={{backgroundColor: colors.medium}}
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
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeScreen;
