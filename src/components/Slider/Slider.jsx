import React, {useEffect, useRef, useState} from 'react';
import Arrows from "./Arrows";
import Dots from "./Dots";
import Arrow from '../../assets/Arrow/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg'
import './Slider.css'
import SlidesList from "./SlidesList";
import {createContext} from "react";
import first from '../../assets/ImagesSlides/1.jpg'
import second from '../../assets/ImagesSlides/2.jpg'
import third from '../../assets/ImagesSlides/4.png'
import useHover from "../../hooks/useHover";
export const SliderContext = createContext();

const Slider = ({autoPlay, autoPlayTime}) => {
    const [items, setItems] = useState([{url: first, title: ''},{url: second, title: ''},{url: third, title: ''}]);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    // useEffect(() => {
    //     const loadData = async () => {
    //         const images = await getImages();
    //         setItems(images);
    //     };
    //     loadData();
    // }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }
    const ref = useRef()
    const isHovering = useHover(ref)

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div className="slider__wrapper">
            <div
                className="slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <SliderContext.Provider
                    value={{
                        goToSlide,
                        changeSlide,
                        slidesCount: items.length,
                        slideNumber: slide,
                        items,
                    }}
                >
                    <Arrows/>
                    <SlidesList/>
                    <div className="slider__btns-wrapper">
                        <div className="slider__btns">
                            <div className="slider__btns-request">Подать заявку</div>
                            <div
                                ref = {ref}
                                style={{backgroundColor: isHovering ?  'white' : 'transparent',
                                color: isHovering ?  'black' : 'white'
                                }}
                                className="slider__btns-description"
                            >
                                Подробнее
                            </div>
                        </div>
                        <Dots/>
                    </div>
                </SliderContext.Provider>
            </div>
        </div>

    );
};

export default Slider;