import React from 'react';
import { NewProductWrapper } from './NewProduct.styled';
import CardProduct from 'components/CardProduct/CardProduct';
import images from '../../../../assets/index';
type Props = {
    getProducts: any;
};
const NewProduct: React.FC<Props> = ({ getProducts }) => {
    return (
        <NewProductWrapper>
            {getProducts?.data?.data?.data.map((product: any) => {
                return (
                    <CardProduct
                        key={product.id}
                        productImg={'http://hieu.fresher.ameladev.click/' + product.product_image}
                        productName={product.product_name}
                        productCost={product.attribute_product[0]?.pivot.price}
                        productRating={3}
                        id={product.id}
                    />
                );
            })}
        </NewProductWrapper>
    );
};

export default NewProduct;
