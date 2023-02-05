import styled from '@emotion/styled/macro';
import { Box, Typography, CardMedia } from '@mui/material';

export const ImageProduct = styled(Box)`
    width: 100%;
    height: 274px;
`;

export const ImgAction = styled(Box)`
    margin-top: -40px;
    position: absolute;
    opacity: 0;
    visibility: hide;
    width: 100%;
    display: flex;
    align-content: center;
    height: 40px;
    background-color: rgba(29, 37, 71, 0.5);
`;
export const ImageLink = styled(CardMedia)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
`;
export const CardBody = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    margin: 10px 15px;
    width: 100%;
`;
export const CardTitle = styled(Typography)`
    width: 100%
    line-height: 1.7;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px 0 0;
`;
export const CardTitleRaing= styled(Typography)`
    width: 100%
    line-height: 1.7;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
export const CardCost = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px 0 0;
`;
export const CardRating = styled(Box)`
    display: flex;
    align-content: center;
    align-content: center;
    padding: 0 15px 0 0;
`;
export const CardAction = styled(Box)`
    display: flex;
`;
export const CardWrapper = styled(Box)`
    overflow: hidden;
    margin: 10px 6px;
    width: 217px;
    height: 384px;
    cursor: pointer;
    transition: 0.8s;
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 20%);
    &:hover {
        transform: scale(1.03, 1.03);
        border: 1px solid #ee4d2d;
    }
    &:hover {
        ${ImgAction} {
            transition-delay: 0.2s;
            opacity: 1;
            visibility: visible;
        }
    }
`;
