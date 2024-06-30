import React, {useRef, useState} from 'react';
import favorites from '../../../assets/Favorites/heart.svg'
import basket from '../../../assets/Basket/basket.svg'
import style from './SaleItem.module.css'
import useHover from "../../../hooks/useHover";


const SaleItem = ({item}) => {
    const FirstRef = useRef()
    const SecondRef = useRef()
    const [count, setCount] = useState(1)
    const FirstIsHovering = useHover(FirstRef)
    const SecondIsHovering = useHover(SecondRef)
    return (
        <div>
            <div className={style.saleItem}>
                <div className={style.saleItemInfo}>
                    <div className={style.saleItemInfo__img}>
                        <div style={{color: item.bottomTextColor}} className={style.saleItemInfo__text__top}>{item.bottomText}</div>
                        <img src={item.img} alt=""/>
                    </div>
                    <div className={style.saleItemInfo__text__main}>
                          {item.name}
                    </div>
                </div>
                <div className={style.saleItemBtns}>
                    <div className={style.saleItemBtns__left}>
                        <div
                            className={style.saleItemBtns__increment}
                            onClick={()=> setCount(count - 1)}
                        >
                            –
                        </div>
                        <div className={style.saleItemBtns__count}>{count}</div>
                        <div
                            className={style.saleItemBtns__decrement}
                            onClick={()=> setCount(count + 1)}
                        >
                            +
                        </div>
                    </div>
                    <div className={style.saleItemBtns__right}>
                        <div
                            ref={FirstRef}
                            className={style.saleItemBtns__right__favorites}
                            style={{backgroundColor: FirstIsHovering ? 'deepskyblue' : 'transparent'}}
                        >
                            <img style={{fill: FirstIsHovering ? 'white' : 'black'}} src={favorites} alt=""/>
                        </div>
                        <div
                            ref={SecondRef}
                            className={style.saleItemBtns__right__basket}
                            style={{backgroundColor: SecondIsHovering ? 'yellow' : 'transparent'}}
                        >
                            <img style={{fill: FirstIsHovering ? 'white' : 'black'}} src={basket} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleItem;