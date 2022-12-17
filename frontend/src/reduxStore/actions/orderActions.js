import { backendUrl } from "../contants"

const ADDRESS_UPDATE = "ADDRESS_UPDATE"
const ITEMS_UPDATE=  "ITEMS_UPDATE"
const PLACED_ORDER = "PLACED_ORDER"
const FETCHED_ORDERS= "FETCHED_ORDERS"
const PLACING_ORDERS=  "PLACING_ORDES"
const ERROR_ORDERS = "ERROR_ORDER"
export function addressUpdate(data){
    return {
        type:ADDRESS_UPDATE,
        payload:data
    }
}

export function itemUpdate(data){
    return {
        type:ITEMS_UPDATE,
        payload:data
    }
}

export const placedOrder =(orders)=>async (dispatch)=>{
    try{
        dispatch({type:PLACING_ORDERS})
        const data = await (await fetch(`${backendUrl}/api/v1/order/create`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orders)
        })).json()
        console.log("dissecting")
        console.log(data.data)
        if(!data.success) return dispatch({type:ERROR_ORDERS})
        console.log(data.data)
        dispatch({type:PLACED_ORDER,payload:data.data})

    } catch(e){
        console.log(e)
    }
}

export function fetchOrders(data){
    return{
        type:FETCHED_ORDERS,
        payload:data
    }

}

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