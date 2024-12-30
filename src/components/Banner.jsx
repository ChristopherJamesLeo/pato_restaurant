import React, { useEffect, useState } from "react";

import { Link , useLocation} from "react-router-dom";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";


const Banner = () => {

    const owlOptions = {
        items : 1,
        nav : true,
        dots : true,
        loop : true,
        autoplay : true,
    }
    return (
        <>
            <section className="banner_section">
                <OwlCarousel id="banner_carousel" className="owl-carousel owl-loaded owl-theme" {...owlOptions}>
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item">
                                <div className="banner_carousel_container" style={
                                    {
                                        backgroundImage : `url('./../../public/imgs/banners/bg-title-page-01.jpg.webp')`
                                    }
                                }>
                                    <div className="row h-100 justify-content-center align-items-center p-0 m-0 ">
                                        <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                            <div className="banner_sub_title b_1 animate__animated" >
                                                <span className="fw-bold">Welcome To</span>
                                            </div>
                                            <div className="my-4 banner_title b_1 animate__animated">
                                                <h1 className="text-uppercase fw-bold">PATO PLACE</h1>
                                            </div>
                                            <div className="banner_btn_container b_1 animate__animated">
                                                <a href="#" className="nav-link d-inline-block banner_btn">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="banner_carousel_container" style={
                                    {
                                        backgroundImage : `url('./../../public/imgs/banners/master-slides-01.jpg.webp')`
                                    }
                                }>
                                    <div className="row h-100 justify-content-center align-items-center p-0 m-0 ">
                                        <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                            <div className="banner_sub_title b_2 animate__animated" >
                                                <span className="fw-bold">Welcome To</span>
                                            </div>
                                            <div className="my-4 banner_title b_2 animate__animated">
                                                <h1 className="text-uppercase fw-bold">PATO PLACE</h1>
                                            </div>
                                            <div className="banner_btn_container b_2 animate__animated">
                                                <a href="#" className="nav-link d-inline-block banner_btn">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="banner_carousel_container" style={
                                    {
                                        backgroundImage : `url('./../../public/imgs/banners/master-slides-02.jpg.webp')`
                                    }
                                }>
                                    <div className="row h-100 justify-content-center align-items-center p-0 m-0 ">
                                        <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                            <div className="banner_sub_title b_3 animate__animated" >
                                                <span className="fw-bold">Welcome To</span>
                                            </div>
                                            <div className="my-4 banner_title b_3 animate__animated">
                                                <h1 className="text-uppercase fw-bold">PATO PLACE</h1>
                                            </div>
                                            <div className="banner_btn_container b_3 animate__animated">
                                                <a href="#" className="nav-link d-inline-block banner_btn">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

            </section>
        </>
    )
}

export default Banner;