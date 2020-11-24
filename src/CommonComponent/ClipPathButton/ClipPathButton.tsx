import React from 'react';
import s from "./ClipPathButton.module.css";

type ClipPathButtonPropsButton = {
    text: string
}

const ClipPathButton = (props:ClipPathButtonPropsButton) => {
    return (
        <button className={s.btnWrap}>
            <span className={`${s.btn} ${s.btnWeird}`}>{props.text}</span>
        </button>
    );
};

export default ClipPathButton;
