import React from 'react';
import { Carousel } from 'primereact/carousel';
import Car1 from '../assets/Program/ComingSoon/C1.jpeg';
import Car2 from '../assets/Program/ComingSoon/C2.jpeg';
import Car3 from '../assets/Program/ComingSoon/C3.jpeg';
import Car4 from '../assets/Program/ComingSoon/C4.jpeg';
import Car5 from '../assets/Program/ComingSoon/C5.jpeg';
import Car6 from '../assets/Program/ComingSoon/C6.jpeg';
import Car7 from '../assets/Program/ComingSoon/C7.jpeg';
import Car8 from '../assets/Program/ComingSoon/C8.jpeg';
import Car9 from '../assets/Program/ComingSoon/C9.jpeg';
import Car10 from '../assets/Program/ComingSoon/C10.jpeg';
import Car11 from '../assets/Program/ComingSoon/C11.jpeg';
import Car12 from '../assets/Program/ComingSoon/C12.jpeg';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

export default function HomeCarouselComing() {

    const images = [
        { image: Car1 },
        { image: Car2 },
        { image: Car3 },
        { image: Car4 },
        { image: Car5 },
        { image: Car6 },
        { image: Car7 },
        { image: Car8 },
        { image: Car9 },
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
                <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={item.image}
                        alt="coming soon"
                        className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover"
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-white py-8 px-3 md:px-10">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                Coming Soon
            </h2>

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
