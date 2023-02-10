import React from 'react';
import FormCheckout from './Components/FormCheckout/FormCheckout';
import { CheckOutWrapper, CheckoutWrap } from './Checkout.styled';
import SearchCartPage from './Components/SearchCart/CheckoutCartPage';

type Props = {};

const CheckoutPage = (props: Props) => {
    return (
        <CheckOutWrapper>
            <CheckoutWrap>
                <FormCheckout />
                <SearchCartPage />
            </CheckoutWrap>
        </CheckOutWrapper>
    );
};

export default CheckoutPage;
