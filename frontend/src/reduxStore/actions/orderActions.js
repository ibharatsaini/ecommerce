
export const ADDRESS_UPDATE = "ADDRESS_UPDATE"
export const ITEMS_UPDATE=  "ITEMS_UPDATE"
export const PLACED_ORDER = "PLACED_ORDER"
export const FETCHED_ORDERS= "FETCHED_ORDERS"
export const PLACING_ORDERS=  "PLACING_ORDES"
export const ERROR_ORDERS = "ERROR_ORDER"

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
        console.log(orders)
        dispatch({type:PLACING_ORDERS})
        const data = await (await fetch(`/api/v1/order/create`,{
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
