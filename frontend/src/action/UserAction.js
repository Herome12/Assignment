import {createAction} from "@reduxjs/toolkit"
import axios from "axios";




// REGISTER USER

export const REGISTER_USER_REQUEST =createAction ( "REGISTER_USER_REQUEST");
export const REGISTER_USER_SUCCESS = createAction("REGISTER_USER_SUCCESS");
export const REGISTER_USER_FAIL =createAction ("REGISTER_USER_FAIL");

//LOAD USER
export const LOAD_USER_REQUEST =createAction ( "LOAD_USER_REQUEST");
export const LOAD_USER_SUCCESS = createAction("LOAD_USER_SUCCESS");
export const LOAD_USER_FAIL =createAction ("LOAD_USER_FAIL");







// register user

export const register = (userData)=> async(dispatch)=>{
  try {
     dispatch({
        type:REGISTER_USER_REQUEST
     })
     const config = {headers:{"Content-Type":"multipart/form-data"}};
     const {data} = await axios.post(`/api/v1/reading`,userData,config)
     console.log(data);
     dispatch({
        type:REGISTER_USER_SUCCESS,
        payload:data,
     })


  } catch (error) {
    dispatch({
        type:REGISTER_USER_FAIL,
        payload:error.message
    })
    
  }
}
//load user
export const load = ()=> async(dispatch)=>{
    
    try {
        dispatch({
            type:LOAD_USER_REQUEST
        })

    const config = {headers:{"Content-Type":"application/json"}};
    
    const {data} = await axios.get("/api/v1/getReading",config)

    dispatch({
        type:LOAD_USER_SUCCESS,
        payload:data
    })

    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.message
        })
    }
}



