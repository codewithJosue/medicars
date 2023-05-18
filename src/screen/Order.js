import { AddProduct } from "../components/orders/";


const Order = ({ route }) => {
  return <AddProduct order={route.params} />;
};

export default Order;
