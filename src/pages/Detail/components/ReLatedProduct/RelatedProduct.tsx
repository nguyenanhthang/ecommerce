import React from 'react';
import {
    RelativeProductBody,
    RelativeProductHeader,
    RelativeProductPagination,
    RelativeProductTitle,
    RelativeProductWrapper
} from './RelatedProduct.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import images from '../../../../assets/index';
import { Pagination } from '@mui/material';

const RelatedProduct = () => {
    return (
        <RelativeProductWrapper>
            <RelativeProductHeader>
                <RelativeProductTitle variant='h5'>RELATED PRODUCT</RelativeProductTitle>
            </RelativeProductHeader>
            <RelativeProductBody>
                <CardProduct
                    productImg={images.clockImg}
                    productName='asdasdsdfsdfsdfdsfsdfsdf'
                    productCost={0}
                    productRating={3}
                />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
            </RelativeProductBody>
            <RelativeProductPagination>
                <Pagination count={10} variant='outlined' shape='rounded' />
            </RelativeProductPagination>
        </RelativeProductWrapper>
    );
};

export default RelatedProduct;
