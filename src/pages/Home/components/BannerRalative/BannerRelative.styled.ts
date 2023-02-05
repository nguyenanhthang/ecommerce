import styled from '@emotion/styled/macro';
import { Box, Container, Button, Typography } from '@mui/material';

export const BannerContainer = styled(Box)`
    width: 100%;
    height: 100%;
`;
export const Banner = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 0;
    ::before {
        position: absolute;
        content: '';
        background-color: rgba(29, 37, 71, 0.4);
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-repeat: no-repeat;
        z-index: -1;
    }
`;
export const ButtonBanner = styled(Button)`
    text-align: center;
    border: none;
    font-weight: 500;
    color: #ffffff;
    padding: 20px 48px;
    background-color: #9f78ff;
    border-radius: 4px;
    cursor: pointer;
    transition: 1.5s ease-in-out;
    font-size: 1rem;
    font-weight: 500;
    z-index: 999;
    &:hover {
        cursor: pointer;
        background: #0056b3;
    }
`;
export const ButtonBannerWrap = styled(Box)`
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    transition: 0.8s;
    opacity: 1;
    //visibility: hidden;
    z-index: 999;
`;
export const TextBanner = styled(Typography)`
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    color: #ffffff;
    font-size: 2rem;
    text-align: center;
`;
export const TextParamBanner = styled(Typography)`
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    color: #ffffff;
    text-align: center;
    padding: 0 10px;
`;
export const TextBannerWrap = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    height: 85px;
    transition: 0.5s;
    opacity: 1;
    //visibility: hidden;
    z-index: 2;
`;
export const BannerWrapper = styled(Box)`
    margin-top: 10px;
    /* &:hover {
        ${ButtonBannerWrap} {
            transition-delay: 0.2s;
            opacity: 1;
            visibility: visible;
        }
    }
    &:hover {
        ${TextBannerWrap} {
            transition-delay: 0.2s;
            opacity: 1;
            visibility: visible;
        }
    } */
`;
