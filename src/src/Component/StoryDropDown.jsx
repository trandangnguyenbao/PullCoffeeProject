import React from 'react'
import './storydropdown.css'
import { storyDropdown } from '../data'
import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'
const StoryDropdown = () => {
    return (
        <div className="container-fluid container__dropdown">
            <ul className='nav__dropdown'>
                {
                    storyDropdown.map(({name, path, children}, index) => {
                        return (
                            <li className="nav__dropdown" key={index}>
                                <NavLink to = {path} key = {index}>{name}</NavLink>
                                <ul className="nav__dropdownchild">
                                    {
                                        children?.map(({name, path}, index) => {
                                            return (
                                                <li className="nav__dropdownchild">
                                                    <NavLink to = {path}>{name}</NavLink>
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



export default StoryDropdown