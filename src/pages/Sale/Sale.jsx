import React from 'react';
import style from './Sale.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SalePageImage from '../../assets/Sale/SalePageImage.jpg'
import SaleSvg from '../../assets/Sale/Sale.svg'
import {SHOP_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import SaleOnSalePage from "../../components/Sale/SaleOnSalePage";

const Sale = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar/>
            <div className={style.content__wrapper}>
                <div className={style.content}>
                    <div>
                        <div className={style.content__top}>
                            <div className={style.content__top__first}>
                                <div
                                    onClick={()=> navigate(SHOP_ROUTE)}
                                >
                                    Главная
                                </div>
                                <div className={style.content__top__separator}>/</div>
                                <div>Акции</div>
                            </div>
                            <div className={style.content__top__second}>
                                <div className={style.content__top__second__svg}>
                                    <img src={SaleSvg} alt=""/>
                                </div>
                                <div className={style.content__top__second__text}>Акции</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.content__moke}>
                        <img src={SalePageImage} alt=""/>
                    </div>
                    <div className={style.content__bottom}>
                        <SaleOnSalePage/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Sale;