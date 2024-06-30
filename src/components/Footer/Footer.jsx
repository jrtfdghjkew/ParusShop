import React from 'react';
import style from './Footer.module.css'
import Logo from '../../assets/Footer/LogoFooter.jpg'
import VK from '../../assets/SocialMedia/VK.svg'
import TG from '../../assets/SocialMedia//TG.svg'
import WTSP from '../../assets/SocialMedia/WTSP.svg'
import Arrow from '../../assets/Arrow/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg'

const Footer = () => {
    return (
        <footer className={style.footer__wrapper}>
            <div className={style.footer}>
                <div className={style.footer__top}>
                    <div className={style.footer__top__logo}>
                        <img src={Logo} alt=""/>
                    </div>
                    <div className={style.footer__top__info}>
                        <div className={style.footer__top__info__first}>
                            <div>г.Уфа, ул. Деревенская Переправа, д. 13/1</div>
                            <div>+7(347)266-03-07, 266-03-47</div>
                        </div>
                        <div className={style.footer__top__info__second}>
                            <div>г.Уфа, ул. Федоровская, д.9</div>
                            <div>+7(347)216-03-48</div>
                        </div>
                        <div className={style.footer__top__info__third}>
                            <div className={style.footer__top__info__third__top__wrapper}>
                                <div className={style.footer__top__info__third__top}>Напишите нам</div>
                            </div>
                            <div>ZAKAZPARUS@MAIL.RU</div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.footer__bottom}>
                    <div className={style.footer__bottom__first}>
                        <div className={style.footer__bottom__first__title}>Информация</div>
                        <div>Новости</div>
                        <div>Акции</div>
                        <div>О компании</div>
                        <div>Контакты</div>
                    </div>
                    <div className={style.footer__bottom__second}>
                        <div className={style.footer__bottom__second__title}>Полезно</div>
                        <div>Электронные каталоги</div>
                        <div>Видео по продукции</div>
                        <div>Фотогалерея</div>
                        <div>Сертификаты</div>
                    </div>
                    <div className={style.footer__bottom__third}>
                        <div className={style.footer__bottom__third__title}>Услуги</div>
                        <div>Распил</div>
                        <div>Кромление</div>
                        <div>Присадка</div>
                        <div>Сборка</div>
                        <div>Доставка</div>
                    </div>
                    <div className={style.footer__bottom__fourth}>
                        <button>
                            <div>Обратная связь</div>
                            <div>
                                <img
                                    className={style.footer__bottom__fourth__button__svg}
                                    src={Arrow}
                                    alt=""
                                />
                            </div>
                        </button>
                        <div className={style.footer__bottom__fifth}>
                            <div className={style.footer__bottom__fifth__title}>Мы в социальных сетях</div>
                            <div className={style.social__media__svg__wrapper}>
                                <div className={style.social__media__svg}>
                                    <div className={style.svg}>
                                        <img src={VK} alt=""/>
                                    </div>
                                    <div className={style.svg}>
                                        <img src={TG} alt=""/>
                                    </div>
                                    <div className={style.svg}>
                                        <img src={WTSP} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;