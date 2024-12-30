import React,{useState} from "react";
import SubBanner from "../components/SubBanner";
import ReservationBox from "../components/ReservationBox";
import Footer from "../components/Footer";

const Reservation = () => {
    return (
        <>
            <div>
                <SubBanner title="Reservation" />
                <ReservationBox showImage={false} />
                <Footer />
            </div>
        </>
    )
}

export default Reservation;