import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export const ProductWrapper = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const ProductContainer = styled(Container)`
    width: inherit;
    margin-top: 40px;
`;
export const GridProduct = styled(Grid2)`
    max-width: 100vw;
    display: flex;
    flex-wrap: nowrap;
`;
export const ProductContent = styled(Box)`
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const ProductBanner = styled(Box)`
    width: 100%;
    height: 50vh;
`;
export const ProductTool = styled(Box)`
    width: 100%;
`;
