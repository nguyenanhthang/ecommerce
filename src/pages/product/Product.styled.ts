import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const ProductWrapper = styled(Container)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
`;
export const ProductContainer = styled(Box)`
    display: flex;
    width: 100%;
    margin: 20px 0 40px 0;
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
