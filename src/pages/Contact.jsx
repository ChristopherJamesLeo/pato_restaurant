import React,{useState} from "react";
import SubBanner from "../components/SubBanner";
import Map from "../components/Map";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <SubBanner title="Contact" />
            <Map />
            <ContactBox />
            <Footer />
        </div>

    )
}

export default Contact;