import React from 'react';
import { ProductPagination, ProductsContainer, ProductsWrapper } from './Products.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import images from 'assets';
import { Pagination } from '@mui/material';

type Props = {};

const Products = (props: Props) => {
    return (
        <ProductsWrapper>
            <ProductsContainer>
                <CardProduct
                    productImg={images.clockImg}
                    productName='asdasdsdfsdfsdfdsfsdfsdf'
                    productCost={0}
                    productRating={3}
                />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
                <CardProduct productImg={images.clockImg} productName='asdasd' productCost={0} productRating={3} />
            </ProductsContainer>
            
        </ProductsWrapper>
    );
};

export default Products;
