import React from 'react';
import { ProductsContainer, ProductsWrapper } from './Products.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import { useMutation } from '@tanstack/react-query';

type Props = {
    getProducts: any;
};

const Products: React.FC<Props> = ({ getProducts }) => {
    return (
        <ProductsWrapper>
            <ProductsContainer container spacing={1}>
                {getProducts?.data?.data?.data.map((product: any, i: number) => {
                    return (
                        <CardProduct
                            key={i}
                            productImg={'http://hieu.fresher.ameladev.click/' + product.product_image}
                            productName={product.product_name}
                            productCost={product.product_price}
                            productRating={3}
                            id={product.id}
                        />
                    );
                })}
            </ProductsContainer>
        </ProductsWrapper>
    );
};

export default Products;
