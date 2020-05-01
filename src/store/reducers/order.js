import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const INITIAL_STATE = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false,
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const purchaseBurgerSucces = (state, action) => {
  return updateObject(state.orders, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(action.payload),
  });
};

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    orders: action.payload.orders,
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSucces(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
