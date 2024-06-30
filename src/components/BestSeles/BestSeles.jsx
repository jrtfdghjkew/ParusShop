import React, {useState} from 'react';
import style from './BestSeles.module.css'
import Crown from '../../assets/Crown/crown-svgrepo-com.svg'
import Arrow from '../../assets/Arrow/SaleArrow.svg'
import SaleItem from "../Sale/SaleItem/SaleItem";
import first from '../../assets/Sale/Крючок.jpeg'
import second from '../../assets/Sale/Крючок2.jpeg'
import third from '../../assets/Sale/L-профиль.jpg'
import fourth from '../../assets/Sale/Колесо-поворотное.webp'

const BestSeles = () => {
    const [saleItems, setSaleItems] = useState([
        {id: 1, img: first, name: 'Крючок ALBA K2342 2-х рожковый хром с перф', bottomText: 'Хит продаж', bottomTextColor: '#ffb811'},
        {id: 2, img: third, name: 'L-образный профиль 4050мм черный', bottomText: 'Хит продаж', bottomTextColor: '#ffb811'},
        {id: 3, img: second, name: 'Крючок R17 2-х рожковый, черный, матовый', bottomText: 'Хит продаж', bottomTextColor: '#ffb811'},
        {id: 4, img: third, name: 'L-образный профиль 3050мм черный', bottomText: 'Хит продаж', bottomTextColor: '#ffb811'},
        {id: 5, img: fourth, name: 'Колесо поворотное на площадке Д50мм белая', bottomText: 'Хит продаж', bottomTextColor: '#ffb811'},
    ])
    return (
        <div className={style.sale__wrapper}>
            <div className={style.sale}>
                <div className={style.sale__title}>
                    <div className={style.sale__title__left}>
                        <div className={style.sale__title__left__text}>Хиты продаж</div>
                        <div className={style.sale__title__left__svg}>
                            <img src={Crown} alt=""/>
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

export default BestSeles;