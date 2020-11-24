import React from 'react';
import s from './FirstSection.module.css'
import ClipPathButton from "../../CommonComponent/ClipPathButton/ClipPathButton";

const FirstSection = () => {
    return (
        <section className={s.section}>
            <h1 className={s.h1}>Witamy!</h1>
            <p className={s.p}>Na tej stronie wszystkim
                darujemy szczęście!
            </p>
            <ClipPathButton text={"Poznaj Reguły!"}/>
        </section>
    );
};

export default FirstSection;
