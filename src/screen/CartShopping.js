import LocationShoppingCart from '../components/shopping_cart/LocationShoppingCart';

const CartShopping = props => {
  const {detail} = props.route.params;

  return <LocationShoppingCart detail={detail} />;
};

export default CartShopping;
