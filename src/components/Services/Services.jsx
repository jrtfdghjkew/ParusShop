import React, {useState} from 'react';
import Service from "./Service";
import firstImg from '../../assets/Services/first.jpg';
import secondImg from '../../assets/Services/second.jpg';
import thirdImg from '../../assets/Services/third.jpg';
import fourthImg from '../../assets/Services/foutrh.jpg';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([
        {id: 1, title: 'Распил', info: 'Выполняем заказы по распилу и раскрою ЛДСП для розничных предприятий и частных клиентов.', img: firstImg},
        {id: 1, title: 'Кромление', info: 'Принимаем заказы на кромление деталей мебели, раскроенных на нашем оборудовании.', img: secondImg},
        {id: 1, title: 'Присадка', info: 'Сверление глухих или сквозных отверстий в мебельной заготовке для всех видов крепежа.', img: thirdImg},
        {id: 1, title: 'Доставка', info: 'Наша компания предоставляет профессиональные услуги доставки.', img: fourthImg},
    ])
    return (
        <div className="services__wrapper">
            <div className="services__title">
                <div className="services__title-text">
                    <div className="services__title-text-left">Н</div>
                    <div className="services__title-text-right">аши услуги</div>
                </div>
            </div>
            <div className="services">
                {services.map((service)=>
                    <Service key={service.id} service={service}/>
                )}
            </div>
        </div>
    );
};

export default Services;