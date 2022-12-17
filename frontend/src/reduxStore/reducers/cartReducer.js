import { UPDATE_CART, DELETE_CART,DELETE_ITEM,REMOVE_CART } from "../actions/cartActions"


export const cartReducer = (state={cartItems:[]},action)=>{
    switch(action.type){

        case UPDATE_CART:
            console.log(state)
           const exist= state.cartItems.find(i=>i._id==action.payload._id)
           console.log(exist)
           if(exist) return {...state,
            cartItems:state.cartItems.map(item=>{if(item._id===action.payload._id){item.quantity+=1} return item})}
           
            return {
                cartItems:[...state.cartItems,action.payload]
            }
        case DELETE_CART:
            // const exist= state.cartItems.find(i=>i._id==action.payload._id)
            // console.log(exist)
            // if(exist) return {...state,
            //  cartItems:state.cartItems.map(item=>{if(item._id===action.payload._id){item.quantity+=1} return item})}
            return {
                ...state,
                cartItems:state.cartItems.map(item=>{if(item._id===action.payload._id){item.quantity-=1} return item})
            }
        case DELETE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(item=>item._id!=action.payload)
            }
        case REMOVE_CART:
            // console.log(updat)
            return{
                cartItems:[]
            }
        default:
            return state
    }
}
