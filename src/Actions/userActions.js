// import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constant/UserConstants";
// import axios from 'axios'
// // LOGIN

// export const login = (phone, password) => async (dispatch) => {
//     try {
//         dispatch({type: USER_LOGIN_REQUEST});
//         const config = {
//             headers: {
//                 "Context-Type": "application/json"
//             }
//         }
//         const {data} = await axios.post('/api/user/login', 
//         {
//             phone, password
//         }, config);
//         dispatch({type: USER_LOGIN_SUCCESS, payload: data });

//         localStorage.setItem("userInfo", JSON.stringify(data));
//     }catch(error){
//         dispatch({
//             type: USER_LOGIN_FAIL, 
//             payload: 
//                 error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//         });
//     }
// };