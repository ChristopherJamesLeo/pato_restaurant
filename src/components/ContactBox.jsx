import React, { useEffect, useState } from "react";


const ContactBox = () => {
    return (
        <>
            {/* <!-- start contact form  --> */}
            <section className="my-5">
                <div className="contact_section">
                    <div className="container">
                        <form action="" method="POST">
                            <h3 className="py-5 text-uppercase text-center">Send Us A Message</h3>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="username" id="" className="shadow-none outline-none form-control" placeholder="Name" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="email" name="email" id="" className="shadow-none outline-none form-control" placeholder="Email" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" name="phone" id="" className="shadow-none outline-none form-control" placeholder="Phone" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="10" className="form-control shadow-none outline-none" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="text-uppercase reservation_btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- end contact form --> */}
        </>
    )
}

export default ContactBox;