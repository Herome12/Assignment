import {configureStore} from "@reduxjs/toolkit";


import { loadUser, registerUser } from "./reducer/UserReducer";






const store = configureStore({
    reducer:{
       
        
        register:registerUser,
        load:loadUser,
        
       
       
        
    }
},

)



export default store; 