import React, { useEffect, useState } from "react";

import { Link , useLocation} from "react-router-dom";

import SideBar from './SideBar';


const NavBar = () => {

    const [open,setOpen] = useState(false);

    const [activeLink , setActiveLink] = useState(null);

    const location = useLocation();

    // console.log(location.pathname);

    const navLists = [
        {link : "/", name : "Home"},
        {link : "/menu", name : "Menu"},
        {link : "/gallery", name : "Gallery"},
        {link : "/reservation", name : "Reservation"},
        {link : "/about", name : "About"},
        {link : "/contact", name : "Contact"},
    ]

    function activeLinkHandler(idx){
        setActiveLink(idx);
    }

    function sideBarHandler(){
        
        if(open){
            setOpen(false);
        }else {
            setOpen(true);
        }
    }


    window.addEventListener("click",function(e){
        if(!e.target.classList.contains("navbar_toggle")){
            setOpen(false);
        }
    })

    return (
        <nav className="">
            <div className=" nav_bar_line"> </div>
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="nav-brand">
                        <img src="./../../public/imgs/logos/logo.png.webp" width="130px" alt="" /> 
                    </Link>
                    <ul className="text-uppercase p-0 m-0 d-none d-lg-flex justify-content-center align-items-center list-unstyled">
                        {
                            navLists.map(function(navList,idx){
                                return (
                                    <li className="px-4 nav-item " key={idx}><Link to={navList.link} className={`nav-link scrollNav ${activeLink === idx ? "active" : ""}`} onClick={()=>{
                                        activeLinkHandler(idx);
                                    }}>{navList.name}</Link></li>
                                )
                            })
                        }

                    </ul>
                    <ul className="m-0 list-unstyled d-flex justify-content-center align-items-center">
                        <li className="px-2 nav-item"><Link to="#" className="nav-link"><i className="fab fa-google-plus"></i></Link></li>
                        <li className="px-2 nav-item"><Link to="#" className="nav-link"><i className="fab fa-facebook-f"></i></Link></li>
                        <li className="px-2 nav-item"><Link to="#" className="nav-link"><i className="fab fa-twitter"></i></Link></li>
                    </ul>
                    <button className={`border-0 navbar_toggle ${open ? "active" : ""}`} onClick={sideBarHandler}>
                        <div className="nav_bar"></div>
                        <div className="nav_bar"></div>
                    </button>
                </div>
                
           
            <SideBar open = {open} openFun = {setOpen} navLists={navLists}/>
        
      </nav>
    )
}

export default NavBar;