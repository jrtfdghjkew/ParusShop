import React from 'react';
import style from './Contacts.module.css';
import Navbar from "../../components/Navbar/Navbar";
import {SHOP_ROUTE} from "../../utils/consts";
import CallSvg from "../../assets/Contacts/Call.svg";
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import MapSvg from '../../assets/Contacts/MapImg.jpg'
import MessageSvg from '../../assets/Contacts/Message.svg'

const Contacts = () => {
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
                            <div>Контакты</div>
                        </div>
                        <div className={style.content__top__second}>
                            <div className={style.content__top__second__svg}>
                                <img src={CallSvg} alt=""/>
                            </div>
                            <div className={style.content__top__second__text}>Контакты</div>
                        </div>
                    </div>
                    <div className={style.content__main}>
                        <div className={style.content__main__left__wrapper}>
                            <div className={style.content__main__left}>
                                <div className={style.content__main__left__img}>
                                    <img src={MapSvg} alt=""/>
                                </div>
                                <div className={style.content__main__left__info}>
                                    <h1>г.Уфа, ул.Деревянная Переправа, 13/1</h1>
                                    <div className={style.content__main__left__info__first}>
                                        <div className={style.content__main__left__info__first__svg}>
                                            <img src={CallSvg} alt=""/>
                                        </div>
                                        <div className={style.content__main__left__info__first__contacts}>
                                            <h3>
                                                <span>8 (347) 266 03-07, </span>
                                                <span>8 (347) 216 03-47</span>
                                            </h3>
                                            <h4><span>Мобильный: </span>+7 (927) 952 03-07</h4>
                                        </div>
                                    </div>
                                    <div className={style.content__main__left__info__second}>
                                        <div className={style.content__main__left__info__second__img}>
                                            <img src={MessageSvg} alt=""/>
                                        </div>
                                        <div className={style.content__main__left__info__second__contacts}>
                                            <h3>zakaz@tpkparus.ru</h3>
                                            <h3>tpkparus@yandex.ru</h3>
                                        </div>
                                    </div>
                                    <button>Заказать звонок</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.content__main__right__wrapper}>
                            <div className={style.content__main__right}>
                                <div className={style.content__main__right__img}>
                                    <img src={MapSvg} alt=""/>
                                </div>
                                <div className={style.content__main__right__info}>
                                    <h1>г. Уфа, ул. Федоровская, д.9</h1>
                                    <div className={style.content__main__right__info__first}>
                                        <div className={style.content__main__right__info__first__img}>
                                            <img src={CallSvg} alt=""/>
                                        </div>
                                        <h3>8 (347) 216 03-48</h3>
                                    </div>
                                    <div className={style.content__main__right__info__second}>
                                        <div className={style.content__main__right__info__second__img}>
                                            <img src={MessageSvg} alt=""/>
                                        </div>
                                        <h3>tpkparus.sever@mail.ru</h3>
                                    </div>
                                    <button>Заказать звонок</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contacts;