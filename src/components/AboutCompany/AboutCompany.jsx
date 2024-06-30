import React from 'react';
import style from './AboutCompany.module.css';
import AboutCompanyImgFirst from '../../assets/AboutCompany/AboutCompanyFirst.png'
import Logo from '../../assets/AboutCompany/Logo.jpg'
import ThirstPartner from '../../assets/AboutCompany/ThirdPartner.jpg'
import SecondPartner from '../../assets/AboutCompany/SecondPartner.jpg'
import ThirdPartner from '../../assets/AboutCompany/ThirdPartner.jpg'
import FourthPartner from '../../assets/AboutCompany/FourthPartner.jpg'

const AboutCompany = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.firstContainer}>
                <div className={style.firstContainer__top}>
                    <div className={style.firstContainer__images}>
                        <img src={AboutCompanyImgFirst} alt=""/>
                    </div>
                    <div className={style.firstContainer__info}>
                        <div className={style.firstContainer__info__title}>
                            О компании
                        </div>
                        <p>Торгово-производственная компания<b>«Парус»</b> была основана в 2008 г.</p>
                        <div className={style.firstContainer__info__first}>
                            За 13 лет успешной работы зарекомендовала себя как ведущее торгово-производственное предприятие не только в городе Уфа, но и по всей Республике Башкортостан и даже за её пределами.
                        </div>
                        <div className={style.firstContainer__info__second__line}></div>
                        <div className={style.firstContainer__info__third}>
                            Наши филиалы находятся в разных частях города Уфа, за счет этого мы можем обеспечить минимальные транспортные и временные издержки для наших клиентов.
                        </div>
                        <div className={style.firstContainer__info__fourth}>
                            Постоянными клиентами торгово-производственной компании «Парус» являются крупные мебельные компании Республики Башкортостан и ближайших регионов, мелкосерийные производители, изготовители мебели на заказ, рекламные, строительные компании и дизайн студии.
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.secondContainer__wrapper}>
                <div className={style.secondContainer}>
                    <div className={style.secondContainer__left}>
                        <div className={style.secondContainer__left__info__first}>Наша цель —</div>
                        <div className={style.secondContainer__left__info__second}>это построение долгосрочных взаимовыгодных партнерских связей с поставщиками и покупателями, формирование уникального предложения для производителей мебели.</div>
                        <button> Связаться с нами </button>
                    </div>
                    <div className={style.secondContainer__right}>
                        <img src={Logo} alt=""/>
                    </div>
                </div>
            </div>
            <div className={style.thirdContainer}>
                <div className={style.thirdContainer__title}>Наши партнеры</div>
                <div className={style.thirdContainer__content}>
                    <div><img src={ThirstPartner} alt=""/></div>
                    <div><img src={SecondPartner} alt=""/></div>
                    <div><img src={ThirdPartner} alt=""/></div>
                    <div><img src={FourthPartner} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;