import React from 'react'
import '../SignUp/signup.css'
import {AiFillExclamationCircle, AiFillCheckCircle} from 'react-icons/ai'
import UserIcon from '../../images/UserIcon.svg'
import { useState } from 'react'
import isEmty from 'validator/lib/isEmpty'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
// import {useSelector, useDispatch} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../Actions/userActions'
import Message from '../../LoadingError/Error'
import Loading from '../../LoadingError/Loading'
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
    const history = useNavigate();

    const [phone, setPhone] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history("/")
        }
    }, [history])
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            setLoading(true)

            const { data } = await axios.post('/api/user/login', {
                phone, password
            }, config);
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            history("/")
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
  return (
    <section id='signup'>
        <div className="container login">
            <div className='container__signup'>
            <div className="container__signup--header">
                <img src={UserIcon} alt="" />
                <h4>Đăng Nhập Tài Khoản</h4>
            </div>
            <div className="container__signup--contain">
                {error && <Message variant='danger'>{error}</Message>}
                <form action="" id='form' onSubmit={submitHandler}>
                    <div class="form-control">
                        <label >Số điện thoại: </label>
                        <input type="text" placeholder="Nhập số điện thoại" id="phone"
                        value={phone} onChange = {(e) => setPhone(e.target.value)} />
                        {/* <small>{validationMsg.phone}</small> */}
                    </div>
                    <div class="form-control">
                        <label >Password: </label>
                        <input type="password" name="" id="password" 
                        value={password} onChange = {(e) => setPassWord(e.target.value)}/>
                        {/* <small>{validationMsg.password}</small> */}
                    </div>   
                    <div className="loginFrom">
                        <div className="loginForm--duytri">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Duy trì đăng nhập</label>
                        </div>
                        <a href="">Quên mật khẩu</a>
                    </div>       
                        <div className='loginsubmit'><button type='submit' className='loginForm' >Đăng Nhập Tài Khoản</button></div>
                    <span>Bạn chưa có tài khoản? <Link to = '/account/Sign-up'>Đăng Ký</Link> </span>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Login