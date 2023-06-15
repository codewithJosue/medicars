import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import StackNavigationLogin from './StackNavigationLogin';

const RootNavigations = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default RootNavigations;
