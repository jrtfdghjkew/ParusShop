import React, {useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import style from "./Services.module.css";
import {SHOP_ROUTE} from "../../utils/consts";
import ServicesSvg from "../../assets/Services/Services.svg";
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import CallSvg from '../../assets/Services/ServicesOnPage/Call.svg';
import FileSvg from '../../assets/Services/ServicesOnPage/FileSvg.svg';
import firstImg from '../../assets/Services/ServicesOnPage/1.jpg';
import secondImg from '../../assets/Services/ServicesOnPage/2.jpg';
import PriceList from "../../components/PriceListOnServicePage/PriceList";
import thirdImg from '../../assets/Services/ServicesOnPage/3.jpg';
import fourthImg from '../../assets/Services/ServicesOnPage/4.jpg';
import fifthImg from '../../assets/Services/ServicesOnPage/5.jpg';

const Services = () => {
    const navigate = useNavigate();
    const [firstServiceActive, setFirstServiceActive] = useState(true);
    const [secondServiceActive, setSecondServiceActive] = useState(false);
    const [thirdServiceActive, setThirdServiceActive] = useState(false);
    const [fourthServiceActive, setFourthServiceActive] = useState(false);
    const [fifthServiceActive, setFifthServiceActive] = useState(false);
    const activeFirst = () => {
        if (!firstServiceActive) {
            setFirstServiceActive(true)
            setSecondServiceActive(false)
            setThirdServiceActive(false)
            setFourthServiceActive(false)
            setFifthServiceActive(false)
        } else {
            setFirstServiceActive(true)
        }
    }
    const activeSecond = () => {
        if (!secondServiceActive) {
            setFirstServiceActive(false)
            setSecondServiceActive(true)
            setThirdServiceActive(false)
            setFourthServiceActive(false)
            setFifthServiceActive(false)
        } else {
            setSecondServiceActive(true)
        }
    }
    const activeThird = () => {
        if (!thirdServiceActive) {
            setFirstServiceActive(false)
            setSecondServiceActive(false)
            setThirdServiceActive(true)
            setFourthServiceActive(false)
            setFifthServiceActive(false)
        } else {
            setThirdServiceActive(true)
        }
    }
    const activeFourth = () => {
        if (!fourthServiceActive) {
            setFirstServiceActive(false)
            setSecondServiceActive(false)
            setThirdServiceActive(false)
            setFourthServiceActive(true)
            setFifthServiceActive(false)
        } else {
            setFourthServiceActive(true)
        }
    }
    const activeFifth = () => {
        if (!fifthServiceActive) {
            setFirstServiceActive(false)
            setSecondServiceActive(false)
            setThirdServiceActive(false)
            setFourthServiceActive(false)
            setFifthServiceActive(true)
        } else {
            setFifthServiceActive(true)
        }
    }
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
                            <div>Услуги</div>
                        </div>
                        <div className={style.content__top__second}>
                            <div className={style.content__top__second__svg}>
                                <img src={ServicesSvg} alt=""/>
                            </div>
                            <div className={style.content__top__second__text}>Наши услуги</div>
                        </div>
                    </div>
                    <div className={style.content__main}>
                        <div className={style.content__main__left}>
                            <div className={style.content__main__left__services__btns}>
                                <button
                                    style={{background: firstServiceActive ? 'linear-gradient(to right bottom, #61d0ff, #005dff)' : 'transparent'}}
                                    onClick={()=> activeFirst()}
                                >
                                    Распил
                                </button>
                                <button
                                    style={{background: secondServiceActive ? 'linear-gradient(to right bottom, #61d0ff, #005dff)' : 'transparent'}}
                                    onClick={()=> activeSecond()}
                                >
                                    Кромление
                                </button>
                                <button
                                    style={{background: thirdServiceActive ? 'linear-gradient(to right bottom, #61d0ff, #005dff)' : 'transparent'}}
                                    onClick={()=> activeThird()}
                                >
                                    Присадка
                                </button>
                                <button
                                    style={{background: fourthServiceActive ? 'linear-gradient(to right bottom, #61d0ff, #005dff)' : 'transparent'}}
                                    onClick={()=> activeFourth()}
                                >
                                    Доставка
                                </button>
                                <button
                                    style={{background: fifthServiceActive ? 'linear-gradient(to right bottom, #61d0ff, #005dff)' : 'transparent'}}
                                    onClick={()=> activeFifth()}
                                >
                                    Сборка
                                </button>
                            </div>
                            <div className={style.content__main__left__services__info}>
                                {firstServiceActive &&
                                    <div className={style.firstService}>
                                        <div className={style.firstService__left}>
                                            <div className={style.firstService__top}>
                                                Выполняем заказы по распилу и раскрою ЛДСП для розничных предприятий и частных клиентов
                                            </div>
                                            <div className={style.firstService__main}>
                                                <div className={style.firstService__main__first}>
                                                    Резка и распиловка под заданным углом производится на форматно-раскроечном станке.
                                                </div>
                                                <div className={style.firstService__main__second}>
                                                    <div className={style.firstService__main__second__left}>
                                                        Минимиальный период выполнения заказа -
                                                    </div>
                                                    <div className={style.firstService__main__second__right}>
                                                        10 рабочих дней
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.firstService__bottom}>
                                                <div className={style.firstService__bottom__left}>
                                                    <div className={style.firstService__bottom__left__first}>
                                                        <h1>+7(123) 456 78-90</h1>
                                                        <h2>cоединить 110</h2>
                                                    </div>
                                                    <div className={style.firstService__bottom__left__second}>
                                                        <h1>+7(123) 456 78-09</h1>
                                                        <h2>(отдел производства)</h2>
                                                    </div>
                                                </div>
                                                <div className={style.firstService__bottom__right}>
                                                    <img src={CallSvg} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.firstService__right}>
                                            <img src={firstImg} alt=""/>
                                        </div>
                                    </div>
                                }
                                {secondServiceActive &&
                                    <div className={style.firstService}>
                                        <div className={style.firstService__left}>
                                            <div className={style.firstService__top}>
                                                Выполняем заказы на кромление деталей мебели, раскроенных на нашем оборудовании.
                                            </div>
                                            <div className={style.firstService__main}>
                                                <div className={style.firstService__main__first}>
                                                    После раскроя мебельных плит края срезов получаются шероховатыми, что не улучшает их прочность, отрицательно влияет
                                                    на внешний вид и безопасность. Чтобы нейтрализовать негативные факторы и блокировать испарения, используется кромление -
                                                    срез мебельной плиты закрывают кромкой.
                                                </div>
                                                <div className={style.firstService__main__second}>
                                                    <div className={style.firstService__main__second__left}>
                                                        В соответствии с современными стандартами производства мебели обработка
                                                        специальной кромкой всех торцов элементов из ЛДСП является обязательной операцией.
                                                    </div>
                                                </div>
                                            </div>
                                                <PriceList/>
                                        </div>
                                        <div className={style.firstService__right__second__img}>
                                            <img src={secondImg} alt=""/>
                                            <h3>
                                                В каталоге нашего предприятия представлены более ста декоров с разной шириной
                                                и толщиной. Такой ассортимент позволяет выбрать подходящий вариант кромки для любой мебельной детали.
                                            </h3>
                                        </div>
                                    </div>

                                }
                                {thirdServiceActive &&
                                    <div className={style.firstService}>
                                        <div className={style.firstService__left}>
                                            <div className={style.firstService__top}>
                                                Сверление глухих или сквозных отверстий в мебельной заготовке для всех видов крепежа.
                                            </div>
                                            <div className={style.firstService__main}>
                                                <div className={style.firstService__main__first}>
                                                   <div>
                                                       При создании мебели используются различные виды креплений:
                                                   </div>
                                                    <ul>
                                                        <li>Классические уголки и деревянные шканты;</li>
                                                        <li>Винтовые стяжки;</li>
                                                        <li>Болты с забивными гайками;</li>
                                                        <li>Эксцентрики, если крепления выполнены незаметно.</li>
                                                    </ul>
                                                </div>
                                                <div className={style.firstService__main__second}>
                                                    <div className={style.firstService__main__second__left}>
                                                        <h3>
                                                            Мебельный крепеж предполагает предварительную подготовку точно размеченных отверстий. Правильность
                                                            выполнения разметки определяет срок службы мебели, аккуратность ее внешнего вида и отсутствие проблем при сборке.
                                                        </h3>
                                                    </div>
                                                </div>
                                                <h4>
                                                    Мы выполняем отверстия под:
                                                </h4>
                                                <ul>
                                                    <li>Мебельные петли;</li>
                                                    <li>Шканты разного диаметра;</li>
                                                    <li>Стяжки винтами;</li>
                                                    <li>Уголки;</li>
                                                    <li>Петли;</li>
                                                    <li>Евровинт.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={style.firstService__right__third__img}>
                                            <img src={thirdImg} alt=""/>
                                            <PriceList/>
                                            <h3>
                                                Основой для заказа могут быть типовые схемы или индивидуальные чертежи, предоставляемые клиентом. Обязательное требование -
                                                указание точного расстояния между отверстиями и их размеров.
                                            </h3>
                                            <h4>
                                                Работа выполняется опытными мастерами на современном специальном оборудовании, что позволяет гарантировать аккуратность
                                                выполнения сверления, высокую точность полученных отверстий и безупречный внешний вид готовой мебели незаввисимо от
                                                материала её изготовления (ЛДСП, ДСП, МДФ, или фанера).
                                            </h4>
                                        </div>
                                    </div>

                                }
                                {fourthServiceActive &&
                                    <div className={style.firstService}>
                                        <div className={style.firstService__left}>
                                            <div className={style.firstService__top}>
                                                Наша команда предоставляет профессиональные услуги доставки.
                                            </div>

                                            <div className={style.firstService__main}>
                                                <div className={style.firstService__main__second__fourth__service}>
                                                    <h3>
                                                        При наличии товаров на складе клиент оформляет заказ и оплачивает<br/> его.
                                                        <span>Доставка производится в течение трех дней.</span>
                                                    </h3>
                                                </div>
                                                <div className={style.firstService__main__bottom}>
                                                    <h4>
                                                        При отсутствии товара на складе мы сообщим вам о его прибытии при помощи
                                                        уведомления с использованием любого канала связи, который вам удобен.
                                                    </h4>
                                                    <h4>
                                                        Мы стремимся использовать свой автопарк с максимальной отдачей. Если место
                                                        доставки совпадает с маршрутом транспортных средств, то возможна доставка
                                                        товара в день оформления заказа.
                                                    </h4>
                                                    <h4>
                                                        Это позволяет экономить Ваши деньги, ведь индивидуальная доставка связана с большими затратами.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.firstService__right__fourth__image}>
                                            <img className={style.firstService__right__fourth__image__img} src={fourthImg} alt=""/>
                                            <PriceList/>
                                        </div>
                                    </div>
                                }
                                {fifthServiceActive &&
                                    <div className={style.firstService}>
                                        <div className={style.firstService__left}>
                                            <div className={style.firstService__top}>
                                                Компания <span>Парус</span> предлагает услуги сборки раздвижных дверных систем.
                                            </div>

                                            <div className={style.firstService__main}>
                                                <div className={style.firstService__main__second__fourth__service}>
                                                    <h3>
                                                        Раздвижные двери нашей компании эффектны и функциональны, в них нет ничего лишнего. Такая конструкция сэкономит квадратные
                                                        метры и избавит вас от надоедливого скрипа, гармонично впишется в интерьер и даст простор дизайнерской мысли.
                                                    </h3>
                                                </div>
                                                <div className={style.firstService__main__bottom}>
                                                    <h4>
                                                        Заказы выполняются в кратчайшие сроки. Наши мастера -
                                                        высококвалифицированные специалисты с большим опытом работы в
                                                        этой области.
                                                    </h4>
                                                    <h4>
                                                        Специалисты нашей компании выполнят заказ в назначенное время, установка будет произведена с особой точностью, в вашем доме сохранится порядок и чистота.
                                                    </h4>
                                                    <h4>
                                                        Надежность выполняемых работ и длительный срок эксплуатации - гарантируется.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.firstService__right__fifth__image}>
                                            <img className={style.firstService__right__fifth__image__img} src={fifthImg} alt=""/>
                                            <PriceList/>
                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                        <div className={style.content__main__right}>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Services;