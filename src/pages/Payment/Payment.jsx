import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import style from './Payment.module.css'
import Footer from "../../components/Footer/Footer";
import {SHOP_ROUTE} from "../../utils/consts";
import CardSvg from "../../assets/Card/Card.svg";
import {useNavigate} from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar/>
            <div className={style.content__wrapper}>
                <div className={style.content}>
                    <div className={style.content__top}>
                        <div className={style.content__top__first}>
                            <div
                                onClick={()=> navigate(SHOP_ROUTE)}
                            >
                                Главная
                            </div>
                            <div className={style.content__top__separator}>/</div>
                            <div>Оплата</div>
                        </div>
                        <div className={style.content__top__second}>
                            <div className={style.content__top__second__svg}>
                                <img src={CardSvg} alt=""/>
                            </div>
                            <div className={style.content__top__second__text}>Оплата</div>
                        </div>
                    </div>
                    <div className={style.content__main}>
                        <div className={style.content__main__top}>
                            Оплата в интернет-магазине <span>ТПК "Парус"</span> возможна наличными средствами в
                            кассе офиса или по безналичному расчету при заключении договора.
                        </div>
                        <div className={style.content__main__bottom}>
                            <div className={style.content__main__first}>
                                <div className={style.content__main__first__number}>1</div>
                                <div>Вы заказываете товар на сайте</div>
                            </div>
                            <div className={style.content__main__second}>
                                <div className={style.content__main__second__number}>2</div>
                                <div>Наш менеджер обрабатывает заявку и высылает Вам счет</div>
                            </div>
                            <div className={style.content__main__third}>
                                <div className={style.content__main__third__number}>3</div>
                                <div>После этого мы связываемся с Вами для подтверждения заказа</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Payment;