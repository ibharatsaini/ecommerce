import { backendUrl } from "../contants"

const FETCH_USER = "FETCH_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const ERROR_USER = 'ERROR_USER'
const SUCCESS_USER = 'SUCCESS_USER'
export const loginUser =(creds) => async(dispatch)=>{
    try{
        dispatch(fetchUser())
        console.log(creds)

        const  data = await( await fetch(`${backendUrl}/api/v1/user/login`,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(creds)
        })).json()
        if(!data.success) return dispatch({type:ERROR_USER})
        dispatch({type:LOGIN_USER,payload:data.data})

    }catch (e){
        console.log(e)
    }
    
}

export const logoutUser = ()=>async(dispatch)=>{
    try {
        dispatch(fetchUser())
        (await fetch(`${backendUrl}/api/v1/user/logout`))
        // if(!(data.success)) return {type:LOGOUT_USER ,}
        return {
            type: LOGOUT_USER,
        }
    }catch (e){
        console.log(e)
    }
    
}

export function fetchUser(){
    return {
        type:FETCH_USER
    }
}

export const userReducer = (state={user:{},loading:false,error:false},action)=>{
    switch(action.type){
        case FETCH_USER:
            return{
                ...state,
                loading: true,
                isAuthenticated:false,
                user: {},
                error:false
            }
        case LOGIN_USER:
            console.log('loginuser')
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                user: action.payload,
                error:false
            }
        case LOGOUT_USER:
            return {
                loading:false,
                error:false,
                isAuthenticated:false,
                user:{}
            }
        case FETCH_USER:
            return{
                ...state,
                error: action.payload,
                isAuthenticated:false,
                user:{},
                loading: false
            }
        default:
            return state
    }
         

}