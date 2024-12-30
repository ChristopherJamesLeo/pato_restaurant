import React,{useState} from "react";
import SubBanner from "../components/SubBanner";
import StarterMenus from "../components/StarterMenus";
import MainMenus from "../components/MainMenus";
import DrinkMenus from "../components/DrinkMenus";
import DessertMenus from "../components/DessertMenus";
import LunchMenus from "../components/LunchMenus";
import DinnerMenus from "../components/DinnerMenus";
import Footer from "../components/Footer";

const Menu = () => {
    return (
        <div>
            <SubBanner title="Pato Menu" />
            {/* <!-- start menu section --> */}
            <section class="my-5 py-5 menu_list_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-3">
                            <StarterMenus />
                            <DrinkMenus />
                        </div>
                        <div class="col-lg-6 col-md-12 mb-3">
                            <MainMenus />
                            <DessertMenus />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end menu section --> */}
            <LunchMenus />
            <DinnerMenus />

            <Footer />
        </div>

    )
}

export default Menu;