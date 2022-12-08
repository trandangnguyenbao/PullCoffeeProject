import React from 'react'
import './catalog.css'
import { useCallback, useState, useEffect, useRef } from 'react'
// import category from '../../asset/fake-data/category'
import productData from '../../asset/fake-data/Product'
import { AiTwotoneHeart} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import category from '../../asset/fake-data/category'
import './catalog.css'

const Catalog = () => {
  const liItem = document.querySelector('li.container__product--menu');
  const handleOnClick = () => {
    if(liItem.classList.contains('active')){
        liItem.classList.remove('active');
    }
    else{
      liItem.classList.add('active');
    }
  }
  const [data, setData] = useState(category);

  const filterResult = (catItem) => {
    const result = category.filter((curDate) => {
      return curDate.category == catItem;
    })
    setData();
  }

  return (
    <div className="container container__product col-lg-12 col-md-12 col-sm-12 col-12">
        <ul className="container__product--menu col-lg-2 col-md-12 col-sm-12 col-12">
            {
                category.map(({name,catalogSlug, children}, index) => {
                    return (
                        <li className="container__product--menu" key={index}>
                            <NavLink to = {catalogSlug} onClick={handleOnClick} className = "">{name}</NavLink>
                            <ul className="product__menu--child">
                            {
                                children?.map(({name,catalogSlug, catalogSlugParent}, id) => {
                                    return (
                                        <li className="product__menu--child ">
                                            <NavLink to = {catalogSlug} className = "" >{name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>

        <div className="container__product--item col-lg-10 col-md-12 col-sm-12 col-12">
        <div className="container__producthome--title">
                 {
                      category.map((name, index) => {
                        if (name === 'Cà Phê')
                          return (
                          <div className="container__producthome">
                              <h1 className="container__producthome--title">{}</h1>
                              <div className="container__producthome--item col-lg-12 col-md-12 col-sm-12 col-12 row">
                                  {
                                      productData.getProducts(6).map((item, index) => {
                                        return (
                                          <a href={item.slug} className='home__item--container col-lg-3 col-md-6 col-sm-6 col-6'><li index = {index}>
                                            <img src={item.image01} alt="" />
                                            <h5 className='home__item--name'>{item.title}</h5>
                                            <span className='home__item--cost'>{item.price}</span>
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
                              </div>
                          </div>
                          )
                      })
                  }        
        </div>
        </div>
    </div>
  )
}

export default Catalog