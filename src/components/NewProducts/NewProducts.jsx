import React, {useState} from 'react';
import style from './NewProducts.module.css'
import Lightning from '../../assets/Lightning/lightning-svgrepo-com.svg'
import Arrow from '../../assets/Arrow/SaleArrow.svg'
import SaleItem from "../Sale/SaleItem/SaleItem";
import first from '../../assets/Sale/Крючок.jpeg'
import second from '../../assets/Sale/Крючок2.jpeg'
import third from '../../assets/Sale/L-профиль.jpg'
import fourth from '../../assets/Sale/Колесо-поворотное.webp'

const Sale = () => {
    const [saleItems, setSaleItems] = useState([
        {id: 1, img: first, name: 'Крючок ALBA K2342 2-х рожковый хром с перф', bottomText: 'Новинки', bottomTextColor: 'aqua'},
        {id: 2, img: third, name: 'L-образный профиль 4050мм черный', bottomText: 'Новинки', bottomTextColor: 'aqua'},
        {id: 3, img: second, name: 'Крючок R17 2-х рожковый, черный, матовый', bottomText: 'Новинки', bottomTextColor: 'aqua'},
        {id: 4, img: third, name: 'L-образный профиль 3050мм черный', bottomText: 'Новинки', bottomTextColor: 'aqua'},
        {id: 5, img: fourth, name: 'Колесо поворотное на площадке Д50мм белая', bottomText: 'Новинки', bottomTextColor: 'aqua'},
    ])

    return (
        <div className={style.sale__wrapper}>
            <div className={style.sale}>
                <div className={style.sale__title}>
                    <div className={style.sale__title__left}>
                        <div className={style.sale__title__left__text}>Новинки</div>
                        <div className={style.sale__title__left__svg}>
                            <img src={Lightning} alt=""/>
                        </div>
                    </div>
                    <div className={style.sale__title__right}>
                        <div className={style.sale__title__right__text}>Все товары</div>
                        <div className={style.sale__title__right__svg}>
                            <img src={Arrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.sale__main}>
                    {saleItems.map((item)=>
                        <SaleItem bottomText={item.bottomText} key={item.id} item={item}/>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Sale;