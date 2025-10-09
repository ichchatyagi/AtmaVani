import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import Car1 from '../assets/Carousel/CAR01.jpg'
import Car2 from '../assets/Carousel/CAR02.jpg'
import Car3 from '../assets/Carousel/CAR03.jpg'
import Car4 from '../assets/Carousel/CAR04.jpg'
import Car5 from '../assets/Carousel/CAR05.jpeg'
import Car6 from '../assets/Carousel/CAR06.jpeg'
import Car7 from '../assets/Carousel/CAR07.jpeg'
import Car8 from '../assets/Carousel/CAR08.jpeg'
import Car9 from '../assets/Carousel/CAR09.jpeg'
import Car10 from '../assets/Carousel/CAR21.jpg'
import Car11 from '../assets/Carousel/CAR35.jpg'
import Car12 from '../assets/Carousel/CAR53.jpg'

export default function CircularDemo() {

    const images = [
        {image: Car1},
        {image: Car2},
        {image: Car3},
        {image: Car4},
        {image: Car5},
        {image: Car6},
        {image: Car7},
        {image: Car8},
        {image: Car9},
        {image: Car10},
        {image: Car11},
        {image: Car12},
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ]; 


    const productTemplate = (images) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={images.image} alt='#' className="w-full shadow-2" />
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={images} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
        