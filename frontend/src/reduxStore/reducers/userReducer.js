import { FETCH_USER, LOGIN_USER,LOGOUT_USER,ERROR_USER, fetchlocalUser} from "../actions/userActions"


const userInfo = fetchlocalUser()
const initialState={
    loading:false,
    error:false,
    user:userInfo,
    isAuthenticated: userInfo?.hasOwnProperty('_id')?true :false
}


export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER:
            return {
                ...state,
                loading:true,
                error:false,
                user:null,
                isAuthenticated:false
            }
        case LOGIN_USER:
            return {
                ...state,
                loading:true,
                error:false,
                user:{...action.payload},
                isAuthenticated:true
            }
        case ERROR_USER:
            return {
                ...state,
                loading:false,
                error:true,
                user:null,
                isAuthenticated:false
            }
        case LOGOUT_USER:
            return {
                ...state,
                loading:false,
                error:false,
                user:null,
                isAuthenticated:false
            }
        default:
            return state
    }
}


