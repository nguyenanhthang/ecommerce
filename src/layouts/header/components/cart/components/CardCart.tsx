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

type Props = {};

const CardCart = (props: Props) => {
    return (
        <CardCartWrap>
            <Images image='https://img.abaha.vn/photos/resized/320x/73-1574413855-myohui.png' />
            <CardCartInfo>
                <CardCartHead>
                    <CardCartHeadTitle variant='caption'>
                        Set dưỡng trắng trị nám Whoo Gong Jin Hyang Seol 5 món
                    </CardCartHeadTitle>
                    <CardCartHeadPriceWrap>
                        <CardCartHeadPrice variant='caption'>20000$</CardCartHeadPrice>
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
