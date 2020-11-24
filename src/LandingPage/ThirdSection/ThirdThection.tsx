import React from 'react';
import s from './ThirdSection.module.css'

import graph from "../../assets/images/graph.svg"
import graph2 from "../../assets/images/graph2.svg"
import people from "../../assets/images/people.svg"

const ThirdSection = () => {
    return (
        <section className={s.section}>
            <div className={s.item}>
                <img className={s.img} src={graph} alt={""}/>
                <p className={s.p}>Najlepszy spoleczny projekt 2019 (Wersja El-pizdabol)</p>
            </div>
            <div className={s.item}>
                <img className={s.img} src={graph2} alt={""}/>
                <p className={s.p}>97% zgłoszonych zwierząt znalazły nowy dom</p>
            </div>
            <div className={s.item}>
                <img className={s.img} src={people} alt={""}/>
                <p className={s.p}>Ponad 3000 wolontariuszów</p>
            </div>
        </section>
    );
};

export default ThirdSection;
