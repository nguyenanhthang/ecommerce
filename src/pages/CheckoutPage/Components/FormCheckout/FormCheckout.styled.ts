import { styled } from '@mui/material/styles';
import { Box, CardMedia, Container, Typography } from '@mui/material';

export const CheckOutFormWrap = styled(Box)``;
export const CheckOutForm = styled(Box)`
    max-width: 90rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 1.5rem;
    margin: 0 auto;
`;
export const CheckOutFormBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const CheckOutFormWrapInput = styled(Box)`
    width: 49%;
`;
export const CheckoutFormText = styled(Typography)`
    display: block;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    color: #666;
`;
