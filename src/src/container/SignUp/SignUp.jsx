import React from 'react'
import './signup.css'
import {AiFillExclamationCircle, AiFillCheckCircle} from 'react-icons/ai'
import UserIcon from '../../images/UserIcon.svg'
import { useState } from 'react'
import isEmty from 'validator/lib/isEmpty'
// import { History, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", phone: "", password: "", confirmPassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    
    const postData = async (e) => {
        e.preventDefault();

        const {name, phone, password, confirmPassword} = user;
        const res = await fetch("/api/user/register", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: name, 
                phone: phone,
                password: password,
                confirmPassword: confirmPassword
            })
        });

        const data = await res.json();

        if (data.status === 400){
            window.alert("User already exists");
            console.log("User already exists");
        }
        else{
            window.alert("Register Successful")
            console.log("Register Successful");

            history("/account/login")
        }
    }
  return (
    <section id='signup'>
        <div className="container signup">
            <div className='container__signup'>
            <div className="container__signup--header">
                <img src={UserIcon} alt="" />
                <h4>Tài khoản của bạn</h4>
            </div>
            <div className="container__signup--contain">
                <form method='POST' action="" id='form-register'>
                    <div class="form-control">
                        <label >Tên khách hàng: </label>
                        <input type="text" placeholder="Tên" id="username" name='name' value={user.name} onChange = {handleInputs}/>
                    </div>
                    <div class="form-control">
                        <label >Số điện thoại: </label>
                        <input type="text" placeholder="Nhập số điện thoại" id="phone" name="phone" value={user.phone}onChange = {handleInputs}/>
                    </div>
                    <div class="form-control">
                        <label >Password: </label>
                        <input type="password" id="password" name ="password" value={user.password} onChange = {handleInputs}/>
                    </div>
                    <div class="form-control">
                        <label >Confirm Password: </label>
                        <input type="password" name="confirmPassword" id="confirmpassword" value={user.confirmPassword} onChange = {handleInputs}/>
                    </div>           
                        <div className='submit'><button type='submit' className='signupForm' onClick={postData}>Đăng Ký Tài Khoản</button></div>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}



export default SignUp