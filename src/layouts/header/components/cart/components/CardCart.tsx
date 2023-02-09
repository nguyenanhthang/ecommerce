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

type Props = {
    dataCart: any;
};

const CardCart: React.FC<Props> = ({ dataCart }) => {
    return (
        <CardCartWrap>
            <Images image={'http://hieu.fresher.ameladev.click/' + dataCart?.product_image} />
            <CardCartInfo>
                <CardCartHead>
                    <CardCartHeadTitle variant='caption'>{dataCart?.product_name}</CardCartHeadTitle>
                    <CardCartHeadPriceWrap>
                        <CardCartHeadPrice variant='caption'>
                            {dataCart.attribute_product[0]?.pivot.price}
                        </CardCartHeadPrice>
                        <CardCartHeadMultiply variant='caption'>x</CardCartHeadMultiply>
                        <CardCartHeadQuantity variant='caption'>1</CardCartHeadQuantity>
                    </CardCartHeadPriceWrap>
                </CardCartHead>
                <CardCartBody>
                    <CardCartBodyDescription variant='caption'>
                        The First Geniture Eye Cream Edition Grand Blue – Biểu tượng của tình yêu vĩnh cửu{' '}
                    </CardCartBodyDescription>
                    <CardCartHeadDelete variant='caption'>Delete</CardCartHeadDelete>
                </CardCartBody>
            </CardCartInfo>
        </CardCartWrap>
    );
};

export default CardCart;
