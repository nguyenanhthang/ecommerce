import { styled } from '@mui/material/styles';
import { Box, ImageList, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export const RelativeProductWrapper = styled(Box)`
    height: auto;
    width: 100%;
`;
export const RelativeProductHeader = styled(Box)`
    text-align: center;
    margin: 40px 0;
`;
export const RelativeProductTitle = styled(Typography)`
    font-weight: 600;
`;
export const RelativeProductBody = styled(Grid2)`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin: 0 0 40px 0;
`;
export const RelativeProductPagination = styled(Box)`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
