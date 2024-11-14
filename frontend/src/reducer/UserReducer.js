
import { createReducer } from "@reduxjs/toolkit";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
 
} from "../action/UserAction";

const initalValue = {
  LoginData: [],
};



//register user
const registerInitial = {
  registerData: [],
};

export const registerUser = createReducer(registerInitial, (builder) => {
  builder.addCase(REGISTER_USER_REQUEST, (state, action) => {
    return {
      loading: true,
      isAuthenticated: false,
    };
  });
  builder.addCase(REGISTER_USER_SUCCESS, (state, action) => {
    return {
      ...state,
      loading: false,
      isAuthenticated: true,
      registerUser: action.payload,
    };
  });
  builder.addCase(REGISTER_USER_FAIL, (state, action) => {
    return {
      loading: false,
      message: action.payload,
    };
  });
});

//load user

export const loadUser = createReducer(initalValue, (builder) => {
  builder.addCase(LOAD_USER_REQUEST, (state, action) => {
    return {
      loading: true,
      isAuthenticated: false,
    };
  });
 

  

  builder.addCase(LOAD_USER_SUCCESS, (state, action) => {
    return {
      loading: false,
      isAuthenticated: true,
      user: action.payload,
    };
  });

  builder.addCase(LOAD_USER_FAIL, (state, action) => {
    return {
      loading: true,
      error: action.payload,
    };
  });
});

