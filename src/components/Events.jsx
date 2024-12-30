import React from "react"


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Events = () => {

    const eventOptions = {
        items : 1,
        nav : true,
        dots : true,
        loop : true,
        autoplay : true,
    }
    return (
        <>
            {/* <!-- start events section --> */}
            <section>
                <div className="py-5 events_container">
                    <div className="container">
                        {/* <!-- start global title --> */}
                        <div className="wow animate__jello mb-5 text-center global_title_container">
                            <span className="text-captialize global_subtitle">Upcomming</span>
                            <h2 className="text-uppercase text-white global_titile">Our Menu</h2>
                        </div>
                        {/* <!-- end global title --> */}

                        <OwlCarousel id="events_carousel" className="pb-5 owl-carousel owl-loaded owl-theme" {...eventOptions}>
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <div className="owl-item">
                                        <div className="animate__animated a1 events_contents_container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="events_poster">
                                                        <img src="./../../public/imgs/gallery/event-01.jpg.webp" width="100%" alt="events" />
                                                        <div className="text-center events_date">
                                                            <span>
                                                                08:00 PM Tuesday - 21 November 2018
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="py-5 text-center event_contents">
                                                        {/* <!-- start card title --> */}
                                                        <a href="#" className="pb-3 nav-link text-uppercase card_type">
                                                            Wines Duing Specific nights
                                                        </a>
                                                        {/* <!-- end card title --> */}
                                                        {/* <!-- start global para --> */}
                                                        <div className="text-center global_para">
                                                            <p>
                                                                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                                            </p>
                                                        </div>
                                                        {/* <!-- end global para --> */}
                                                        {/* <!-- start event timer --> */}
                                                        <div className="py-3 row">
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="day" className="d-block timer">24</span>
                                                                    <span className="timer_caption">days</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="hour" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Hours</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="minute" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Minutes</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="second" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Seconds</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- end event timer --> */}
                                                        {/* <!-- start global button --> */}
                                                        <div className="text-center global_btn">
                                                            <a href="#" className="nav-link text-uppercase">view details <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                                            </svg></a>
                                                        </div>
                                                        {/* <!-- end global button --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="animate__animated a2 events_contents_container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="events_poster">
                                                        <img src="./../../public/imgs/gallery/event-02.jpg.webp" width="100%" alt="events" />
                                                        <div className="text-center events_date">
                                                            <span>
                                                                08:00 PM Tuesday - 21 November 2018
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="py-5 text-center event_contents">
                                                        {/* <!-- start card title --> */}
                                                        <a href="#" className="pb-3 nav-link text-uppercase card_type">
                                                            Wines Duing Specific nights
                                                        </a>
                                                        {/* <!-- end card title --> */}
                                                        {/* <!-- start global para --> */}
                                                        <div className="text-center global_para">
                                                            <p>
                                                                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                                            </p>
                                                        </div>
                                                        {/* <!-- end global para --> */}
                                                        {/* <!-- start event timer --> */}
                                                        <div className="py-3 row">
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="day" className="d-block timer">24</span>
                                                                    <span className="timer_caption">days</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="hour" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Hours</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="minute" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Minutes</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="second" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Seconds</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- end event timer --> */}
                                                        {/* <!-- start global button --> */}
                                                        <div className="text-center global_btn">
                                                            <a href="#" className="nav-link text-uppercase">view details <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                                            </svg></a>
                                                        </div>
                                                        {/* <!-- end global button --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="animate__animated a3 events_contents_container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="events_poster">
                                                        <img src="./../../public/imgs/gallery/event-06.jpg.webp" width="100%" alt="events" />
                                                        <div className="text-center events_date">
                                                            <span>
                                                                08:00 PM Tuesday - 21 November 2018
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="py-5 text-center event_contents">
                                                        {/* <!-- start card title --> */}
                                                        <a href="#" className="pb-3 nav-link text-uppercase card_type">
                                                            Wines Duing Specific nights
                                                        </a>
                                                        {/* <!-- end card title --> */}
                                                        {/* <!-- start global para --> */}
                                                        <div className="text-center global_para">
                                                            <p>
                                                                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                                            </p>
                                                        </div>
                                                        {/* <!-- end global para --> */}
                                                        {/* <!-- start event timer --> */}
                                                        <div className="py-3 row">
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="day" className="d-block timer">24</span>
                                                                    <span className="timer_caption">days</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="hour" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Hours</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="minute" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Minutes</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="text-uppercase text-center timer_content">
                                                                    <span id="second" className="d-block timer">24</span>
                                                                    <span className="timer_caption">Seconds</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- end event timer --> */}
                                                        {/* <!-- start global button --> */}
                                                        <div className="text-center global_btn">
                                                            <a href="#" className="nav-link text-uppercase">view details <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#000000" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"/>
                                                            </svg></a>
                                                        </div>
                                                        {/* <!-- end global button --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* <!-- end events section --> */}
        </>
    )
}

export default Events;
