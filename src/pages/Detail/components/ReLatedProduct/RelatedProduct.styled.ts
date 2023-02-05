import { styled } from '@mui/material/styles';
import { Box, ImageList, Container, Typography } from '@mui/material';

export const RelativeProductWrapper = styled(Box)`
    height: 100%;
    width: 100%;
`;
export const RelativeProductHeader = styled(Box)`
    text-align: center;
    margin: 40px 0;
`;
export const RelativeProductTitle = styled(Typography)`
    font-weight: 600;
`;
export const RelativeProductBody = styled(Box)`
    display: flex;
    justify-content: space-evenly;
`;
export const RelativeProductPagination = styled(Box)`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
