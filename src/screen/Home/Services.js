import {FlatList} from 'react-native';
import Card from '../../components/Card';

import {services} from '../../data/services';

const Services = () => {
  return (
    <>
      <FlatList
        horizontal={false}
        data={services}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({item}) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
        numColumns={2}
      />
    </>
  );
};

export default Services;
