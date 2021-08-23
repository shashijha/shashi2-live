// import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";
const INITIAL_STATE = {
  //  collections: SHOP_DATA,
  collections: null,
  isFatching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFatching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFatching: true,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFatching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
