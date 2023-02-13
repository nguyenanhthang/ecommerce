import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import styled from 'styled-components';
import Grid2 from '@mui/material/Unstable_Grid2';
const ImagesCarousel = styled(Grid2)`
    .carousel-container {
        overflow: hidden;
    }
    max-height: 520px;
`;

const ImageProduct = ({ getDetailProduct }) => {
    const data = [
        {
            image: 'http://hieu.fresher.ameladev.click/' + getDetailProduct?.product_image
        }
    ];
    return (
        <ImagesCarousel md={5.5} lg={5.5} sm={12} xs={12}>
            <Carousel
                data={
                    getDetailProduct?.product_gallery.length !== 0
                        ? getDetailProduct?.product_gallery?.map((el) => {
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
