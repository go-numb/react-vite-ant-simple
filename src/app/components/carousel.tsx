import React from 'react';
import { Carousel, Image } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '400px',
    maxHeight: '400px',
    color: '#fff',
    lineHeight: '10rem',
    textAlign: 'center',
    background: '#364d79',
    overflow: 'hidden',
};

const items = ["", "", "", ""];

const DefaultCarousel = () => {
    const onCarouselChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onCarouselChange}>
            {items.map((item, index) => {
                return (
                    <div key={index} style={contentStyle}>
                        <Image src={item} height={'100%'}></Image>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default DefaultCarousel;