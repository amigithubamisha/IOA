import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner'
import Objective from '../../components/Objective/Objective'
import Festivals from '../../components/Festivals/Festivals'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <Banner />
    <Objective />
    <Festivals />
    <Footer />
    </>
  )
}

export default Homepage