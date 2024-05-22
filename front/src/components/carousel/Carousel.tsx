"use client";

import { useEffect, useState } from "react";

const Carousel = () => {
    const slides = [
        {
            url: "/images/imagen1.png",
        },
        {
            url: "/images/imagen2.png",
        },
        {
            url: "/images/imagen3.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
            {/* Contenedor carrusel */}
            <div className="max-w-[1500px] h-[600px] w-full m-auto py-6 px-4 relative group brightness-50">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                    }}
                    className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
                ></div>
                {/* Flecha izq */}
                <div
                    onClick={prevSlide}
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-apblack/20 cursor-pointer "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="gray"
                        className="w-16 h-16"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>
                {/* Flecha der */}
                <div
                    onClick={nextSlide}
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-apblack/20 cursor-pointer "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="gray"
                        className="w-16 h-16"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Carousel;
