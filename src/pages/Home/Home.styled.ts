import { styled } from '@mui/material/styles';
import { Box, ImageList, Container } from '@mui/material';
export const HomeContainer = styled(Box)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;
export const UntreeContainer = styled(Box)`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    background: #f8f9fa;
    padding: 30px 0;
`;
export const BannerHome = styled(Box)`
    width: 100%;
    height: 100%;
`;
export const Popular = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0;
`;
