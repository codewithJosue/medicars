import {LocationShoppingCart} from '../../components/';

const LocationShopping = props => {
  const {detail} = props.route.params;

  return <LocationShoppingCart detail={detail} />;
};

export default LocationShopping;
