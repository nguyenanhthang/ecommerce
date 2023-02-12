import React from 'react';
import { NewProductWrapper } from './NewProduct.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import images from '../../../../assets/index';
type Props = {
    getProducts: any;
};
const NewProduct: React.FC<Props> = ({ getProducts }) => {
    return (
        <NewProductWrapper container spacing={1}>
            {getProducts?.data?.data?.data.map((product: any) => {
                return (
                    <CardProduct
                        key={product.id}
                        productImg={'http://hieu.fresher.ameladev.click/' + product.product_image}
                        productName={product.product_name}
                        productCost={product.product_price}
                        productRating={3}
                        id={product.id}
                    />
                );
            })}
        </NewProductWrapper>
    );
};

export default NewProduct;
