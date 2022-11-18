import React from 'react';
import Header from "../components/Layout/Header"
import BannerHome from "../components/Home/BannerHome"
import DisplayCards from "../components/Home/DisplayCards"
import Footer from "../components/Layout/Footer"

const Home = () => {
    return(
        <>
            <Header />
            <BannerHome />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home