import React from 'react'
import {NavLink} from 'react-router-dom'
import story from '../../asset/fake-data/Story'
import { Story } from '../../data'
import './coffeestory.css'

const CoffeeStory = () => {
  return (
    <section className="storyhome">
      <div className="container container__storyhome">
        <h1>Chuyện Nhà</h1>
        <div className="container__storyhome--content"><p> The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.</p></div>
        <ul className="story__home--menu">
            <li  className = 'story__home--memu active' ><NavLink  to={'/pages/story'}  >Tất Cả</NavLink></li>
            <li  className = 'story__home--memu' ><NavLink  to={'/pages/story/coffeeholic'}   >Coffeeholic</NavLink></li>
            <li  className = 'story__home--memu' ><NavLink  to={'/pages/story/teaholic'}    >TeaHolic</NavLink></li>
            <li  className = 'story__home--memu' ><NavLink  to={'/pages/story/blog'}   >Blog</NavLink></li>
        </ul>
      </div>
        <div className="container container__storyhome--contain col-lg-12 col-md-12 col-sm-12 col-12">
            {
              story.map(({name, path, child}, index) => {
                return (
                  <ul className="container__storyhome--contain col-lg-12 col-md-12 col-sm-12 col-12">
                    {
                      child?.map(({img, title, descript, date}, index) => {
                        return (
                          <li className="storyhome__contain--item col-lg-6 col-md-12 col-sm-12 col-12"><NavLink>
                            <img src={img} alt="" />
                            <h4>{title}</h4>
                            <span>{date}</span>
                            <p>{descript}</p>
                          </NavLink></li>
                        )
                      })
                    }
                  </ul>
                )  
              })
            }
        </div>
      {/* </div> */}
      <div className="container--fluid container__storyhome--coffeeholic col-lg-12 col-md-12 col-sm-12 col-12">
            {
              Story.map(({name, slide, children}, index) => {
                return (
                  <>
                  <div className="storyhome__coffeeholic--slide col-lg-6 col-md-12 col-sm-12 col-12">
                    {
                      children?.map(({slide, name}, index) => {
                        if (name === 'CoffeeHolic') {
                          return (
                            <img src={slide} alt="" />
                          )
                          }
                      })
                    }
                  </div>
                  <div className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">
                  {
                      children?.map(({name, slide, child}, index) => {
                        if (name === "CoffeeHolic"){
                          return (
                            <>
                            <h5>{name}</h5>
                            {
                              child.map(({img, title, descript, date}, index) => {
                                return (
                                  <ul className="storyhome__coffeeholic--item col-lg-12 col-md-12 col-sm-12 col-12">
                                    <NavLink><li className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">                                 
                                        <ul className="coffeeholic__item--child col-lg-12 col-md-12 col-sm-12 col-12">
                                          <li className='item__child--left col-lg-4 col-md-5 col-sm-6 col-6'><img src={img} alt="" /></li>
                                          <li className='item__child-right col-lg-8 col-md-7 col-sm-6 col-6 px-3'>
                                            <h4>{title}</h4>
                                            <span>{date}</span>
                                            <p>{descript}</p>
                                          </li>
                                        </ul>
                                    </li></NavLink>
                                  </ul>
                                )
                              })  
                            }
                            <a href="" className="coffeeholic__item--button">Tìm hiểu thêm</a>
                            </>
                          )
                          }
                        })
                    }
                  </div>
                  </>
                )
              })
            }
      </div>
      <div className="container--fluid container__storyhome--teaholic col-lg-12 col-md-12 col-sm-12 col-12">
            {
              Story.map(({name, slide, children}, index) => {
                return (
                  <>
                  <div className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">
                  {
                      children?.map(({name, slide, child}, index) => {
                        if (name === "Teaholic"){
                          return (
                            <>
                            <h5>{name}</h5>
                            {
                              child.map(({img, title, descript, date}, index) => {
                                return (
                                  <ul className="storyhome__coffeeholic--item col-lg-12 col-md-12 col-sm-12 col-12">
                                    <NavLink><li className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">                                 
                                        <ul className="coffeeholic__item--child col-lg-12 col-md-12 col-sm-12 col-12">
                                          <li className='item__child--left col-lg-4 col-md-5 col-sm-6 col-6'><img src={img} alt="" /></li>
                                          <li className='item__child-right col-lg-8 col-md-7 col-sm-6 col-6 px-3'>
                                            <h4>{title}</h4>
                                            <span>{date}</span>
                                            <p>{descript}</p>
                                          </li>
                                        </ul>
                                    </li></NavLink>
                                  </ul>
                                )
                              })  
                            }
                            <a href="" className="coffeeholic__item--button">Tìm hiểu thêm</a>
                            </>
                          )
                          }
                        })
                    }
                  </div>
                  <div className="storyhome__teaholic--slide col-lg-6 col-md-12 col-sm-12 col-12">
                    {
                      children?.map(({slide, name}, index) => {
                        if (name === 'Teaholic') {
                          return (
                            <img src={slide} alt="" />
                          )
                          }
                      })
                    }
                  </div>
                  </>
                )
              })
            }
      </div>
      <div className="container--fluid container__storyhome--coffeeholic col-lg-12 col-md-12 col-sm-12 col-12">
            {
              Story.map(({name, slide, children}, index) => {
                return (
                  <>
                  <div className="storyhome__coffeeholic--slide col-lg-6 col-md-12 col-sm-12 col-12">
                    {
                      children?.map(({slide, name}, index) => {
                        if (name === 'Blog') {
                          return (
                            <img src={slide} alt="" />
                          )
                          }
                      })
                    }
                  </div>
                  <div className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">
                  {
                      children?.map(({name, slide, child}, index) => {
                        if (name === "Blog"){
                          return (
                            <>
                            <h5>{name}</h5>
                            {
                              child.map(({img, title, descript, date}, index) => {
                                return (
                                  <ul className="storyhome__coffeeholic--item col-lg-12 col-md-12 col-sm-12 col-12">
                                    <NavLink><li className="storyhome__coffeeholic--item col-lg-6 col-md-12 col-sm-12 col-12">                                 
                                        <ul className="coffeeholic__item--child col-lg-12 col-md-12 col-sm-12 col-12">
                                          <li className='item__child--left col-lg-4 col-md-5 col-sm-6 col-6'><img src={img} alt="" /></li>
                                          <li className='item__child-right col-lg-8 col-md-7 col-sm-6 col-6 px-3'>
                                            <h4>{title}</h4>
                                            <span>{date}</span>
                                            <p>{descript}</p>
                                          </li>
                                        </ul>
                                    </li></NavLink>
                                  </ul>
                                )
                              })  
                            }
                            <a href="" className="coffeeholic__item--button">Tìm hiểu thêm</a>
                            </>
                          )
                          }
                        })
                    }
                  </div>
                  </>
                )
              })
            }
      </div>
    </section>
  )
}

export default CoffeeStory