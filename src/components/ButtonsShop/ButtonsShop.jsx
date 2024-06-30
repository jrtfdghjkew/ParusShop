import React from 'react';
import './ButtonsShop.css'
const ButtonsShop = () => {
    return (
        <div className="container">
            <div className="buttons">
                <div className="btn">
                    <div className="btn__svg-left"></div>
                    <div>ЭЛЕКТРОННЫЕ КАТАЛОГИ</div>
                    <div className="btn-svg-right"></div>
                </div>
                <div className="btn">
                    <div className="btn__svg-left"></div>
                    <div>ВИДЕО ПО ПРОДУКЦИИ</div>
                    <div className="btn-svg-right"></div>
                </div>
                <div className="btn">
                    <div className="btn__svg-left"></div>
                    <div>ФОТОГАЛЕРЕЯ</div>
                    <div className="btn-svg-right"></div>
                </div>
                <div className="btn">
                    <div className="btn__svg-left"></div>
                    <div>СЕРТИФИКАТЫ</div>
                    <div className="btn-svg-right"></div>
                </div>
            </div>
        </div>
    );
};

export default ButtonsShop;