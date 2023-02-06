import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
export const ProductsWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ProductsContainer = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const ProductPagination = styled(Box)`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
`;