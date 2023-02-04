import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Image } from './Banner.styled';
import images from 'assets';

const Banner = () => {
    return (
        <Swiper
            style={{ width: '100%', height: '100%' }}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
        >
            <SwiperSlide>
                <Image src={`${images.banner1}`} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={`${images.banner2}`} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
