import React from "react"

const Blog = () => {
    return (
        <>
    {/* <!-- start latest news section --> */}
    <section>
        <div className="latest_news_section">
            <div className="container">
                {/* <!-- start global title --> */}
                <div className="wow animate__jello  mb-5 text-center global_title_container">
                    <span className="text-captialize global_subtitle">Latest News</span>
                    <h2 className="text-uppercase global_titile">THE BLOG</h2>
                </div>
                {/* <!-- end global title --> */}

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                        <div className="latest_news_content_container">
                            {/* <!-- start image zoom --> */}
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/blog-01.jpg.webp" width="100%" alt="our story" />
                                </div>
                                <div className="img_water_mark">
                                    <span>21 Dec 2017</span>
                                </div>
                            </div>
                            {/* <!-- end image zoom --> */}
                            <a href="#" className="py-2 nav-link text-uppercase card_type">BEST PLACES FOR WINE</a>
                            {/* <!-- start global para --> */}
                            <div className="pb-1 text-start global_para">
                                <p>
                                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                                </p>
                            </div>
                            {/* <!-- end global para --> */}
                            {/* <!-- start global button --> */}
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Continue Reading <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                            {/* <!-- end global button --> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                        <div className="latest_news_content_container">
                            {/* <!-- start image zoom --> */}
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/blog-02.jpg.webp" width="100%" alt="our story" />
                                </div>
                                <div className="img_water_mark">
                                    <span>21 Dec 2017</span>
                                </div>
                            </div>
                            {/* <!-- end image zoom --> */}
                            <a href="#" className="py-2 nav-link text-uppercase card_type">EGGS AND CHEESE</a>
                            {/* <!-- start global para --> */}
                            <div className="pb-1 text-start global_para">
                                <p>
                                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                                </p>
                            </div>
                            {/* <!-- end global para --> */}
                            {/* <!-- start global button --> */}
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Continue Reading <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                            {/* <!-- end global button --> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                        <div className="latest_news_content_container">
                            {/* <!-- start image zoom --> */}
                            <div className="img_zoom_container">
                                <div className="img_container">
                                    <img src="./../../public/imgs/gallery/blog-03.jpg.webp" width="100%" alt="our story" />
                                </div>
                                <div className="img_water_mark">
                                    <span>21 Dec 2017</span>
                                </div>
                            </div>
                            {/* <!-- end image zoom --> */}
                            <a href="#" className="py-2 nav-link text-uppercase card_type">STYLE THE WEDDING PARTY</a>
                            {/* <!-- start global para --> */}
                            <div className="pb-1 text-start global_para">
                                <p>
                                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                                </p>
                            </div>
                            {/* <!-- end global para --> */}
                            {/* <!-- start global button --> */}
                            <div className="text-start global_btn">
                                <a href="#" className="nav-link text-uppercase">Continue Reading <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                </svg></a>
                            </div>
                            {/* <!-- end global button --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end latest news section --> */}
        </>
    )
}

export default Blog;
