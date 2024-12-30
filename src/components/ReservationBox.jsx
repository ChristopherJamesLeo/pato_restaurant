import React from "react"

const ReservationBox = ({showImage}) => {
    function showImageFun(bool){
        if(bool){
            return(
                <div class="px-1 col-lg-5 col-md-12 mb-2">
                    {/* <!-- start image zoom --> */}
                    <div class="img_zoom_container">
                        <div class="img_container">
                            <img src="./../../public/imgs/gallery/booking-01.jpg.webp" width="100%" alt="our story" />
                        </div>
                    </div>
                    {/* <!-- end image zoom --> */}
                </div>
            )
        }
    };
    return (
        <>
            {/* <!-- start reservation section --> */}
            
            <section >
                <div className="py-5 reservation_section">
                    <div className="container">
                        <div className={`row ${!showImage ? "justify-content-center" : ""}`}>
                            <div className={`col-md-12 mb-2 ${!showImage ? "col-lg-8" : "col-lg-7"}`}>
                                {/* <!-- start global title --> */}
                                <div className="wow animate__jello mb-5 text-center global_title_container">
                                    <span className="text-captialize global_subtitle">Reservation</span>
                                    <h2 className="text-uppercase global_titile">Book table</h2>
                                </div>
                                {/* <!-- end global title --> */}
                                <div id="reservation_form" className="reservation_form">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 mb-2">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="selectdate">Date</label>
                                                    <input type="date" name="date" id="selectdate" className="form-control border-1 shadow-none outline-none" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="time">Time</label>
                                                    <input type="time" name="time" id="time" className="form-control border-1 shadow-none outline-none" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="">People</label>
                                                    <select name="people" id="" className="form-select border-1 shadow-none outline-none">
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 mb-2">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="username">Name</label>
                                                    <input type="text" name="username" id="username" className="form-control border-1 shadow-none outline-none" placeholder="Name" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" name="phone" id="phone" className="form-control border-1 shadow-none outline-none" placeholder="Phone" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="email">email</label>
                                                    <input type="email" name="email" id="email" className="form-control border-1 shadow-none outline-none" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className="text-uppercase reservation_btn">Book Table</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {showImageFun(showImage)}
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- end reservation section --> */}
        </>
    )
}

export default ReservationBox;
