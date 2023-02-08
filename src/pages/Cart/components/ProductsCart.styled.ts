import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';

export const ProductsCartWrap = styled(Box)`
    margin-top: 40px;
    width: 60vw;
    height: inherit;
`;
export const ProductsCartHeader = styled(Box)``;
export const ProductCartTitle = styled(Typography)`
    font-weight: 600;
    text-align: center;
`;
export const ItemProduct = styled(Box)`
    height: 100px;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
`;
