import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {GrFormNext} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineLink, AiOutlineDelete} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'
import {BsFillChatLeftFill} from 'react-icons/bs'
import './cart.css'
import '../AccountPage/account.css'
import OrderData from '../../asset/fake-data/Order'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productData from '../../asset/fake-data/Product'
import formatProductPrice from '../../Helper'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Cart = (props) => {
    const cart = useSelector((state) => state);
    const history = useNavigate();
    const [Catalogs, setCaTaLogs] = useState([]);
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // useEffect(() => {
    //     if (!userInfo) {
    //         history("/account/login")
    //     }
    // }, [history])
    const dispatch = useDispatch();

    // FETCH DATA USER
    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //       const fetchUser = async () => {
    //           const {data} = await axios.get('/api/user')
    //           setUser(data)
    //       }
    //       fetchUser();
    //   }, [])

    // let name = '';
    // for (let i = 0; i < user.length; i++){
    //     if (user[i].phone === userInfo.phone){
    //         // setNameUser(user[i].phone)
    //         name = user[i].phone
    //     }
    // }

    // const [order, setOrder] = useState([]);
    // useEffect(() => {
    //       const fetchOrder = async () => {
    //           const {data} = await axios.get('/api/order/')
    //           setOrder(data)
    //       }
    //       fetchOrder();
    //   }, [])

    // let idOrder = order.map((order) => {
    //     return order.id_order;
    // })

    // const id_order = idOrder[order.length - 1] + 1;
    const tongtien = cart.map((product) => {
        return product.cost*product.quantity
     })
     const initialValue = 0;
     const sumWithInitial = tongtien.reduce(
       (previousValue, currentValue) => previousValue + currentValue,
       initialValue
     );

    //  let list = [{}];
    // let product = {
    //     title: "", 
    //     cost: 0,
    //     soluong: 0,
    //     tongtien: 0,
    //     image: ""
    // }
    // for (let i = 0; i < cart.length; i++){
    //     product = {
    //         title: cart[i].title,
    //         cost: cart[i].cost,
    //         soluong: cart[i].quantity,
    //         tongtien: cart[i].cost*cart[i].quantity,
    //         image: cart[i].img
    //     }
    //     list = list.concat(product);
    // }
    // const children = list.slice(1)
    // console.log(children);
    // const [product, setProduct] = useState([]);
    // const Product = cart.map((products) => {
    //     setProduct = {
    //         "title": products.title,
    //         "image": products.img,
    //         "soluong": products.quantity,
    //         "tongtien": products.soluong + products.quantity
    //     }
    // })
    // console.log(product);
    //  const handleSubmit = () =>{
    //     // const name = name;/
    //     const totalPrice = sumWithInitial;
    //     const status = "Đang Giao Hàng"
    //     const data = {
    //         name: name,
    //         totalPrice: totalPrice,
    //         status: status,
    //         id_order: id_order,
    //     }

    //     const datas = {
    //         id_order: id_order,
    //         children: children
    //     }

    //     // Thêm Đơn Hàng
    //     axios.post('/api/order/',data).then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    //     //   Thêm Dữ Liệu Chi Tiết Đơn Hàng
    //     axios.post('/api/orderdetail/',datas).then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //       history("/account/order") 
    // }
  return (
    <div className="container container__cart col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="container__cart--title">
            <Link to = {'/'}><AiOutlineHome /></Link>
            <i><GrFormNext /></i>
            <p>Giỏ hàng của bạn</p>
        </div>
        <div className="container__cart--contain col-lg-12 col-md-12 col-sm-12 col-12">
            { cart ? (
                <div className="container__cart--contain--container col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="container__cart--contain--container--item col-lg-8 col-md-7 col-sm-12 col-12 px-2">
                        <h5>Giỏ hàng của bạn {cart.length} sản phẩm</h5>
                        <div className="container__cart--item--item">
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Số Lượng</th>
                            <th>Giá Tiền</th>
                            <th>Tổng Tiền</th>
                            <th>Action</th>
                        </tr>
                        {
                            cart.map((product) => {
                                return (
                                    <tr>
                                        <td><img src={product.img} alt="" /></td>
                                        <td>{product.title}</td>
                                        <td><div>
                                            <button
                                                onClick={() => {
                                                    if (product.quantity > 1) {
                                                        dispatch({ type: "DECREASE", payload: product });
                                                    } else {
                                                        dispatch({ type: "REMOVE", payload: product });
                                                    }
                                                }}
                                                >
                                                -
                                            </button>   
                                            <p>{product.quantity}</p>    
                                            <button onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button>    
                                        </div></td>
                                        <td>{formatProductPrice(product.cost)}</td>
                                        <td>{formatProductPrice(product.cost*product.quantity)}</td>
                                        <td><button onClick={() => dispatch({type: "REMOVE", payload: product})}><AiOutlineDelete /></button></td>
                                    </tr>
                                )
                            })
                        }
                    </div>
                    </div>
                    <div className="container__cart--contain--container--item col-lg-4 col-md-5 col-sm-12 col-12 px-2">
                        <h5>Tiến hành thanh toán</h5>
                        <div className="contain--container--item--bill">
                            <p>Thanh Toán Hóa Đơn</p>
                            <form >
                                <div className="contain--container--item--bill--child">
                                    <span>Tạm tính:</span>
                                    <p>{formatProductPrice(sumWithInitial)}</p>
                                </div>
                                <div className="contain--container--item--bill--child">
                                    <span>Phí vận chuyển:</span>
                                    <p>{formatProductPrice(0)}</p>
                                </div>
                                <div className="contain--container--item--bill--child">
                                    <span>Giảm giá:</span>
                                    <p>{formatProductPrice(0)}</p>
                                </div>
                                <div className="contain--container--item--bill--child">
                                    <span>Thành Tiền:</span>
                                    <h3>{formatProductPrice(sumWithInitial)}</h3>
                                </div>
                                <button type="submit" className="payment">THANH TOÁN</button>
                            </form>
                        </div>
                    </div>
                    </div> 
            ) : (
                <div className="container__cart--contain--none col-lg-12 col-md-12 col-sm-12 col-12">
                        <p>Hiện tại bạn chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link to = {'/collections/coffee'}>Thưởng Thức Ngay</Link>
                    </div>
            )}
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
        </div>
  )
}

export default Cart