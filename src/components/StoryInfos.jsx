import React, { useEffect, useState } from "react";


const StoryInfos = ({bol,subTit,tit,pra,pic}) => {
    return (
        <>

        {/* <!-- start intro welcome section --> */}
            <section>
                <div className="py-5 welcome_section">
                    <div className="container">
                        <div className={`row align-items-center ${bol ? "flex-row-reverse" : ""}`}>
                            <div className="col-lg-6 col-md-12 mb-3">
                                <div className="wow animate__jello text-center global_title_container">
                                    <span className="text-captialize global_subtitle">{subTit}</span>
                                    <h2 className="text-uppercase global_titile">{tit}</h2>
                                </div>
                                <div className="py-3 text-center global_para">
                                    <p>{pra}</p>
                                </div>
                            </div>
                            <div className="px-2 col-lg-6 col-md-12">
                                <div className="p-5 img_zoom_container">
                                    <div className="img_container">
                                        <img src={pic} width="100%" alt="our story" />
                                    </div>
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

export default StoryInfos;