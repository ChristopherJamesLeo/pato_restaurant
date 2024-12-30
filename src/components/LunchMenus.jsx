import React, { useEffect, useState } from "react";


const LunchMenus = () => {
    return (
        <>
    {/* <!-- start sub menu section --> */}
    <section>
        <div className="sub_menu_section" style={
            {
                backgroundImage: "url('./../../public/imgs/backgrounds/header-menu-01.jpg.webp')",
            }
        }>
            <div className="container">
                <div className="sub_menu_title">
                    <h1 className="text-center text-uppercase">lunch</h1>
                </div>
            </div>
        </div>
        <div className="my-5 sub_menu_list_container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <ul className="list-unstyled sub_menu_list_group">
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-01.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-02.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-03.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <ul className="list-unstyled sub_menu_list_group">
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-04.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-05.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3 sub_menu_list_items">
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        {/* <!-- start image zoom --> */}
                                        <div className="img_zoom_container">
                                            <div className="img_container">
                                                <img src="./../../public/imgs/products/lunch-06.jpg.webp" width="100%" alt="our story" />
                                            </div>
                                        </div>
                                        {/* <!-- end image zoom --> */}
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="sub_menu_content">
                                            <h4 className="text-uppercase">sed varius</h4>
                                            <p>Aenean pharetra tortor dui in pellentesque</p>
                                            <h5 className="">$29.75</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
        
    </section>
    {/* <!-- end sub menu section --> */}
        </>
    )
}

export default LunchMenus;