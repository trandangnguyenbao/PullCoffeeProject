import React, { useState } from 'react'
import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { links } from '../data'
import Logo from '../images/logo1.png'
import { icons } from 'react-icons/lib'
import {AiOutlineCaretDown} from 'react-icons/ai'
import { menuItem } from '../data'
import {MdArrowDropDown} from 'react-icons/md'
import Dropdown from './Dropdown'
import StoryDropdown from './StoryDropDown'
import AccountDropdown from './AccountDropdown'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { createContext } from 'react'
import {AiOutlineShoppingCart,AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'
import Carticon from '../images/Carticon.png'

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [storydropdown, setStoryDropdown] = useState(false);
    const [accountdropdown, setAccountDropdown] = useState(false);
    const [isNavShowing,setIsNavShowing] = useState(false);
    const history = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (userInfo) {
            // history("/account/login")
        }
    }, [history])


    // const userInfo = useSelector(state => state.userInfo);
    // const {userLogin} = userInfo;
    // const dispatch = useDispatch()

  return (
    <nav>
        <div className="container nav__container"  >
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                }
            </button>
            <Link className='logo' to = '/' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="" />
            </Link>
            <ul className={`nav__link ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map((item,index) => {
                        if(item.name === 'Menu' ){
                            return (
                                <li key = {index} onClick = {() => setIsNavShowing (prev => !prev)} onMouseEnter = {() => setDropdown(true)} onMouseLeave = {() => setDropdown(false)}>
                                    <NavLink to = {item.path} className = {`has-child ${active == item && 'active'}`} onClick= {() => setActive(item)}>{item.name}<MdArrowDropDown /></NavLink>
                                    { dropdown && <Dropdown /> }
                                </li>
                            )
                        }
                        else if(item.name === 'Chuyện nhà'){
                            return (
                                <li key = {index} onClick = {() => setIsNavShowing (prev => !prev)} onMouseEnter = {() => setStoryDropdown(true)} onMouseLeave = {() => setStoryDropdown(false)} className = "">
                                    <NavLink to = {item.path} className = {`has-child ${active == item && 'active'}`} onClick= {() => setActive(item)}>{item.name}<MdArrowDropDown /></NavLink>
                                    { storydropdown && <StoryDropdown /> }
                                </li>
                            )
                        }
                        // else if(item.name === 'Nguyễn Bảo'){
                        //     return (
                        //         <li key = {index} onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} className = "" onClick = {() => setIsNavShowing (prev => !prev)}>
                        //             <NavLink to = {item.path} className = {`has-child ${active == item && 'active'}`} onClick= {() => setActive(item)}>{item.name}</NavLink>
                        //             { accountdropdown && <AccountDropdown /> }
                        //         </li>
                        //     )
                        // }
                        return (
                            <>
                                <li className='icon' onClick={() => setIsNavShowing(prev => !prev)}><MdOutlineClose/></li>
                                <li key = {index} className = "">
                                    <NavLink to = {item.path}
                                    onClick = {() => setIsNavShowing (prev => !prev)}>{item.name}</NavLink>
                                </li>
                            </>    
                        )
                    })
                }
                {/* <li className="nav__link"  onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} onClick = {() => setIsNavShowing (prev => !prev)}>
                                    <Link to={'/account/login'} className='has-child'>Đăng Nhập
                                        { accountdropdown && <AccountDropdown /> }
                                    </Link>
                                </li> */}
                    
                            <li className="nav__link"  onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} onClick = {() => setIsNavShowing (prev => !prev)}>
                                <Link className='has-child'>Nguyễn Bảo
                                    { accountdropdown && <AccountDropdown /> }
                                </Link>
                            </li>
                            
    
            </ul>
            
        </div>
        {/* <Outlet /> */}
    </nav>
    
  )
}

export default Navbar