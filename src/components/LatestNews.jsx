import React from "react"

const Welcome = () => {
    return (
        <>
    {/* <!-- start intro welcome section --> */}
    <section >
        <div className="py-5 welcome_section">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-lg-6 col-md-12 mb-3">
                        {/* <!-- start global title --> */}
                        <div className="wow animate__jello text-center global_title_container">
                            <span className="text-captialize global_subtitle">Italian Restaurant</span>
                            <h2 className="text-uppercase global_titile">Welcome</h2>
                        </div>
                        {/* <!-- end global title --> */}
                        {/* <!-- start global para --> */}
                        <div className="py-3 text-center global_para">
                            <p>
                                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque
                            </p>
                        </div>
                        {/* <!-- end global para --> */}

                        {/* <!-- start global button --> */}
                        <div className="text-center global_btn">
                            <a href="#" className="nav-link text-uppercase">our story <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                            </svg></a>
                        </div>
                        {/* <!-- end global button --> */}
                    </div>
                    <div className="px-2 col-lg-6 col-md-12">
                        
                        {/* <!-- start image zoom --> */}
                        <div className="p-5 img_zoom_container">
                            <div className="img_container">
                                <img src="./../../public/imgs/backgrounds/our-story-01.jpg.webp" width="100%" alt="our story"/>
                            </div>
                        </div>
                        {/* <!-- end image zoom --> */}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end intro welcome section --> */}
        </>
    )
}

export default Welcome;
