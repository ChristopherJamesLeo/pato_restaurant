import React,{useEffect, useState} from "react";
import Footer from "../components/Footer";
import WOW from "wowjs";
import "animate.css";
import SubBanner from "../components/SubBanner";
import GalleryShow from "../components/GalleryShow";

const Home = () => {

      useEffect(()=>{
      new WOW.WOW({
        live : false,
      }).init();
  },[])
    return (
        <div>
            <SubBanner title={"Gallery"} />
            <div className="container"> 
                <GalleryShow />
            </div>
            <Footer />
        </div>
     
    )
}

export default Home;