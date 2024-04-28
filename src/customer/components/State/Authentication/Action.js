import { Axios } from "axios"
import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_FAILURE,ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,LOGOUT } from "./ActionType"
import { API_URL, api } from "../../config/api"
export const registerUse=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const{data}=await Axios.post('${API_URL}/auth/signup',reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("register success",data)

      
    } catch (error){
        dispatch({type:REGISTER_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const loginUse=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await Axios.post('${API_URL}/auth/sign-in',reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("login success",data)

      
    } catch (error){
        dispatch({type:LOGIN_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const getUser=({jwt,restaurantId})=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const{data}=await api.post('/auth/api/users/profile',{
            headers:{
                Authorization:'Bearer ${jwt}'
            }
        })
        
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("user profile",data)

      
    } catch (error){
        dispatch({type:GET_USER_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const addToFavorite=(jwt)=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
        const{data}=await api.put('/api/restaurants/${restaurantId}/add-favorite',{},{
            headers:{
                Authorization:'Bearer ${jwt}'
            }
        })
        
        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
        console.log("added to favorite",data)

      
    } catch (error){
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
        localStorage.clear();
        dispatch({type:LOGOUT})
        console.log("logout success")

      
    } catch (error){
        console.log("error",error)
    }
}