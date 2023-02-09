import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const ImageProduct = ({ getDetailProduct }) => {
    const data = [
        {
            image: 'http://hieu.fresher.ameladev.click/' + getDetailProduct?.product_image
        }
    ];
    return (
        <Box sx={{ minWidth: '420px' }}>
            <Carousel
                data={data}
                width='100%'
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
        </Box>
    );
};

export default ImageProduct;
