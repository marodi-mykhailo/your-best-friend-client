import React from 'react';
import s from './SecondSection.module.css'
import cat from '../../assets/images/cat.svg'
import heart from '../../assets/images/heart.svg'
import ClipPathButton from "../../CommonComponent/ClipPathButton/ClipPathButton";

const SecondSection = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <img className={s.cat} src={cat} alt={""}/>
                <div className={s.rightInfo}>
                    <h1 className={s.h1}>To jest Chmurka i ona szuka
                        właściciela!</h1>
                    <p className={s.p}>
                        Jesteś odpowiedzialną osobą? Chcesz zrobić
                        czyjeś życie lepszym? Jak najszybciej sprawdź,
                        kto obecnie szuka nowego domu!
                    </p>
                        <ClipPathButton text={"Więcej!"}/>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.leftInfo}>
                    <h1 className={s.h1}>Jesteś wolontariuszem?</h1>
                    <p className={s.p}>
                        Dołącz do naszego zespołu, pomóż
                        zwierzętkom poczuć trochę szczęścia!
                    </p>
                    <ClipPathButton text={"Zgloś zwierzaka!!"}/>
                </div>
                <img className={s.heart} src={heart} alt={""}/>
            </div>
        </section>
    );
};

export default SecondSection;
