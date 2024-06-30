import React, {useEffect, useRef, useState} from 'react';
import ParusLogo from '../../assets/ParusLogo/LogoNavbar.jpg';
import Account from '../../assets/Account/account.svg';
import Basket from '../../assets/Basket/basket.svg';
import Favorites from '../../assets/Favorites/heart.svg';
import CatalogMenu from '../../assets/CatalogMenu/icons8-hamburger-menu.svg';
import Search from '../../assets/Search/icons8-search.svg';
import './Navbar.css'
import useHover from "../../hooks/useHover";
import {useNavigate} from "react-router-dom";
import {
    ABOUT_COMPANY_ROUTE,
    CONTACTS_ROUTE,
    PAYMENT_ROUTE,
    SALE_ROUTE,
    SERVICES_ROUTE,
    SHOP_ROUTE
} from "../../utils/consts";
import AuthorizationModal from "../Modal/AuthorizationModal";
const Navbar = () => {
    const [colorSale, setColorSale] = useState('#ffc42d')
    const navigate = useNavigate()

    const firstRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourthRef = useRef()
    const fifthRef = useRef()
    const sixthRef = useRef()
    const seventhRef = useRef()
    const isHoveringFirst = useHover(firstRef)
    const isHoveringSecond = useHover(secondRef)
    const isHoveringThird = useHover(thirdRef)
    const isHoveringFourth = useHover(fourthRef)
    const isHoveringFifth = useHover(fifthRef)
    const isHoveringSixth = useHover(sixthRef)
    const isHoveringSeventh = useHover(seventhRef)

    const [modalAuthActive, setModalAuthActive] = useState(false)
    console.log(modalAuthActive, 1)
    return (
        <div>
            <div className="container">
                <div className="navbar__top__wrapper">
                    <div className="navbar__top">
                        <div className="navbar__top__content">
                            <div className="navbar__top__content-text">Материалы для производства мебели</div>
                            <div className="navbar__top__content-text">Высокое качество по выгодной цене</div>
                        </div>
                    </div>
                </div>
                <div className="navbar__main__wrapper">
                    <div className="navbar__main">
                        <div className="navbar__main-left">
                            <div
                                onClick={()=> navigate(SHOP_ROUTE)}
                                className="navbar__main__logo"
                            >
                                <img src={ParusLogo} alt=""/>
                            </div>
                            <div className="navbar__main__address">
                                <div>г.Москва ул.Метелина, д.1</div>
                                <div className="navbar__main__address-telephone">+7-987-654-32-10</div>
                            </div>
                            <div className="navbar__main__address">
                                <div>г.Москва ул.Метелина, д.2</div>
                                <div className="navbar__main__address-telephone">+7-987-654-32-11</div>
                            </div>
                            <button className="navbar__main__call-order">Заказать звонок</button>
                        </div>
                        <div className="navbar__main-right">
                            <div

                                className="navbar__main-right-btn"
                                onClick={()=> setModalAuthActive(true)}
                            >
                                <div className="navbar__main-right-btn-svg">
                                    <img src={Account} alt=""/>
                                </div>
                                <div>Войти</div>
                                <AuthorizationModal active={modalAuthActive} setActive={setModalAuthActive}/>
                            </div>
                            <div className="navbar__main-right-btn">
                                <div className="navbar__main-right-btn-svg">
                                    <img src={Basket} alt=""/>
                                </div>
                                <div>Корзина</div>
                            </div>
                            <div className="navbar__main-right-btn">
                                <div className="navbar__main-right-btn-svg">
                                    <img src={Favorites} alt=""/>
                                </div>
                                <div>Избранное</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__bottom__wrapper">
                    <div className="navbar__bottom">
                        <div className="navbar__bottom-left">
                            <div className="navbar__bottom-left-btn">
                                <div className="navbar__bottom-left-btn-svg">
                                    <img src={CatalogMenu} alt=""/>
                                </div>
                                <div>КАТАЛОГ</div>
                            </div>
                            <div
                                ref={firstRef}
                                style={{background:
                                        ((isHoveringFirst) || (window.location.pathname == '/sale'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                    }}
                                className="navbar__bottom-left-btn"
                                onClick={()=> navigate(SALE_ROUTE)}
                            >
                                АКЦИИ
                            </div>
                            <div
                                ref = {secondRef}
                                style={{background:
                                        ((isHoveringSecond) || (window.location.pathname == '/services'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                                onClick={()=> navigate(SERVICES_ROUTE)}
                            >
                                УСЛУГИ
                            </div>
                            <div
                                ref = {thirdRef}
                                style={{background:
                                        ((isHoveringThird) || (window.location.pathname == '/about-company'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                                onClick={()=> navigate(ABOUT_COMPANY_ROUTE)}
                            >
                                О КОМПАНИИ
                            </div>
                            <div
                                ref = {fourthRef}
                                style={{background:
                                        ((isHoveringFourth) || (window.location.pathname == '/payment'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                                onClick={()=> navigate(PAYMENT_ROUTE)}
                            >
                                ОПЛАТА
                            </div>
                            <div
                                ref = {fifthRef}
                                style={{background:
                                        ((isHoveringFifth) || (window.location.pathname == '/qwe'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                            >
                                ДОСТАВКА
                            </div>
                            <div
                                ref = {sixthRef}
                                style={{background:
                                        ((isHoveringSixth) || (window.location.pathname == '/qwe'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                            >
                                ПОЛЕЗНО
                            </div>
                            <div
                                ref = {seventhRef}
                                style={{background:
                                        ((isHoveringSeventh) || (window.location.pathname == '/contacts'))
                                            ?
                                            `${colorSale}`
                                            :
                                            'transparent'
                                }}
                                className="navbar__bottom-left-btn"
                                onClick={()=> navigate(CONTACTS_ROUTE)}
                            >
                                КОНТАКТЫ
                            </div>
                        </div>
                        <div className="navbar__bottom-right">
                            <div className="navbar__bottom__search">
                                <input placeholder="Поиск" type="text"/>
                                <div className="navbar__bottom__search-svg">
                                    <img src={Search} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthorizationModal active={modalAuthActive} setActive={setModalAuthActive}/>
        </div>
    );
};

export default Navbar;