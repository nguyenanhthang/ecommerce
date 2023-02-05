import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
export const DetailContainer = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
`;
export const BannerDetail = styled(Box)`
    width: 100%;
    height: 50vh;
`;
export const DetailBody = styled(Container)`
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    gap: 30px;
`;
export const ReviewDetail = styled(Container)`
    margin-top: 20px;
    width: 100%;
    height: 633px;
`;
export const RelativeProductDetailWrapper = styled(Container)`
    margin-top: 20px;
    width: 100%;
    height: 633px;
`;
