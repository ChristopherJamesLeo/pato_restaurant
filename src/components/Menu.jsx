import React from "react";

const Menu = () => {
    return (
        <>
                {/* <!-- start menu section --> */}

                <section>
                    <div className="py-5 menu_section">
                        <div className="container">
                            {/* <!-- start global title --> */}
                            <div className="text-center global_title_container">
                                <span className="text-captialize global_subtitle">Discover</span>
                                <h2 className="text-uppercase global_titile">Our Menu</h2>
                            </div>
                            {/* <!-- end global title --> */}

                            {/* <!-- start our menu list --> */}
                            <div className="py-5 ourmenu_container">
                                <div className="ourmenu_lunch menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container">
                                        <div className="img_container">
                                            <img src="./../../public/imgs/gallery/our-menu-01.jpg.webp" width="100%" alt="our story"/>
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                    <span className="text-uppercase d-inline-block menu_title">Lunch</span>
                                </div>
                                <div className="ourmenu_dinner menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container">
                                        <div className="img_container">
                                            <img src="./../../public/imgs/gallery/our-menu-05.jpg.webp" width="100%" alt="our story"/>
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                    <span className="text-uppercase d-inline-block menu_title">dinner</span>
                                </div>
                                <div className="ourmenu_drink menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container">
                                        <div className="img_container">
                                            <img src="./../../public/imgs/gallery/our-menu-08.jpg.webp" width="100%" alt="our story"/>
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                </div>
                                <div className="ourmenu_starters menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container">
                                        <div className="img_container">
                                            <img src="./../../public/imgs/gallery/our-menu-10.jpg.webp" width="100%" alt="our story" />
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                    <span className="text-uppercase d-inline-block menu_title">starters</span>
                                </div>
                                <div className="ourmenu_happy menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container" style={{ height: "100%" }}>
                                        <div className="img_container" style={{ height: "100%" }}>
                                            <img src="./../../public/imgs/gallery/our-menu-13.jpg.webp" width="100%" height="100%" alt="our story" />
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                    <span className="text-uppercase d-inline-block menu_title">Happy Hour</span>
                                </div>
                                <div className="ourmenu_dessert menu_box">
                                    {/* <!-- start image zoom --> */}
                                    <div className="img_zoom_container">
                                        <div className="img_container">
                                            <img src="./../../public/imgs/gallery/our-menu-16.jpg.webp" width="100%" alt="our story" />
                                        </div>
                                    </div>
                                    {/* <!-- end image zoom --> */}
                                    <span className="text-uppercase d-inline-block menu_title">dessert</span>
                                </div>
                            </div>
                            {/* <!-- end our menu list --> */}
                        </div>
                    </div>
                </section>
            {/* <!-- end menu section --> */}
        </>
    )
}

export default Menu;
