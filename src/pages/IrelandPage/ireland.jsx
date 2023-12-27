import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import './ireland.css'

const ireland = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="image-grid">
  <div class="image-row">
    <div class="image image-01"></div>  
    <div class="image image-02"></div>  
    <div class="image image-03"></div>  
  </div> 
  <div class="image-row">
    <div class="image image-04"></div>  
    <div class="image image-05"></div>  
  </div> 
  <div class="image-row">
    
    <div class="image image-06"></div>  
    <div class="image image-07"></div> 
  </div>   

</div>  

    <Footer />
    </>
  )
}

export default ireland