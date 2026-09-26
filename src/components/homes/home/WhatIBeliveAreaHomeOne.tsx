
'use client'
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

import smile from '@/assets/img/marquee/smile.svg';
import stroke from '@/assets/img/marquee/stroke.svg';

const marquee_data = [
    { text: 'Movement is more than exercise.', img: smile },
    { text: 'More than dance.', img: stroke },
    { text: 'More than performance.', img: smile },
    { text: 'Movement is more than exercise.', img: smile },
    { text: 'More than dance.', img: stroke },
    { text: 'More than performance.', img: smile },
    // { text: 'Selected Work (2023)', img: smile },
    // { text: 'Diego Template', img: stroke },
    // { text: 'Selected Work (2023)', img: smile },
    // { text: 'Diego Template', img: stroke },

    // { text: 'I believe movement is one of the oldest, most natural ways we learn,connect and grow.', img: smile }
]

const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    focusOnSelect: true,
    pauseOnHover: true,
    rtl: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
            }
        }
    ]
}

const WhatIBeliveAreaHomeOne = () => {
    return (
        <>
            <div className="tp-marquee-area z-index-5" style={{ marginTop: '80px', marginBottom: '80px' }}>
                <div className="tp-marquee-wrapper">
                    <div className="tp-marquee-slider fix">
                        <Slider {...setting} className="tp-marquee-slider-active d-flex align-items-center ">
                            {marquee_data.map((item, index) => (
                                <div key={index} className="tp-marquee-item">
                                    <p>{item.text} <Image src={item.img} alt="image" /></p>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatIBeliveAreaHomeOne;