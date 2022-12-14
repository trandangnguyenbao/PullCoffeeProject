import React from 'react'
import './home.css'
import { slideShow } from '../../data'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {GrFormPrevious} from 'react-icons/gr'
import { useState, useEffect } from 'react';
import Banner1 from '../../images/banner1.jpg'
import { homeProduct } from '../../data'
import '../../style'
import CloudImage from '../../images/_creme-brulee.jpg'
import CloudeImage2 from '../../images/_creamy.jpg'
import HomeStoryImage from '../../images/coffee-2.jpg'
import { coffeeHolic } from '../../data'
import { teaHolic } from '../../data'
import { blog } from '../../data'
import { AiTwotoneHeart} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import { slideHome } from '../../data'
import productData from '../../asset/fake-data/Product'
// import heroSliderData from '../../asset/fake-data/hero-slider'
import SliderImage from '../../images/slide1.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const [slidehome, setSlideHome] = useState(1);

  useEffect((slidehome) => {
    setSlideHome(slidehome = slidehome + 1);
  }, [])

  return (
    <>
        <div className="container--fluid container__home-slider">
            <Link to = {''}><img src={SliderImage} /></Link>
        </div>

        {/* Container Home */}
        <section id='container__home'>
          <div className="container__home col-12">
            <ul className="container__home col-12">
              <a href=""  className="container__home--item col-lg-6 col-md-12 col-sm-12 col-12"><li>
                <img src={Banner1} alt="" className='home__item--image' />
              </li></a>
              {
                productData.getProducts(6).map((item, index) => {
                  return (
                    <a href={`/product/${item.path_name}`} className='home__item--container col-lg-3 col-md-6 col-sm-6 col-6'><li index = {index}>
                      <img src={item.img} alt="" />
                      <h5 className='home__item--name'>{item.title}</h5>
                      <span className='home__item--cost'>{item.cost}</span>
                      <ul className='home__item--icon'>
                          <li className="home__item--icon">
                              <i><AiTwotoneHeart/></i>
                          </li>
                          <li className="home__item--icon pt-3">
                            <i><BsFillBagFill /></i>
                          </li>
                      </ul>
                    </li></a>
                  )
                })
              }
            </ul>
          </div>
        </section>
        {/* Container Home */}


      {/* CloudFee Home */}
      <section className="cloudfee">
        <div className="container container__cloudfee">
              <div className="container__cloudfee--title col-lg-12 col-md-12 col-sm-12 col-12"><h1>CLOUDFEE</h1>
              <p>???????c k???t h???p t??? <b>Cloud</b>(????m m??y) v?? cof<b>Fee</b> (c?? ph??), <b>CloudFee</b> g???i m??? <br /> v??? m???t 
              th??? h??? c?? ph?? m???i, ??m m?????t nh?? m??y.</p></div>
              <div className="container__cloudfeelayout">
                <ul className="container__cloudfeelayout col-lg-12 col-md-12 col-sm-12 col-12">
                  <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12 pt-2">
                    <img src={CloudImage} alt="" />
                  </li>
                  <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                    <p className="container__cloudfee--title">CLOUDFEE</p>
                    <h2 className="container__cloudfee--name"><i>Creme Brulee</i></h2>
                    <p className='container__cloudfee--descript'><b>Th???c u???ng "chi???u chu???ng b???n th??n" b???c nh???t</b> cho nh???ng ai th??ch v??? ng???t ng??o hay mu???n th?????ng th???c s??? k???t h???p ?????c ????o 
                      gi???a m??n tr??ng mi???ng v?? th???c u???ng.
                    </p>
                    <Link to={`/collections/cloudfee`} className="container__cloudfee--button">
                      Th??? ngay
                    </Link>
                  </li>
                  <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                    <p className="container__cloudfee--title">CLOUDFEE</p>
                    <h2 className="container__cloudfee--name"><i>Creamy</i></h2>
                    <p className='container__cloudfee--descript'><b>Th???c u???ng "????nh th???c" n??ng l?????ng ng??y m???i</b> h???p cho nh???ng ai m???i b?????c v??o th??? gi???i c?? ph?? ho???c ghi???n c?? ph?? nh??ng mu???n kh??m ph?? th??m nhi???u h????ng v??? m???i.
                    </p>
                    <Link to = {`/collections/cloudfee`} className="container__cloudfee--button">
                      Th??? ngay
                    </Link>
                  </li>
                  <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={CloudeImage2} alt="" />
                  </li>
                </ul>
              </div>
        </div>
      </section>
      {/* CloudFee Home */}
      
      {/* Home Slide Container */}
      <section id="slidehome">
        <div className="container container__slidehome col-lg-12 col-md-12 col-sm-12 col-12">
            {
              slideHome.map(({title, descript, child, id}, index) => {
                return (
                  <div className="slidehome__item col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className={`slidehome__item--child${id} col-lg-4 col-md-4 col-sm-12 col-12`}>
                        <a href="" className='slidehome__item-child'><h3>{title}</h3></a>
                        <a href="" className='slidehome__item-child'><p>{descript}</p></a>
                        <a href="" className='slidehome__item-child'><button>T??m hi???u th??m</button></a>
                    </div>
                    <ul className={`slidehome__item--child${id} col-lg-8 col-md-8 col-sm-12 col-12`}>
                        {
                          child.map(({id, img}) => {
                            return(
                              <a href="#" className="slidehome__item--img" key = {index}>
                                  <li><img src={img} alt="" /></li>
                              </a>
                            )
                          })
                        }
                    </ul>
                  </div>
                )
              })
            }
        </div>
      </section>
      {/* Home Slide Container */}
      
      {/* Home Story Container */}
      <section id="homestory">
        <div className="container container__homestory">
          <div className="home__story--top">
            <img src={HomeStoryImage} alt="" />
            <p>Chuy???n Nh??</p>
          </div>
          <div className="home__story--coffeeholic">
            <h5>Coffeeholic</h5>
            <ul className="home__story--coffeeholic col-lg-12 col-md-12 col-sm-12 col-12">
              {
                coffeeHolic.map(({image, title, descript, date}, index) => {
                  return ( 
                    <li className="home__story--coffeeholic col-lg-4 col-md-6 col-sm-6 col-12 pt-4 px-2" key = {index}>
                      <div className="home__story--img"><Link to = {`collections/coffee`}><img src={image} alt="" /></Link></div>
                      <span>{date}</span>
                      <h6>{title}</h6>
                      <p>{descript}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="home__story--coffeeholic">
            <h5>Teaholic</h5>
            <ul className="home__story--coffeeholic col-lg-12 col-md-12 col-sm-12 col-12 ">
              {
                teaHolic.map(({image, title, descript, date}, index) => {
                  return ( 
                    <li className="home__story--coffeeholic col-lg-4 col-md-6 col-sm-6 col-12 pt-4 px-2" key = {index}>
                      <div className="home__story--img"><Link to = {`collections/coffee`}><img src={image} alt="" /></Link></div>
                      <span>{date}</span>
                      <h6>{title}</h6>
                      <p>{descript}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="home__story--coffeeholic">
            <h5>Blog</h5>
            <ul className="home__story--coffeeholic col-lg-12 col-md-12 col-sm-12 col-12">
              {
                blog.map(({image, title, descript, date}, index) => {
                  return ( 
                    <li className="home__story--coffeeholic col-lg-4 col-md-6 col-sm-6 col-12 pt-4 px-2" key = {index}>
                      <div className="home__story--img"><Link to = {`collections/coffee`}><img src={image} alt="" /></Link></div>
                      <span>{date}</span>
                      <h6>{title}</h6>
                      <p>{descript}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
      {/* Home Story Container */}
    </>
)

  
}


export default Home


