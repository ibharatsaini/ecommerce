import {ADDRESS_UPDATE ,ITEMS_UPDATE , FETCHED_ORDERS , PLACED_ORDER 
         , PLACING_ORDERS ,ERROR_ORDERS} from '../actions/orderActions'

export function orderReducer (state={},action){
    switch(action.type){
         case ADDRESS_UPDATE:
         case ITEMS_UPDATE:
             return {
                 ...state,
                     order:{...state.order,...action.payload}
                 }
             
         // case ITEMS_UPDATE:
         //     return{
         //         ...state,
         //         order:{...state.order}
         //     }
         case FETCHED_ORDERS:
             return{
                 ...state,
                 ...action.payload
             }
         case PLACED_ORDER:
             return {
                 ...state,
                 loading:false,
                 error:false,
                 order:action.payload

             }
         case PLACING_ORDERS:
             console.log(action.payload)
             return{
                 ...state,
                 loading:true,
                 error:false,
                 order:{}
             }
         case ERROR_ORDERS:
             return{
                 ...state,
                 loading:false,
                 error:true,
                 order:{}
             }
         default:
             return state

    }

}