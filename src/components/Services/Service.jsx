import React, {useRef} from 'react';
import './Services.css'
import useHover from "../../hooks/useHover";

const Service = ({service}) => {
    const ref = useRef()
    const isHovering = useHover(ref)
    return (
        <div
            ref={ref}
            className="service__wrapper"
            style={{background: isHovering ? '' : 'white' ,color: isHovering ? 'white' : 'black'
            }}
        >
            <div className="service">
                <div className="service__title">
                    {service.title}
                </div>
                <div className="service__info">
                    {service.info}
                </div>
                    <div className="service__img">
                        <img src={service.img} alt=""/>
                        <button
                            className="service__description"
                            style={{background: isHovering ? '#ffb811': 'transparent',
                            color: isHovering ? 'black' : 'aqua',
                            border: isHovering ? 'none' : '1px solid aqua'
                            }}
                        >
                            Подробнее
                        </button>
                    </div>
            </div>

        </div>
    );
};

export default Service;