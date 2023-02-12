import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export const ProductsWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ProductsContainer = styled(Grid2)`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;
export const ProductPagination = styled(Box)`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
