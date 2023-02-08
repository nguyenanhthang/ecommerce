import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const ImageProduct = ({ getDetailProduct }) => {
    const data = [
        {
            image: getDetailProduct?.product_image
        }
    ];
    return (
        <Carousel
            data={data}
            width='450px'
            height='520px'
            radius='10px'
            captionPosition='bottom'
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailWidth='100px'
        />
    );
};

export default ImageProduct;
