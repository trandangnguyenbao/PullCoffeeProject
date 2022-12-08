import React from 'react'
import './shop.css'
import ChiNhanhImage from '../../images/cuahang.jpg'
// import { cuahang } from '../../data'
// import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {AiOutlineFacebook, AiOutlineLink, AiFillCar} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'
import {BsFacebook, BsFillChatLeftFill} from 'react-icons/bs'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {BiShoppingBag} from 'react-icons/bi'
// import State from '../../asset/fake-data/State'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Countries from '../../asset/fake-data/Country'
import Province from '../../asset/fake-data/Province'
import Branches from '../../asset/fake-data/Branch'

const Shop = () => {
  const [country, setCountry] = useState('TP. Hồ Chí Minh')
  const [disTrict, setDistrict] = useState([])
  const [districtId, setDisTrictId] = useState('Bình Thạnh')

  const handleDistrict = (e) => {
      const getDisTrictName = e.target.value;
      setDisTrictId(getDisTrictName);
      console.log(getDisTrictName)
  }
  const handleCity = (e) => {
      const getCityName = e.target.value;
      setCountry(getCityName);
      console.log(getCityName)
      setDisTrictId('Bình Thạnh')
  }
  console.log(districtId)
  return (
    <section id='shop'>
      <div className="container-fluid container__shopbackground">
        <img src={ChiNhanhImage} alt="" />
        <div className="container__shopbackground--layer"><h2>Hệ thống 154 cửa hàng The Coffee House trên toàn quốc</h2></div>
      </div>
      <div className="container container__shop col-lg-12 col-md-12 col-sm-12 col-12 position-sticky">
          <div className="container__shop--left col-lg-2 col-md-12 col-sm-12">
            <ul className="container__shop--left">
              {
                Countries.map((getcountry) => {
                  return (
                    <li className="container__shop--left" key = {getcountry.country_id}>
                      <Link onClick={() => setCountry(getcountry.name)}>{getcountry.name}</Link>
                      {/* <NavLink className = "">{name}</NavLink> */}
                    </li>
                  )
                })
              }
            </ul>

            <select className="container__shop--left d-lg-none" onChange={(e) => handleCity(e)}>
              {
                  Countries.map((getcountry) => {
                    return (
                      <option value={getcountry.name} key = {getcountry.country_id}>{getcountry.name}</option>
                    )
                  })
              }
            </select>

          </div>
          <div className="container__shop--right col-lg-10 col-md-12 col-sm-12 col-12">
            {
              Countries.map((thanhpho) => {
                  if (thanhpho.name === country ){
                    return (
                      <h5>Khám phá {thanhpho.branch} cửa hàng của chúng tôi ở {thanhpho.name}</h5>
                    )
                  }
              })
            }
            <>
            <select className='select__shop' onChange={(e) => handleDistrict(e)}>
                  {
                    Province.map((getprovince) => {
                      if (getprovince.Country_name === country){
                        return (
                          <option value={getprovince.name} key = {getprovince.province_id}>{getprovince.name}</option>
                        )
                      }
                    })
                  }
              </select>
              <div className="shop__right--item col-lg-12 col-md-12 col-sm-12 col-12">
                            <ul className="shop__right--item col-lg-12 col-md-12 col-sm-12 col-12">
                              {
                               Branches.map((branchs) => {
                                if (branchs.Province_name == districtId){
                                  return (
                                    <li className="shop__right--item col-lg-6 col-md-6 col-sm-12 col-12 pt-4" key= {branchs.Branch_id}>
                                      <div className="right__item--img"><img src={branchs.image} alt="" /></div>
                                      <h6>{branchs.name}</h6>
                                      <button><a href={branchs.map} className = 'map'>Xem bản đồ</a></button>
                                      <ul className="right__item--icon">
                                        <p>Chia sẻ trên: </p>
                                        <li className="right__item--icon"><a href=""><AiOutlineFacebook/></a></li>
                                        <li className="right__item--icon"><a href=""><SiZalo/></a></li>
                                        <li className="right__item--icon"><a href=""><BsFillChatLeftFill/></a></li>
                                        <li className="right__item--icon"><a href=""><AiOutlineLink/></a></li>
                                      </ul>
                                      <p>{branchs.address}</p>
                                      <p>07:00 - 22:00</p>
                                      <ul className="right__item--descript col-lg-12 col-md-12 col-sm-12 col-12">
                                        <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                            <AiFillCar />
                                            <span>Có chỗ đỗ xe hơi</span>
                                        </li>
                                        <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                            <SiHomeassistantcommunitystore />
                                            <span>Phục vụ tại chỗ</span>
                                        </li>
                                        <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                            <BiShoppingBag />
                                            <span>Mua mang đi</span>
                                        </li>
                                      </ul>
                                    </li>
                                  )
                                }
                              })
                              }
                            </ul>
                          </div>
              </>
              {/* {
                State.map(({country_id, name, district}) => {
                    if (name === country){
                      return (
                        <>
                          <h5>Khám phá cửa hàng của chúng tôi ở {name}</h5>
                          <select className='select__shop'  onChange={(e) => handleDistrict(e)}>
                            {
                              district.map(({district_id, name, street}) => {
                                return (
                                  <option value={name} key= {district_id}>{name}</option>
                                )
                              })
                            }
                          </select>
                          <div className="shop__right--item col-lg-12 col-md-12 col-sm-12 col-12">
                            <ul className="shop__right--item col-lg-12 col-md-12 col-sm-12 col-12">
                              {
                                district.map(({district_id, name, street}) => {
                                  if (name === districtId){
                                      return (
                                      street.map(({street_id, name, map, address, image}) => {
                                        return (
                                          <li className="shop__right--item col-lg-6 col-md-6 col-sm-12 col-12 pt-4" key= {street_id}>
                                            <div className="right__item--img"><img src={image} alt="" /></div>
                                            <h6>{name}</h6>
                                            <button><a href={map} className = 'map'>Xem bản đồ</a></button>
                                            <ul className="right__item--icon">
                                              <p>Chia sẻ trên: </p>
                                              <li className="right__item--icon"><a href=""><AiOutlineFacebook/></a></li>
                                              <li className="right__item--icon"><a href=""><SiZalo/></a></li>
                                              <li className="right__item--icon"><a href=""><BsFillChatLeftFill/></a></li>
                                              <li className="right__item--icon"><a href=""><AiOutlineLink/></a></li>
                                            </ul>
                                            <p>{address}</p>
                                            <p>07:00 - 22:00</p>
                                            <ul className="right__item--descript col-lg-12 col-md-12 col-sm-12 col-12">
                                              <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <AiFillCar />
                                                  <span>Có chỗ đỗ xe hơi</span>
                                              </li>
                                              <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <SiHomeassistantcommunitystore />
                                                  <span>Phục vụ tại chỗ</span>
                                              </li>
                                              <li className="right__item--descript col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <BiShoppingBag />
                                                  <span>Mua mang đi</span>
                                              </li>
                                            </ul>
                                          </li>
                                        )
                                    })
                                    )
                                    }
                                    
                                })
                              }
                            </ul>
                          </div>
                        </>
                      )
                    }
                })
              } */}
              <button>Xem Thêm</button>
          </div>
      </div>
    </section>
  )
}

export default Shop