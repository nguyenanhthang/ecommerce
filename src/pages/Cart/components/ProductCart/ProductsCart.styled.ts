import { styled } from '@mui/material/styles';
import { Box, Typography, CardMedia, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const ProductsCartWrap = styled(Grid)`
    height: auto;
`;
export const ProductsCartHeader = styled(Box)``;
export const ProductCartTitle = styled(Typography)`
    font-weight: 600;
    text-align: center;
`;
export const ItemProduct = styled(Box)`
    height: 100px;
    border-top: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ProductItem = styled(Box)`
    display: flex;
    flex-direction: column;
`;
export const ProductCartName = styled(Typography)``;
export const ProductCartCost = styled(Typography)``;
export const Images = styled(CardMedia)`
    width: 42px;
    height: 42px;
    margin-right: 21px;
    border: 1px solid #cccccc;
`;

export const ProductCartSizeButtonNode = styled(Box)`
    display: flex;
    position: relative;
`;
export const ProductCartButton = styled(Button)`
    padding: 0px;
    border: none;
    background: transparent;
    outline: none !important;
    box-shadow: none !important;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
export const ProductCartCount = styled(Typography)`
    height: 50px;
    width: 150px;
    padding: 0px 20px;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #000;
    letter-spacing: 0.4px;
    outline: none;
    line-height: 2.9;
    box-shadow: none;
`;
export const ProductCartAddToCard = styled(Button)`
    background: #262121;
    color: #fff;
    line-height: 38px;
    border: 1px solid #262121;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    padding: 0px 15px;
    transition: all 400ms linear 0s;
    font-family: 'Poppins', sans-serif;
`;
export const CartButtonWrap = styled(Box)`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #cccccc;
    width: 100%;
    height: 50px;
`;
