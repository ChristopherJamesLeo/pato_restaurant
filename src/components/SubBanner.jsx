import React, { useEffect, useState } from "react";


const SubBanner = ({title}) => {
    return (
        <>
            {/* <!-- start sub banner section --> */}
            <section className="sub_banner_section">
                <div className="sub_banner_container">
                    <div className="container">
                        <div className="sub_banner_title">
                            <h1 className="text-center text-uppercase">{title}</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end sub banner section --> */}
        </>
    )
}

export default SubBanner;