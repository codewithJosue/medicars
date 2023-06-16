import {LocationShoppingCart} from '../../components/';

const CartShopping = props => {
  const {detail} = props.route.params;

  return <LocationShoppingCart detail={detail} />;
};

export default CartShopping;
