import {AddProduct} from '../components/orders/';
import {useRef} from 'react';
import {AppToast} from '../components';

const Order = ({route}) => {
  const toastSuccess = useRef();
  const toastError = useRef();

  return (
    <>
      <AddProduct
        order={route.params}
        toastSuccess={toastSuccess}
        toastError={toastError}
      />
      <AppToast ref={toastSuccess} />
      <AppToast ref={toastError} backgroundColor="red" />
    </>
  );
};

export default Order;
