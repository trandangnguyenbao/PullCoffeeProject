import { combineReducers, applyMiddleware  } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { productListReducer } from "./Reducers/ProductsReducer";
import rootReducer from './reducer'
import { userLoginReducer, userRegisterReducer } from "../Reducers/userReducers";
const reducer = combineReducers({
    // productList: productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
});

const initialState = {};

const middelware = [thunk];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    initialState
  })

export default store;