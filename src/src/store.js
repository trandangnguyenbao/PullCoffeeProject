// import { legacy_createStore as createStore} from 'redux'
// import { combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import { userLoginReducer } from './Reducers/userReducers'
// import { productListReducer } from './Reducers/ProductReducer'

// const reducer = combineReducers({
//     userLogin: userLoginReducer,
//     productList: productListReducer
// })

// const userInfoFromLocalStorage = localStorage.getItem('userInfo')
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : null;

// const initialState = {
//     userLogin: {
//         userInfo: userInfoFromLocalStorage
//     },
// }

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
//   );
  
// export default store;