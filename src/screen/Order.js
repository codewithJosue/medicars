import {AddProduct} from '../components/orders/';
import {useRef} from 'react';
import {AppToast} from '../components';

const Order = ({route}) => {
  const toasRef = useRef();
  const toasRefError = useRef();
  return (
    <>
      <AddProduct
        order={route.params}
        toasRef={toasRef}
        toasRefError={toasRefError}
      />
      <AppToast ref={toasRef} />
      <AppToast ref={toasRefError} backgroundColor="red" />
    </>
  );
};

export default Order;
