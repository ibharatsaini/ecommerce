import { NEW_PRODUCT_LOADING ,NEW_PRODUCT_ERROR,NEW_PRODUCT_UPDATE } from "../actions/productActions"


const product = {
    loading:false,
    error:false,
    product:null
}



export const productReducer = (state=product,action)=>{
        switch(action.type){
            case 'FETCH_PRODUCT_LOADING':
                return {
                    ...state,
                    loading:true,
                    error:false,
                    product:null
                }
            case 'FETCH_PRODUCT_SUCCESS':
                return {
                    ...state,
                    loading:false,
                    error:false,
                    product:[...action.payload] 
                }
            case 'FETCH_PRODUCT_FAILURE':
                return {
                    ...state,
                    loading:false,
                    error:true,
                    product:null
                }
            default:
                return state
        }
}


const newProduct = {
    loading:false,
    error:false,
    product:null
}


export const newProductReducer = (state=newProduct,action)=>{
        switch(action.type){
            case NEW_PRODUCT_LOADING:
                return {
                    ...state,
                    loading:true,
                    error:false,
                    product:null
                }
            case NEW_PRODUCT_UPDATE:
                return {
                    ...state,
                    loading:false,
                    error:false,
                    product:{...action.payload} 
                }
            case NEW_PRODUCT_ERROR:
                return {
                    ...state,
                    loading:false,
                    error:true,
                    product:null
                }
            default:
                return state
        }
}