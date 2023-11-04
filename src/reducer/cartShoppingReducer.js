import {aceites, brands, customerVehicle} from '../data';
import {removeCartShopping, setCartShopping} from '../storage/cartShopping';

const findData = (data, selectionId) => {
  return data.find(d => d.key === selectionId).value;
};

const cartShoppingReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      return action.payload;
    case 'ADD':
      return [
        ...state,
        {
          vehicle_id: action.payload.selectedVehicle,
          vehicle: findData(customerVehicle, action.payload.selectedVehicle),
          brand_id: action.payload.selectedBrand,
          brand: findData(brands, action.payload.selectedBrand),
          oil_id: action.payload.selectedOil,
          oil: findData(aceites, action.payload.selectedOil),
          image: action.payload.image,
          detail: action.payload.detail,
        },
      ];
    case 'UPDATE':
      const data = state.map(info =>
        info.vehicle_id === action.payload.selectedVehicle
          ? {
              ...info,
              detail: info.detail.map(details => {
                return {
                  ...details,
                  cantidad: details.cantidad,
                  total: details.total,
                };
              }),
            }
          : {...info},
      );

      setCartShopping(data).then(r => console.log('DONE'));

      return data;

    case 'REMOVE_ID':
      const cartShoppingId = state.filter(
        x => x.vehicle_id !== action.payload.id,
      );

      setCartShopping(cartShoppingId).then(r => console.log('DONE'));

      return cartShoppingId;

    case 'REMOVE':
      removeCartShopping().then();
      return action.payload;
  }
};

export default cartShoppingReducer;
