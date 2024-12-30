import React from "react";

const Place = () => {
    return (
        <>
    {/* <!-- start place section --> */}

    <section>
        <div className="place_section">
            <div className="py-5 place_section_title">
                <div className="container">
                    <div className="wow animate__jello py-5 text-center global_title_container">
                        <span className="text-captialize global_subtitle">Discover</span>
                        <h2 className="text-uppercase text-white global_titile">Pato Place</h2>
                    </div>
                </div>
            </div>
            <div className="py-5 container">
                <div className="py-5 row">
                    <div className="p-2 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="place_content_container">
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/intro-01.jpg.webp" width="100%" alt="our story" />
                                </div>
                            </div>
                            <a href="#" className="py-2 nav-link text-uppercase card_type">Romantic restaurant</a>
                            <div className="pb-2 text-start global_para">
                                <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                            </div>
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Learn More <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="place_content_container">
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/intro-02.jpg.webp" width="100%" alt="our story" />
                                </div>
                            </div>
                            <a href="#" className="py-2 nav-link text-uppercase card_type">Delicious Food</a>
                            <div className="pb-2 text-start global_para">
                                <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                            </div>
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Learn More <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="place_content_container">
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/intro-04.jpg.webp" width="100%" alt="our story" />
                                </div>
                            </div>
                            <a href="#" className="py-2 nav-link text-uppercase card_type">Red Wines You Love</a>
                            <div className="pb-2 text-start global_para">
                                <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                            </div>
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Learn More <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end place section --> */}
        </>
    )
}

export default Place;
