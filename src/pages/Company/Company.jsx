import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import style from "./Company.module.css";
import {SHOP_ROUTE} from "../../utils/consts";
import CrownSvg from "../../assets/AboutCompany/Page/Crown.svg";
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import FirstImg from '../../assets/AboutCompany/Page/1.jpg';
import SecondImg from '../../assets/AboutCompany/Page/2.jpg';
import ThirdImg from '../../assets/AboutCompany/Page/3.jpg';
import FourthImg from '../../assets/AboutCompany/Page/4.jpg';
import FirstPrivilegeSvg from '../../assets/AboutCompany/Page/PrivilegeBlock/1.svg';

const Company = () => {
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
                            <div>Полезно</div>
                            <div className={style.content__top__separator}>/</div>
                            <div>О компании</div>
                        </div>
                        <div className={style.content__top__second}>
                            <div className={style.content__top__second__svg}>
                                <img src={CrownSvg} alt=""/>
                            </div>
                            <div className={style.content__top__second__text}>О компании</div>
                        </div>
                    </div>
                    <div className={style.content__main}>
                        <div className={style.content__main__first}>
                            <div className={style.content__main__first__left}>
                                <img src={FirstImg} alt=""/>
                            </div>
                            <div className={style.content__main__first__right}>
                                <div className={style.title}>
                                    История компании
                                </div>
                                <h1>Торгово-производственная компания «Парус» была основана в 2008 г. и являлась единственной по покраске ДВП на всей территории Республики Башкортостан.</h1>
                                <div className={style.stroke}></div>
                                <h2><span>С 2010г.</span> наша компания занимает одну из лидирующих позиций по поставке комплектующих для мебели и ЛДСП.</h2>
                                <h2><span>За 13 лет успешной работы</span> зарекомендовали себя как ведущее торгово-производственное предприятие не только в городе Уфа, но и по всей Республике Башкортостан и даже за ее пределами. Наработали большой профессиональный опыт.</h2>
                                <h3>Благодаря этому компания <span>«Парус»</span> ценится как выгодный, ответственный и надежный поставщик на мебельном рынке.</h3>
                                <h2><span>Наша цель -</span> это построение долгосрочных и взаимовыгодных партнерских связей с
                                    поставщиками и покупателями, формирование уникального предложения для производителей мебели.</h2>
                            </div>
                        </div>
                        <div className={style.content__main__second}>
                            <div className={style.title}>
                                География
                            </div>
                            <h1>Наши филиалы находятся в разных частях города Уфа, за счет этого мы можем обеспечить минимальные транспортные и временные издержки для наших клиентов.</h1>
                            <div className={style.stroke}></div>
                            <h2>Задача оптового отдела продаж расширение географии поставок и обеспечение стабильных отгрузок по территории Республики Башкортостан.</h2>
                        </div>
                        <div className={style.content__main__third}>
                            <div className={style.content__main__third__left}>
                                <img src={SecondImg} alt=""/>
                            </div>
                            <div className={style.content__main__third__right}>
                                <div className={style.stroke}></div>
                                <div className={style.title}>
                                    Работа с клиентами
                                </div>
                                <h1>Постоянными клиентами торгово-производственной компании «Парус» являются крупные мебельные компании Республики Башкортостан и ближайших регионов, мелкосерийные производители, изготовители мебели на заказ, рекламные,
                                    строительные компании и дизайн студии.</h1>
                                <h2>
                                    В целях постоянного развития наша компания мониторит последние тенденции на мебельном рынке, изучение дает возможность улучшить эффективность работы наших подразделений и расширение ассортимент предлагаемых материалов и комплектующих.
                                </h2>
                            </div>
                        </div>
                        <div className={style.content__main__fourth__wrapper}>
                            <div className={style.content__main__fourth}>
                                <div className={style.content__main__fourth__top}>
                                    <h1>
                                        Наши преимущества
                                    </h1>
                                    <h2>Благодаря своему опыту и ответственности перед клиентами компания <span>«Парус»</span> завоевала почетное место на рынке сбыта в своей области. Для каждого нашего клиента есть свои причины сотрудничать с нами, перечислить их все невозможно</h2>
                                </div>
                                <div className={style.content__main__fourth__bottom}>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>У нас есть возможность поддерживать конкурентоспособные цены на весь ассортимент поставляемой продукции, за счет активной работе напрямую с производителями;</h3>
                                    </div>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>Мы предлагаем своим клиентам эксклюзивные предложения, что дает им возможность выделиться на насыщенном конкурентном рынке;</h3>
                                    </div>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>Честность наша компания гарантирует любому
                                            клиенту, так как от этого качества напрямую
                                            зависит развитие бизнеса.</h3>
                                    </div>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>Постоянно обновляем ассортимента продукции и соответствуем актуальным тенденциям, мы идем в ногу со временем;
                                            Продукция поставляется в соответствии с согласованным планом;</h3>
                                    </div>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>Продукция поставляется в соответствии с согласованным планом;</h3>
                                    </div>
                                    <div className={style.content__main__fourth__bottom__block}>
                                        <div>
                                            <img src={FirstPrivilegeSvg} alt=""/>
                                        </div>
                                        <h3>Высокий уровень сервиса и профессиональное обслуживание;</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.content__main__fifth}>
                            <div className={style.content__main__fifth__left}>
                                <img src={ThirdImg} alt=""/>
                            </div>
                            <div className={style.content__main__fifth__right}>
                                <h2><span>«Парус»</span> заботится о своих клиентах и выполняет все их требования и желания, поэтому имеет много положительных отзывов о своей работе.</h2>
                                <h3>Наша компания стремится иметь долгосрочные и взаимовыгодные отношения, поэтому идёт на встречу любому клиенту.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Company;