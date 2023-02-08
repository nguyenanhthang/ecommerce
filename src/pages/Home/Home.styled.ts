import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
export const HomeContainer = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 0;
`;
export const NewProductContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const TitleNewProduct = styled(Typography)`
    text-align: center;
    font-size: 4.5rem;
    font-family: 'Cinzel', serif;
    color: #140c40;
    margin-top: 0px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
`;
export const AboutUsHomeWrapper = styled(Container)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
`;
