import { actions } from "../constants/constants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actions.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case actions.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case actions.PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
