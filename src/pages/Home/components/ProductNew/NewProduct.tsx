import React from 'react';
import { NewProductWrapper } from './NewProduct.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import images from '../../../../assets/index';

const NewProduct = () => {
    return (
        <NewProductWrapper>
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
        </NewProductWrapper>
    );
};

export default NewProduct;
