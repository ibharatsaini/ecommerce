import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "../reducers/cartReducer"
import { productReducer } from "../reducers/productReducer"
import {orderReducer} from "./orderActions"
import { userReducer } from "./userActions"
import { newProductReducer } from "../reducers/productReducer"

const reducer = combineReducers({
    product: productReducer,
    newProduct:newProductReducer,
    cartItems: cartReducer,
    orderItems:orderReducer,
    user:userReducer
})









export const store = createStore(reducer,applyMiddleware(thunk))
