import React from 'react'
import './accountdropdown.css'
import {Link, NavLink} from 'react-router-dom'
// import { accountDropdown } from '../data'
import {AiOutlineShoppingCart,AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'
import Carticon from '../images/Carticon.png'
import { useNavigate } from 'react-router-dom';
const AccountDropdown = () => {
  const history = useNavigate()
  return (
    <div className="container__accountdropdown">
        <Link to = '/cart'><div className='account--item'><i><AiOutlineShoppingCart /></i><p>Giỏ Hàng</p></div></Link>
        <Link to = '/account/order'><div className='account--item'><img src={Carticon} /><p>Đơn Hàng</p></div></Link>
        <Link to = '/accountInfo'><div className='account--item'><i><MdOutlineAccountCircle /></i><p>Tài Khoản</p></div></Link>
        <div className='account--item' onClick={() => {
          localStorage.removeItem("userInfo")
          history("/account/login")
          }}><i><AiOutlineLogout /></i><p>Đăng Xuất</p></div>
          </div>
  )
}

export default AccountDropdown