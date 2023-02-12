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
type Props = {
    getDetailProduct: any;
};
const RelatedProduct: React.FC<Props> = ({ getDetailProduct }) => {
    return (
        <RelativeProductWrapper>
            <RelativeProductHeader>
                <RelativeProductTitle variant='h5'>RELATED PRODUCT</RelativeProductTitle>
            </RelativeProductHeader>
            <RelativeProductBody container spacing={1.5}>
                {getDetailProduct?.similar_product?.map((product: any) => {
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
            </RelativeProductBody>
        </RelativeProductWrapper>
    );
};

export default RelatedProduct;
