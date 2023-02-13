import React from 'react';
import {
    CardCartWrap,
    CardCartBody,
    CardCartBodyDescription,
    CardCartHead,
    CardCartHeadDelete,
    CardCartHeadMultiply,
    CardCartHeadPrice,
    CardCartHeadPriceWrap,
    CardCartHeadQuantity,
    CardCartHeadTitle,
    CardCartInfo,
    Images
} from './CardCart.styled';
import { useDispatch } from 'react-redux';
import { deleteCart } from 'features/Product/ProductSlice';
type Props = {
    dataCart: any;
};

const CardCart: React.FC<Props> = ({ dataCart }) => {
    const dispatch = useDispatch();
    return (
        <CardCartWrap>
            <Images image={'http://hieu.fresher.ameladev.click/' + dataCart?.product_image} />
            <CardCartInfo>
                <CardCartHead>
                    <CardCartHeadTitle variant='caption'>{dataCart?.product_name}</CardCartHeadTitle>
                    <CardCartHeadPriceWrap>
                        <CardCartHeadPrice variant='caption'>{dataCart?.productPrice}</CardCartHeadPrice>
                        <CardCartHeadMultiply variant='caption'>x</CardCartHeadMultiply>
                        <CardCartHeadQuantity variant='caption'>{dataCart?.quantity}</CardCartHeadQuantity>
                    </CardCartHeadPriceWrap>
                </CardCartHead>
                <CardCartBody>
                    <CardCartBodyDescription variant='caption'>
                        The First Geniture Eye Cream Edition Grand Blue – Biểu tượng của tình yêu vĩnh cửu{' '}
                    </CardCartBodyDescription>
                </CardCartBody>
            </CardCartInfo>
        </CardCartWrap>
    );
};

export default CardCart;
