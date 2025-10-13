import React from 'react';
import { Carousel } from 'primereact/carousel';
import Car1 from '../assets/Carousel/CAR01.jpg';
import Car2 from '../assets/Carousel/CAR02.jpg';
import Car10 from '../assets/Carousel/CAR21.jpg';
import Car11 from '../assets/Carousel/CAR35.jpg';
import Car12 from '../assets/Carousel/CAR53.jpg';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

export default function CircularDemo() {
    const images = [
        { image: Car1 },
        { image: Car2 },
        { image: Car10 },
        { image: Car11 },
        { image: Car12 },
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (item) => {
        return (
            <div className="flex justify-center">
                <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={item.image}
                        alt="carousel"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        );
    };

    return (
        <div>
           
            <Carousel
                value={images}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={productTemplate}
            />
        </div>
    );
}
