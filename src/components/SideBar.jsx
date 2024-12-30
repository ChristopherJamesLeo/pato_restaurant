import React from "react";

import { Link } from "react-router-dom";
import GalleryShow from "./GalleryShow";

const SideBar = ({open,openFun,navLists}) => {

    return ( 
        <div className={`p-5 navbar_slide_list_group ${open ? "active" : ""}`}>
            <div className="text-end">
                <button className="close_navbar_slide_btn" onClick={() => openFun(false)}>
                    <div></div>
                    <div></div>
                </button>
            </div>
            
            <ul className="text-center list-unstyled text-uppercase navbar_slide_list">
                {
                    navLists.map((navList,index) => { 
                        return (
                            <li key={index} className="py-2 navbar_slide_list_items">
                                <Link to={navList.link} className="nav-link">{navList.name}</Link>
                            </li>
                        )
                    } ) 
                }
            </ul>
            <div className="mt-5 nav_gallery_group">
                <h3 className="text-center">Gallery</h3>
                <GalleryShow />
            </div>
        </div>
    );
}

export default SideBar;