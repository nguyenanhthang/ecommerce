import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import styled from 'styled-components';

const ImagesCarousel = styled(Box)`
    .carousel-container {
        overflow: hidden;
    }
    min-width: 420px;
    max-height: 520px;
`;

const ImageProduct = ({ getDetailProduct }) => {
    const data = [
        {
            image: 'http://hieu.fresher.ameladev.click/' + getDetailProduct?.product_image
        }
    ];
    console.log(getDetailProduct);
    return (
        <ImagesCarousel>
            <Carousel
                data={
                    getDetailProduct
                        ? getDetailProduct.product_gallery.map((el) => {
                              return { image: 'http://hieu.fresher.ameladev.click/' + el?.path_image };
                          })
                        : data
                }
                width='100%'
                overflow='hidden'
                max-height='100%'
                radius='10px'
                captionPosition='bottom'
                pauseIconColor='white'
                pauseIconSize='40px'
                slideBackgroundColor='darkgrey'
                slideImageFit='cover'
                thumbnails={true}
                thumbnailWidth='100px'
            />
        </ImagesCarousel>
    );
};

export default ImageProduct;
