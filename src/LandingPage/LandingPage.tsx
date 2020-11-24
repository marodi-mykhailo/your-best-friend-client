import React from 'react';
import s from './LandingPage.module.css'
import LHeader from "./LHeader/LHeader";
import Container from "../CommonComponent/Container";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdThection";
import FourthSection from "./FourthSection/FourthSection";
import Footer from "./Footer/Footer";

const LandingPage = () => {
    return (
        <div className={s.wrapper}>
            <Container>
                <LHeader/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <Footer/>
            </Container>
        </div>
    );
};

export default LandingPage;
