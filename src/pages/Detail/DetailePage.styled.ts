import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export const DetailContainer = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: auto;
`;
export const BannerDetail = styled(Box)`
    width: 100%;
    height: 50vh;
`;
export const Grid = styled(Grid2)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 30px;
`;
export const DetailBody = styled(Container)`
    width: 100%;
    height: auto;
`;
export const ReviewDetail = styled(Container)`
    margin-top: 20px;
    width: 100%;
    height: auto;
`;
export const RelativeProductDetailWrapper = styled(Container)`
    margin-top: 20px;
    width: 100%;
    height: auto;
`;
