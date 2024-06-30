import React from 'react';
import style from "./PriceList.module.css";
import FileSvg from "../../assets/Services/ServicesOnPage/FileSvg.svg";

const PriceList = () => {
    return (
        <div className={style.firstService__bottom}>
            <div className={style.firstService__bottom__left}>
                <h1>
                    Скачайте прайс-лист по нашим услугам
                </h1>
            </div>
            <div className={style.firstService__bottom__right__btn}>
                <h1>
                    Скачать
                </h1>
                <img src={FileSvg} alt=""/>
            </div>
        </div>
    );
};

export default PriceList;