import React,{useEffect, useState} from "react";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Place from "../components/Place";
import Menu from "../components/Menu";
import Events from "../components/Events";
import ReservationBox from "../components/ReservationBox";
import Review from "../components/Review";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WOW from "wowjs";
import "animate.css";

const Home = () => {

      useEffect(()=>{
      new WOW.WOW({
        live : false,
      }).init();
  },[])
    return (
        <div>
            <Banner />
            <Welcome />
            <Place />
            <Menu />
            <Events />
            <ReservationBox showImage={true} />
            <Review />
            <Blog />
            <Footer />
        </div>
     
    )
}

export default Home;