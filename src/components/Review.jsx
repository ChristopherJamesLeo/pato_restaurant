import React from "react"


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Review = () => {
    const reviewOptions = {
        items : 1,
        nav : true,
        dots : true,
        loop : true,
        autoplay : true,
    }
    return (
        <>
            {/* <!-- start review section --> */}
            <section>
                <div className="py-5 review_section">
                    <div className="container">
                        {/* <!-- start global title --> */}
                        <div className="wow animate__jello mb-5 text-center global_title_container">
                            <span className="text-captialize global_subtitle">Customers Say</span>
                            <h2 className="text-uppercase global_titile">Review</h2>
                        </div>
                        {/* <!-- end global title --> */}

                        <div className="review_carousel_continer">
                            <OwlCarousel id="review_carousel" className="owl-carousel owl-loaded owl-theme" {...reviewOptions}>
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                        <div className="owl-item">
                                            <div className="py-5 review_content_container">
                                                <div className="review_avator_container">
                                                    <div className="mx-auto review_avator animate__animated review_ava_ani">
                                                        <img src="./../../public/imgs/profiles/avatar-01.jpg.webp" style={{ objectFit: "cover" }} width="100%" height="100%" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pt-2 animate__animated review_content_ani">
                                                    {/* <!-- start global para --> */}
                                                    <div className="py-2 text-center global_para">
                                                        <p>
                                                            “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                                                        </p>
                                                    </div>
                                                    {/* <!-- end global para --> */}
                                                    {/* <!-- start start  --> */}
                                                    <div className="text-center rating_container">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    {/* <!-- end start --> */}
                                                    {/* <!-- avator name --> */}
                                                    <div className="text-center avator_name">
                                                        <span className="text-uppercase">marie simmons - new york</span>
                                                    </div>
                                                    {/* <!-- end avator name --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="py-5 review_content_container">
                                                <div className="review_avator_container">
                                                    <div className="mx-auto review_avator animate__animated review_ava_ani">
                                                        <img src="./../../public/imgs/profiles/avatar-05.jpg.webp" style={{ objectFit: "cover" }} width="100%" height="100%" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pt-2 animate__animated review_content_ani">
                                                    {/* <!-- start global para --> */}
                                                    <div className="py-2 text-center global_para">
                                                        <p>
                                                            “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                                                        </p>
                                                    </div>
                                                    {/* <!-- end global para --> */}
                                                    {/* <!-- start start  --> */}
                                                    <div className="text-center rating_container">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    {/* <!-- end start --> */}
                                                    {/* <!-- avator name --> */}
                                                    <div className="text-center avator_name">
                                                        <span className="text-uppercase">marie simmons - new york</span>
                                                    </div>
                                                    {/* <!-- end avator name --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="py-5 review_content_container">
                                                <div className="review_avator_container">
                                                    <div className="mx-auto review_avator animate__animated review_ava_ani">
                                                        <img src="./../../public/imgs/profiles/avatar-04.jpg.webp" style={{ objectFit: "cover" }} width="100%" height="100%" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pt-2 animate__animated review_content_ani">
                                                    {/* <!-- start global para --> */}
                                                    <div className="py-2 text-center global_para">
                                                        <p>
                                                            “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
                                                        </p>
                                                    </div>
                                                    {/* <!-- end global para --> */}
                                                    {/* <!-- start start  --> */}
                                                    <div className="text-center rating_container">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    {/* <!-- end start --> */}
                                                    {/* <!-- avator name --> */}
                                                    <div className="text-center avator_name">
                                                        <span className="text-uppercase">marie simmons - new york</span>
                                                    </div>
                                                    {/* <!-- end avator name --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end review section --> */}
        </>
    )
}

export default Review;
