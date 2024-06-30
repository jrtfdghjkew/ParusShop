import React from 'react';
import style from './AddressWarehouse.module.css'
import MapAddress from '../../assets/AboutCompany/MapAddress.jpg'

const AddressWarehouse = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.Content}>
                <div className={style.Content__title}>Адреса складов</div>
                <div className={style.map__address}>
                    <img src={MapAddress} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AddressWarehouse;