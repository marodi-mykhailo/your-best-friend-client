import React from 'react';
import s from './FourthSection.module.css'

import hands from '../../assets/images/hands.svg'

const FourthSection = () => {
    return (
        <section className={s.section}>
            <h1 className={s.h1}>Wsparcie międzynarodowe</h1>
            <img src={hands} className={s.img} alt={""}/>
            <p className={s.p}>
                Projekt jest poparty przez naszych wolontariuszów i schronisk
                na terenie Ukrainy, Polski, Litwy i Białorusi.
            </p>
        </section>
    );
};

export default FourthSection;
