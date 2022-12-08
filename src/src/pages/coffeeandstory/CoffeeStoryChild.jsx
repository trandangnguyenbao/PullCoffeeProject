import React from 'react'
import { coffeeHolic, CoffeeHolicStory, Story, StoryBlog } from '../../data';
import {NavLink} from 'react-router-dom';
import './coffeestorychild.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import story from '../../asset/fake-data/Story';
const CoffeeStoryChild = ({data}) => {
    // const [StoryBlog, setStoryBlog] = useState([]);
    // useEffect(() => {
    //     const fetchStory = async () => {
    //         const {data} = await axios.get('/api/pages/story/')
    //         setStoryBlog(data)
    //     }
    //     fetchStory();
    // }, [])
    return (
        <section className="storyhome">
        <div className="container container__storyhome">
            <h1>Chuyện Nhà</h1>
            <div className="container__storyhome--content"><p> The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.</p></div>
            <ul className="story__home--menu">
                <li  className = 'story__home--memu' ><NavLink  to={'/pages/story'}  >Tất Cả</NavLink></li>
                <li  className = 'story__home--memu active' ><NavLink  to={'/pages/story/coffeeholic'}   >Coffeeholic</NavLink></li>
                <li  className = 'story__home--memu' ><NavLink  to={'/pages/story/teaholic'}    >TeaHolic</NavLink></li>
                <li  className = 'story__home--memu' ><NavLink  to={'/pages/story/blog'}   >Blog</NavLink></li>
            </ul>
        </div>
        <div className="container container__storychild col-lg-12 col-md-12 col-sm-12 col-12">
            {
               story.map(({type_story, children,createdAt}, index) => {
                    if (type_story === "CoffeeHolic"){
                        return (
                            children.map((children, index,) => {
                                return (
                                    <ul className="container__storychild--item col-lg-4 col-md-4 col-sm-6 col-12 py-2" key={index}>
                                        <li className="container__storychild--img col-lg-12 col-md-12 col-sm-12 col-12">
                                            <a href = {children.link} ><img src={children.img} alt="" /></a>
                                        </li>
                                        <li className="container__storychild--title col-lg-12 col-md-12 col-sm-12 col-12">
                                            <NavLink>{children.title}</NavLink>
                                            <span>{children.date}</span>
                                            <p>{children.descript}</p>
                                        </li>
                                    </ul>
                                )   
                            })
                        )
                    }
                })
                }
        </div>
        </section>
    )
}

export default CoffeeStoryChild