import React from 'react';
import s from './LHeader.module.css'
import ukraineLanguage from '../../assets/images/UkraineLanguage.svg'
import polishLanguage from '../../assets/images/PolishLanguage.svg'
import Dog from '../../assets/images/Dog.svg'

const LHeader = () => {
    return (
        <header className={s.header}>
            <div className={s.languageWrapper}>
                <img className={s.languageItem} src={ukraineLanguage} alt={""}/>
                <img className={s.languageItem} src={polishLanguage} alt={""}/>
            </div>
            <nav className={s.nav}>
                <ul className={s.ul}>
                    <li className={s.li}>Strona główna</li>
                    <li className={s.li}>Ogłoszenia prywatne</li>
                    <li style={{width: "210px"}}/>
                    <li><img src={Dog} className={s.dog} alt={""}/></li>
                    <li className={s.li}>Ogłoszenia od schronisk</li>
                    <li className={s.li}>O nas</li>
                </ul>
            </nav>
        </header>
    );
};

export default LHeader;
