import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const ProductWrapper = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const ProductContainer = styled(Container)`
    display: flex;
    min-width: inherit;
    margin-top: 40px;
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
