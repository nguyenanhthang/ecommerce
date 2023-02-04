import { styled } from '@mui/material/styles';
import { Box, Typography, CardMedia } from '@mui/material';

export const CardWrapper = styled(Box)`
    margin: 10px 6px;
    width: 217px;
    height: 384px;
    cursor: pointer;
    transition: 0.8s;
    &:hover {
        transition: 0.8s;
        transform: scale(1.03, 1.03);
        border: 1px solid #ee4d2d;
    }
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 20%);
`;
export const ImageProduct = styled(Box)`
    width: 100%;
    height: 274px;
`;
export const ImageLink = styled(CardMedia)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
`;
export const ImgAction = styled(Box)`
    margin-top: -40px;
    position: absolute;
    width: 100%;
    display: flex;
    align-content: center;
    height: 40px;
    background-color: rgba(29, 37, 71, 0.5);
`;
export const CardBody = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    margin: 10px 15px;
`;
export const CardTitle = styled(Typography)`
    line-height: 1.7;
`;
export const CardCost = styled(Typography)``;
export const CardRating = styled(Box)`
    display: flex;
    align-content: center;
    align-content: center;
`;
export const CardAction = styled(Box)`
    display: flex;
`;
