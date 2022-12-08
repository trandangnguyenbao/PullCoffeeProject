import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { AiTwotoneHeart} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import formatProductPrice from '../../Helper'
import Products from '../../asset/fake-data/ProductForCatalog'
// import '../product/product.css'
const CoffeeHome = () => {
  return (
    <div className="container__producthome">
        <div className="container__producthome--title">
        <div className="container__producthome--item col-lg-12 col-md-12 col-sm-12 col-12 row">
        <h1 className="container__producthome--title">Cà Phê Tại Nhà</h1>
            {
                Products.map((product,index) => {
                    if(product.catalog == 'Cà phê tại nhà'){
                        return (
                            <div className="container__producthome--child col-lg-3 col-md-4 col-sm-6 col-6  pt-3 ">
                                <Link to = {`/product/${product.path_name}`}><img src={product.img} alt="" className="container__producthome--item" />
                                    <ul className='producthome__child-icon'>
                                        <li className="producthome__child-icon">
                                            <i><AiTwotoneHeart/></i>
                                        </li>
                                        <li className="producthome__child-icon pt-3">
                                            <i><BsFillBagFill /></i>
                                        </li>
                                    </ul>
                                </Link> 
                                <p className="container__producthome--title">{product.title}</p>
                                <span className="container__producthome--cost">{formatProductPrice(product.cost)}</span>
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    </div>
  )
}

export default CoffeeHome