import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <h1 className={s.h1}>Osoby prywatne</h1>
                <ul className={s.ul}>
                    <li className={s.li}>Ogłoszenia</li>
                    <li className={s.li}>Zgłoszenie zwierzaka</li>
                    <li className={s.li}>Q&A</li>
                </ul>
            </div>
            <div className={s.wrapper}>
                <h1 className={s.h1}>Schroniska</h1>
                <ul className={s.ul}>
                    <li className={s.li}>Ogłoszenia</li>
                    <li className={s.li}>Zgłoszenie zwierzaka</li>
                    <li className={s.li}>Q&A</li>
                </ul>
            </div>
            <div className={s.wrapper}>
                <h1 className={s.h1}>Wsparcie projektu</h1>
                <ul className={s.ul}>
                    <li className={s.li}>Kontakt</li>
                    <li className={s.li}>Konta bankowe</li>
                    <li className={s.li}>Nasze patreony</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
