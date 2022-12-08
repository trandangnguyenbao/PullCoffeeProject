import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import PhoneIcon from '../images/phone.jpg'
import MapIcon from '../images/map.jpg'
import FooterImage from '../images/footer.jpg'
import LogoSmall from '../images/logosmall.jpg'
import './boostrap.min.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillGoogleSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container col-12">
            <div className="footer__container--item col-lg-3 col-md-6 col-sm-6 2">
                <h4>Giới thiệu</h4>
                <Link to = 'vechungtoi'>Về chúng tôi</Link>
                <Link to = 'sanpham'>Sản phẩm</Link> 
                <Link to = 'khuyenmai'>Khuyến mãi</Link> 
                <Link to = 'chuyennha'>Chuyện cà phê</Link> 
                <Link to = 'sanpham'>Sản phẩm</Link> 
                <Link to = 'shop'>Cửa hàng</Link>
                <Link to = 'career'>Tuyển dụng</Link>
            </div>
            <div className="footer__container--item col-lg-3 col-md-6 col-sm-6">
                <h4>Điều khoản</h4>
                <Link to = 'dieukhoansudung'>Điều khoản sử dụng</Link>
                <Link to = 'quytacbaomat'>Quy tắc bảo mật</Link> 
            </div>
            <div className="footer__container--item col-lg-3 col-md-6 col-sm-6">
                <ul className="footer__container--item">
                    <li className="footer__container--item">
                        <img src= {PhoneIcon} alt="" />
                        <p>Đặt hàng: 1800 6963</p>
                    </li>
                    <li className="footer__container--item">
                        <img src= {MapIcon} alt="" />
                        <p>Liên hệ đặt hàng</p>
                    </li>
                    <li className='footer__container--item'>
                        <span>
                            Tầng 3 - 4 HUB Building 
                            195/10E Điện Biên Phủ, P.15, 
                            Quận Bình Thạnh, TP. Hồ Chí Minh
                        </span>
                    </li>
                </ul>
            </div>
            <div className="footer__container--item col-lg-3 col-md-6 col-sm-6">
                <img src={FooterImage} />
                <div className="footer__container--icon">
                    <a href="" className="footer__container--icon">
                        <AiFillFacebook />
                    </a>
                    <a href="" className="footer__container--icon">
                        <AiFillTwitterSquare />
                    </a>
                    <a href="" className="footer__container--icon">
                        <AiFillInstagram />
                    </a>
                    <a href="" className="footer__container--icon">
                        <AiFillGoogleSquare />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer