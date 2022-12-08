import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './pages/home/Home'
import Career from './pages/career/Career'
// import Coffee from './collection/coffee/Coffee'
import HeaderMeta from './Component/HeaderMeta'
import Footer from './Component/Footer'
import TeaHome from './collection/tea/TeaHome'
import CoffeeStory from '../src/pages/coffeeandstory/CoffeeStory'
import Shop from '../src/pages/danhsachcuahang/Shop'
import CoffeeHome from './collection/coffee/CoffeeHome'
import Chitiet from './collection/chitiet/Chitiet'
import CamHung from './pages/cloudfee/CamHung'
import CoffeeStoryChild from './pages/coffeeandstory/CoffeeStoryChild'
import TeaHolicStory from './pages/coffeeandstory/TeaHolicStory'
import BlogStory from './pages/coffeeandstory/BlogStory'
import Product from './collection/product/Product'
import Cart from './container/Cart/Cart'
import SignUp from './container/SignUp/SignUp'
import Login from './container/Login/Login'
import Account from './container/AccountPage/Account'
import Order from './container/AccountPage/Order'
import AddressOrder from './container/AccountPage/AddressOrder'
import Infomation from './container/AccountPage/Infomation'
// import Career from './pages/career/Career'
const App = () => {
  return (
    <BrowserRouter>
        <HeaderMeta />
        <Navbar />
        <Routes>
        <Route index element = {<Home />} />
                <Route path = '/collections/tra-tai-nha' element = {<TeaHome />} />
                <Route path = '/collections/ca-phe-tai-nha' element = {<CoffeeHome />} />
                <Route path = '/pages/story' element = { <CoffeeStory />} />
                <Route path = '/pages/camhung' element = { <CamHung />} />
                <Route path = '/pages/shop' element = { <Shop />} />
                <Route path = '/pages/story/coffeeholic' element = { <CoffeeStoryChild/>} />
                <Route path = '/pages/story/teaholic' element = { <TeaHolicStory/>} />
                <Route path = '/pages/story/blog' element = { <BlogStory/>} />
                <Route path= '/product/:path_name' element = {<Chitiet />} />
                <Route path= '/collections/:path' element = {<Product />} />
                <Route path= '/cart' element = {<Cart />} />
                <Route path= '/account/Sign-up' element = {<SignUp />} />
                <Route path= '/account/Login' element = {<Login />} />
                <Route path= '/accountInfo' element = {<Account/>} />
                {/* <Route path= '/accountInfo' element = {<Info />} /> */}
                <Route path= '/account/order' element = {<Order />} />
                <Route path= '/account/address' element = {<AddressOrder />} />
                <Route path= '/account/notifications' element = {<Infomation />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
