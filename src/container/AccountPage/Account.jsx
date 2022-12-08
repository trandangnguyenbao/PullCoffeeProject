import React from 'react'
import './account.css'
import UserIcon from '../../images/UserIcon.svg'
import {FaRegUserCircle} from 'react-icons/fa'
import {AiOutlineNotification} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineLink} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'
import {BsFillChatLeftFill} from 'react-icons/bs'
import User from '../../asset/fake-data/user'
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import formatProductPrice from '../../Helper'
const Account = () => {
    const history = useNavigate();
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // useEffect(() => {
    //     if (!userInfo) {
    //         history("/account/login")
    //     }
    // }, [history])

    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //       const fetchUser = async () => {
    //           const {data} = await axios.get('/api/user')
    //           setUser(data)
    //       }
    //       fetchUser();
    //   }, [])
  return (
    <div className="container container__accountpage col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="container__accountpage--navbar col-lg-3 col-md-4 col-sm-12 col-12 px-3">
            <ul className="container__accountpage--navbar">
                <li className="container__accountpage--navbar">
                    <img src= {UserIcon}  alt="" />
                    {
                             
                                <p className='account'>Tài khoản<b>  Nguyễn Bảo</b>
                                </p>
                        }
                </li>
                <hr />
                <Link to={'/accountInfo'}><li className="container__accountpage--navbar active">
                    <i><FaRegUserCircle /></i>
                    <p>Thông tin tài khoản</p>
                </li></Link>
                <Link to={'/account/order'}><li className="container__accountpage--navbar">
                    <i><svg viewBox="64 64 896 896" focusable="false" data-icon="reconciliation" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg></i>
                    <p>Quản lý đơn hàng</p>
                </li></Link>
                <Link to={'/account/address'}><li className="container__accountpage--navbar">
                    <i><svg viewBox="64 64 896 896" focusable="false" data-icon="compass" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 00-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 00-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"></path></svg></i>
                    <p>Địa chỉ giao hàng</p>
                </li></Link>
                <Link to={'/account/notifications'}><li className="container__accountpage--navbar">
                    <i><AiOutlineNotification /></i>
                    <p>Thông Báo</p>
                </li></Link>
            </ul>
        </div>
        <div className="container__accountpage--contain col-lg-9 col-md-8 col-sm-12 col-12">
            <h3>Thông tin tài khoản</h3>
            <div className="container__accountpage--contain--item">
                <form action="">
                    {
                        User.map((user) => {
                                return (
                                    <>
                                    <div className="contain--item">
                                        <div>
                                            <label htmlFor="">Số Điện Thoại:</label>
                                            <input type="text" name="phone" id="phone" value= {user.phone} />
                                        </div>
                                        <div>
                                            <label htmlFor="">Họ Và Tên:</label>
                                            <input type="text" name="username" id="username" value= {user.name} />
                                        </div>
                                    </div>
                                    <div className="contain--item">
                                        <div>
                                            <label htmlFor="">Ngày Sinh:</label>
                                            <input type="date" name="birthday" id="birthday" defaultValue = {user.birthday} />
                                        </div>
                                        <div>
                                            <label htmlFor="">Giới Tính:</label>
                                            <input type="text" disabled name="gender" id="gender" value= {user.gender} />
                                        </div>
                                    </div>
                                    <div className="contain--item">
                                        <div>
                                            <label htmlFor="">Địa Chỉ:</label>
                                            <input type="text" name="address" id="address" value = {user.address} />
                                        </div>
                                        <div>
                                            <label htmlFor="">Mật Khẩu:</label>
                                            <input type="password" name="password" id="password" value = {user.password} disabled />
                                        </div>
                                    </div>
                                    <div className='update'><button className='Update'>Cập Nhật Thông Tin</button></div>
                                    </>
                                )
                            
                        })
                    }
                </form>
            </div>
        </div>
        <div className="container-fluid container__icon">
            {/* <a className='hotline'><BsHeadphones /></a> */}
            <ul className="container__icon">
                <a href="" className="container__icon--item">
                    <li><AiOutlineFacebook /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><SiZalo /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><BsFillChatLeftFill /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><AiOutlineLink /></li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Account