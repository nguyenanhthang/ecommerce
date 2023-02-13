import { styled } from '@mui/material/styles';
import { Box, Typography, CardMedia } from '@mui/material';

export const CardCartWrap = styled(Box)`
    height: inherit;
    width: inherit;
    display: flex;
    align-items: center;
`;
export const Images = styled(CardMedia)`
    width: 42px;
    height: 42px;
    margin: 12px;
`;
export const CardCartInfo = styled(Box)`
    width: 100%;
    margin-right: 10px;
`;
export const CardCartHead = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CardCartHeadTitle = styled(Typography)`
    text-align: left;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    line-height: 2rem;
    max-height: 2rem;
    flex: 1;
    padding-right: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
`;
export const CardCartHeadPriceWrap = styled(Box)`
    display: flex;
    margin: 0 4px;
    height: 10px;
    font-size: 1rem;
`;
export const CardCartHeadPrice = styled(Typography)`
`;
export const CardCartHeadMultiply = styled(Typography)`
    margin: 0 4px;
    color: #757575;
`;
export const CardCartHeadQuantity = styled(Typography)`
    color: #757575;
    font-weight: 300;
`;
export const CardCartBody = styled(Box)`
    display: flex;
    justify-content: space-between;
`;
export const CardCartBodyDescription = styled(Typography)`
    color: #757575;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    height: 2rem;
    flex: 1;
    padding-right: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
`;
export const CardCartHeadDelete = styled(Typography)`
    font-size: 1rem;
    font-weight: 300;
    &:hover {
        cursor: pointer;
        color: red;
    }
`;
