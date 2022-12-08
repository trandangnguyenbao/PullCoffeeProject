import React from 'react'
import './headermeta.css'
import { headerMeta } from '../data'

const HeaderMeta = () => {
  return (
    <div className="headermeta__container container">
        <ul className='headermeta__container--item'>
            {
                headerMeta.map(({image, title}, index) => {
                    return (
                        <li key = {index} className = 'headermeta__container--item'>
                            <img className='headerMeta' src={image} />
                            <p className='headerMeta__title'>{title}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default HeaderMeta