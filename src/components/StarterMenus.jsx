import React, { useEffect, useState } from "react";


const StarterMenus = () => {
    return (
        <>
            <div className="mb-5 menu_list_container">
                <div className="mb-4 menu_list_title">
                    <h3 className="text-uppercase">Starters</h3>
                </div>
                <ul className="list-unstyled menu_list_group">
                    <li className="mb-3 menu_list_item">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="w-100 d-block nav-link text-uppercase">Pine nut sbrisalona</a>
                            <div className="d-block w-100 h-100 bg-primary menu_list_bg"></div>
                            <span>$29.79</span>
                        </div>
                        <p>
                            Sed fermentum eros vitae eros
                        </p>
                    </li>
                    <li className="mb-3 menu_list_item">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="w-100 d-block nav-link text-uppercase">AENEAN EU
                            </a>
                            <div className="d-block w-100 h-100 bg-primary menu_list_bg"></div>
                            <span>$19.35</span>
                        </div>
                        <p>
                            Feugiat maximus neque pharetra
                        </p>
                    </li>
                    <li className="mb-3 menu_list_item">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="w-100 d-block nav-link text-uppercase">SED FEUGIAT
                            </a>
                            <div className="d-block w-100 h-100 bg-primary menu_list_bg"></div>
                            <span>$12.19</span>
                        </div>
                        <p>
                            Proin lacinia nisl ut ultricies posuere nulla
                        </p>
                    </li>
                    <li className="mb-3 menu_list_item">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="w-100 d-block nav-link text-uppercase">CONSECTETUR
                            </a>
                            <div className="d-block w-100 h-100 bg-primary menu_list_bg"></div>
                            <span>$21.89</span>
                        </div>
                        <p>
                            Etiam cursus facilisis tortor
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StarterMenus;