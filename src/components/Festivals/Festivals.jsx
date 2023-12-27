import React from 'react'
import {Link} from 'react-router-dom'
import './Festivals.css';

const Festivals = () => {
  return (
   <>
<div class="festivals-container">
    <div class="festivals-content">
      <div class="festivals-header">
        About our festivals
      </div>
      <p class="festivals-description">
        We try to celebrate all types of Odia/Indian festivals like
      </p>
    <div class="main-container">
       <div class="card">
           <img src="https://imgeng.jagran.com/images/2023/apr/odisha-day-20231680320903573.jpg" alt=""/>
           <div class="card-body">
               <button class="btn">Utkal Divas</button>
           </div>
       </div>

     <div class="card">
        <img src="https://assets.telegraphindia.com/telegraph/21oriPAKHALfinal.jpg" alt=""/>
        <div class="card-body">
              <button class="btn">Pakhala Diwas</button>
        </div>
    </div>

    <div class="card">
        <img src="https://d1ttqxosekmk9r.cloudfront.net/posts/efd11f9a-a862-44c9-b0ac-c90388df9332_THUM1.jpg" alt=""/>
        <div class="card-body">
             <button class="btn">Raja</button>
        </div>
    </div>
   <div class="card">
        <img src="https://images.hindustantimes.com/bangla/img/2022/05/29/960x540/sabitri_brata_1653797698536_1653797704832.jpg" alt=""/>
        <div class="card-body">
        <button class="btn">Sabitri</button>
        </div>
    </div>
</div>
<div class="main-container">
       <div class="card">
           <img src="https://images.pexels.com/photos/17349035/pexels-photo-17349035/free-photo-of-rath-11.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
           <div class="card-body">
                 <button class="btn">Ratha yatra</button>
           </div>
       </div>
       <div class="card">
        <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2019/09/65303113_506019636605528_5326940429172357198_n.jpg?ssl=1" alt=""/>
        <div class="card-body">
                <button class="btn">Nuakhai Bhetghat</button>
        </div>
      </div>
    <div class="card">
        <img src="https://sambadenglish.com/wp-content/uploads/2020/11/kartika-purnima-741x430.jpg" alt=""/>
        <div class="card-body">
             <button class="btn">Kartika Purnami</button>
        </div>
    </div>
   <div class="card">
        <img src="https://www.infobowl.in/wp-content/uploads/2019/11/chhadakhai-odia-festival.jpg" alt=""/>
        <div class="card-body">
            <button class="btn">Chadakhai</button>
        </div>
    </div>
</div>

</div>
    <div class="load-more-button">
      <Link to='/festival'>
      <button>View More</button>
      </Link>
    </div>
</div>
   </>
  )
}

export default Festivals