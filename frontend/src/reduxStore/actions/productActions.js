
import axios from "axios"
import {applyMiddleware}from 'redux'
import {createStore} from 'redux'
import thunk from 'redux-thunk'
import { backendUrl } from "../contants"

const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS"
const FETCH_PRODUCT_LOADING = "FETCH_PRODUCT_LOADING"
const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE"

export const NEW_PRODUCT_UPDATE = "NEW_PRODUCT_UPDATE"
export const NEW_PRODUCT_LOADING ="NEW_PRODUCT_LOADING"
export const NEW_PRODUCT_ERROR = "NEW_PRODUCT_ERROR"


function productSuccess(data){
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data
    }
}

function productLoading(){
    return {
        type: FETCH_PRODUCT_LOADING,
    }
}

function productFailure(){
    return {
        type: FETCH_PRODUCT_FAILURE
    }
}




function newproductUpdate(data){
    return {
        type: NEW_PRODUCT_UPDATE,
        payload:data
    }
}

function newproductLoading(){
    return {
        type: NEW_PRODUCT_LOADING,
    }
}

function newProductError(){
    return {
        type: NEW_PRODUCT_ERROR
    }
}


export const getAllProduct = (keyword,filters,page=1)=>(dispatch)=>{
        dispatch(productLoading())
        let query=`&page=${page}`
        if(filters.cod || filters.min>0 || filters.max>=filters.min){
            query+= filters.cod?`&cod=${filters.cod}` :""
            query+= filters.min>0? `&min=${filters.min}`:""
            query+= filters.max>0? `&max=${filters.max}`:""
        }
        const url =`${backendUrl}/api/v1/product/all?keyword=${keyword}${query}`
        axios.get(url)
              .then(data=>{dispatch(productSuccess(data.data.data))})
            //   .then(data=>dispatch(productSuccess(data.data)))
              .catch(e=>dispatch(productFailure()))
}


export const getProduct = (id)=> (dispatch)=>{
      console.log('get product',id)
      dispatch(newproductLoading())
      const url = `${backendUrl}/api/v1/product/${id}`
      axios.get(url)
            .then(data=>{dispatch(newproductUpdate(data.data.data))})
            .catch(e=>{console.log(e);dispatch(newProductError())})
}


// export const productReducer = (state={},action) =>{
//     switch(action.type){
//         case FETCH_PRODUCT_SUCCEESS:
//             return {
//                 ...state,
//                 ...action.payload
//             }
//         default:
//           return  state
//     }
// }




