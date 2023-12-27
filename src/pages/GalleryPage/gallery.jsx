import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import './gallery.css'
import Function from '../../assets/function.jpeg'
import Allodiagroup from '../../assets/allodiagroup.jpeg'
import Anchor from '../../assets/anchor.jpeg'
import Award from '../../assets/award.jpeg'
import Cake from '../../assets/cake.jpeg'
import Celebration from '../../assets/celebration.jpeg'
import Childrens from '../../assets/childrens.jpeg'
import Cinemahall from '../../assets/cinemahall.jpeg'
import Drama from '../../assets/drama.jpeg'
import Dramas from '../../assets/dramas.jpeg'
import Filmfestival from '../../assets/filmfestival.jpeg'
import Gift from '../../assets/gift.jpeg'
import Girls from '../../assets/girls.jpeg'
import Group from '../../assets/group.jpeg'
import Guests from '../../assets/guests.jpeg'
import Hall from '../../assets/hall.jpeg'
import Honour from '../../assets/honour.jpeg'
import Pranam from '../../assets/pranam.jpeg'
import Selfie from '../../assets/selfie.jpeg'
import Tilak from '../../assets/tilak.jpeg'

const gallery = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div className='portfolio'>
    </div>

    <div class="gallery-sec">
    <h1 class="gallery-head">OUR SHOWCASES</h1>
    <p class="gallery-para">All odias in Ireland celebrate occasions.The Irish Odia Association's gallery encapsulates the vibrant essence of Odia culture and its dynamic community in Ireland. Through captivating images and visuals, our gallery showcases the richness of festivals, traditions, and events, fostering a sense of unity and pride among Odias, both within and beyond the emerald shores of Ireland.</p>
   
    <div class="gallery">
    <img className='' src={Function} alt="" />   
    <img className='' src={Allodiagroup} alt="" />
    <img className='' src={Anchor} alt="" />
    <img className='' src={Award} alt="" />
    <img className='' src={Cake} alt="" />
    <img className='' src={Celebration} alt="" />
    <img className='' src={Childrens} alt="" />
    <img className='' src={Cinemahall} alt="" />
    <img className='' src={Drama} alt="" />
    <img className='' src={Dramas} alt="" />
    <img className='' src={Filmfestival} alt="" />
    <img className='' src={Gift} alt="" />
    <img className='' src={Girls} alt="" />
    <img className='' src={Group} alt="" />
    <img className='' src={Guests} alt="" />
    <img className='' src={Hall} alt="" />
    <img className='' src={Honour} alt="" />
    <img className='' src={Pranam} alt="" />
    <img className='' src={Selfie} alt="" />
    <img className='' src={Tilak} alt="" />
  </div>
  </div>
    <Footer />
    </>
  )
}

export default gallery