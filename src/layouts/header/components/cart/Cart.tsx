import React from 'react';
import CardCart from './components/CardCart';
import { ButtonCard, HeaderCartList, HeaderCartListItem, HeaderCartListWrap, HeaderCartTitle } from './Card.styled';

type Props = {};

const Cart = (props: Props) => {
    return (
        <HeaderCartListWrap>
            <HeaderCartTitle>List Cart</HeaderCartTitle>
            <HeaderCartList>
                <HeaderCartListItem>
                    <CardCart />
                </HeaderCartListItem>
                <HeaderCartListItem>
                    <CardCart />
                </HeaderCartListItem>
                <HeaderCartListItem>
                    <CardCart />
                </HeaderCartListItem>
                <HeaderCartListItem>
                    <CardCart />
                </HeaderCartListItem>
                <HeaderCartListItem>
                    <CardCart />
                </HeaderCartListItem>
            </HeaderCartList>
            <ButtonCard>xem gio hang</ButtonCard>
        </HeaderCartListWrap>
    );
};

export default Cart;
