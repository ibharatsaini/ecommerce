export const UPDATE_CART = "UPDATE_CART"
export const DELETE_CART = "DELETE_CART"
export const DELETE_ITEM = "DELETE_ITEM"
export const REMOVE_CART = "REMOVE_CART"

export const updateCart = (data)=>{
    console.log(data)
    if(!("quantity" in data)) data.quantity=1
    console.log(data)
    return {
        type: UPDATE_CART,
        payload: data
    }
}
export const deleteCart = (data)=>{
    return {
        type:DELETE_CART,
        payload:data
    }
}
// export const addressUpdateCart = (data)=>{
//     return {
//         type:ADDRESS_UPDATE_CART,
//         payload:data
//     }
// }
export const  deleteItem = (id)=>{
    return{
        type:DELETE_ITEM,
        payload:id
    }
}
export const removeCart =()=>{
    return{
        type:REMOVE_CART
    }
}

