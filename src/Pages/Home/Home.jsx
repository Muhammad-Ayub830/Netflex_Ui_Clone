import React from 'react'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Navbar from '../../Components/Navbar/Navbar'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-img' />
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>
                Discovering his ties to a secet ancient order,
                a young man living in moder Istabul embarks on a quest 
                to save the city from an immportal enemy
            </p>
            <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"BLockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Neflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
