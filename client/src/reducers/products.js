import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from '../actions/constants/products.constants';

const INITIAL_STATE = { fetching:false, data:[] };

export default (products = INITIAL_STATE, action) => {
   switch(action.type){
   	  case REQUEST_PRODUCTS:
        return Object.assign({}, products,{
          fetching:true,
          data:[]
        });
      case RECEIVE_PRODUCTS:
        return Object.assign({}, products,{
          fetching:false,
          data:action.payload
        });
   	  default:
         return products
   }
}
