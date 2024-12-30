import React, { useEffect, useState } from "react";


const OurStory = () => {
    return (
        <>
                {/* <!-- start intro welcome section --> */}
                <section>
                    <div className="py-5 welcome_section">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-8 col-md-12 mb-3">
                                    <div className="wow animate__jello text-center global_title_container">
                                        <span className="text-captialize global_subtitle">Italian Restaurant</span>
                                        <h2 className="text-uppercase global_titile">Our Story</h2>
                                    </div>
                                    <div className="py-3 text-center global_para">
                                        <p>
                                            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* <!-- end intro welcome section --> */}
        </>
    )
}

export default OurStory;