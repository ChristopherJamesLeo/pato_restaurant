import React,{useState} from "react";
import SubBanner from "../components/SubBanner";
import OurStory from "../components/OurStory";
import StoryInfos from "../components/StoryInfos";
import Footer from "../components/Footer";

const About = () => {

    const storyInfos = [
        {
            bol : false,
            subTit : "Delicious",
            tit : "Recipes",
            pra : "Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id nequ",
            img : "./../../public/imgs/backgrounds/our-story-01.jpg.webp"
        },
        {
            bol : true,
            subTit : "Romantic",
            tit : "RESTAURANT",
            pra : "Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.",
            img : "./../../public/imgs/backgrounds/our-story-02.jpg.webp"
        },
       
    ]

    return (
        <div>
            <SubBanner title="About Us" />
            <OurStory />
            {
                storyInfos.map(function(storyInfo,idx){
                    return (
                        <StoryInfos key={idx} bol={storyInfo.bol} subTit = {storyInfo.subTit} tit = {storyInfo.tit} pra = {storyInfo.pra} pic = {storyInfo.img}/>
                    )
                })
            }
            <Footer />
           
        </div>
    )
}

export default About;