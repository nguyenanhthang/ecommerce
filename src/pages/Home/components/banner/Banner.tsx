import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import images from 'assets';
import BannerRelative from '../BannerRalative/BannerRelative';
import Grid2 from '@mui/material/Unstable_Grid2';
const Banner = () => {
    return (
        <Grid2 md={12} lg={12} sm={12} xs={12}>
            <Swiper
                style={{ height: '100%' }}
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
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='Fashion for Upcoming Winter'
                        width={100}
                        height={100}
                        imageBanner={images.banner7}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='The New Way To Display Product by Colorlib'
                        width={100}
                        height={100}
                        imageBanner={images.banner2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='The New Way To Display Product by Colorlib'
                        width={100}
                        height={100}
                        imageBanner={images.banner3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='The New Way To Display Product by Colorlib'
                        width={100}
                        height={100}
                        imageBanner={images.banner1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='The New Way To Display Product by Colorlib'
                        width={100}
                        height={100}
                        imageBanner={images.banner5}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerRelative
                        nameButton='Explore Now'
                        nameBanner='The New Way To Display Product by Colorlib'
                        width={100}
                        height={100}
                        imageBanner={images.banner2}
                    />
                </SwiperSlide>
            </Swiper>
        </Grid2>
    );
};

export default Banner;
