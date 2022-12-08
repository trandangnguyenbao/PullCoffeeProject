import React from 'react'
import './dropdown.css'
import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { cafeDropdown } from '../data'
import Catalogs from '../asset/fake-data/Catalog'

const Dropdown = () => {
    // const [Catalogs, setCaTaLogs] = useState([]);
    // useEffect(() => {
    //     const fetchCatalogs = async() => {
    //         const {data} = await axios.get('/api/catalog/')
    //         setCaTaLogs(data)
    //     }
    //     fetchCatalogs();
    // }, [])
    const [nameChild, setNameChild] = useState('Cà Phê Việt Nam');
        const liItem = document.querySelector('li.container__product--menu');
        const handleOnClick = () => {
          if(liItem.classList.contains('active')){
              liItem.classList.remove('active');
          }
          else{
            liItem.classList.add('active');
          }
        }
  return (
    <div className="container-fluid container__dropdown">
        <ul className='nav__dropdown'>
            {
                Catalogs.map(({id,name,path,children}) => {
                    return (
                        <li className="nav__dropdown" key={id}>
                            <Link to = {`/collections/${path}`} key = {id}>{name}</Link>
                            <ul className="nav__dropdownchild">
                                {
                                    children.map((catalog) => {
                                        return (
                                            <li className="nav__dropdownchild">
                                                <Link to = {`/collections/${catalog.path}`} onClick={() => setNameChild(name)}>{catalog.name}</Link>
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
    </div>
  )
}

export default Dropdown