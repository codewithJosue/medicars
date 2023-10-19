import {FlatList, StyleSheet} from 'react-native';
import colors from '../../config/colors';
import {Screen} from '../../components';
import Card from '../../components/Card';

import {services} from '../../data/services';

const Services = () => {
  return (
    <FlatList
      style={styles.screen}
      data={services}
      keyExtractor={listings => listings.id.toString()}
      renderItem={({item}) => (
        <Card title={item.title} subTitle={item.price} image={item.image} />
      )}
      numColumns={2}
      columnWrapperStyle={styles.column}
    />
  );
};

export default Services;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  column: {
    //flexShrink: 1,
    justifyContent: 'space-between',
  },
});
