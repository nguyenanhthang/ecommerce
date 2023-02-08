import styled from '@emotion/styled/macro';
import { Box, Typography, Container, List, ListItem, IconButton } from '@mui/material';
import images from './../../assets/index';
import Badge, { BadgeProps } from '@mui/material/Badge';
export const HeaderWrapper = styled(Box)`
    position: fixed;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    transition: 0.6;
    top: 0;
    left: 0;
    background: #ffff;
`;
export const NavTop = styled(Container)`
    width: 100%;
    background: transparent;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const NavTopStart = styled(Box)`
    position: relative;
`;
export const NavTopEnd = styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
`;
export const HeaderContainer = styled(Container)`
    width: 100%;
    min-height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
export const NavLogo = styled(Box)`
    height: 80%;
    width: 11%;
    position: relative;
`;
export const LogoIcon = styled(Box)`
    background-image: url(${images.logoShop});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 126px;
    min-height: 25px;
    position: relative;
`;
export const NavTitleWrapper = styled(Box)`
    font-size: 1rem;
    position: relative;
`;
export const NavAction = styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
`;
export const NavTitle = styled(Typography)`
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
    margin: 0 5px;
    position: relative;
`;
export const NavTitleTop = styled(Typography)`
    font-size: 1rem;
    cursor: pointer;
    margin: 0 5px;
    position: relative;
`;
export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    position: 'relative',
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid`,
        padding: '0 8px'
    }
}));

export const NavListUser = styled(List)`
    display: none;
    position: absolute;
    content: '';
    top: calc(100% + 12px);
    list-style: none;
    padding: 8px 0;
    right: 0;
    background-color: #ffff;
    width: 160px;
    z-index: 2;
    box-shadow: 0 2px 10px #ccc;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    ::before {
        content: '';
        border-width: 18px 25px;
        border-style: solid;
        border-color: transparent transparent #ffff transparent;
        position: absolute;
        right: 14px;
        top: -30px;
    }
`;
export const InfoWrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    position: relative;
    &:hover {
        ${NavListUser} {
            display: block;
        }
    }
`;
export const NavListItem = styled(ListItem)`
    display: inline-flex;
    font-size: 1.4 rem;
    padding: 0.8rem 1.3rem;
    gap: 10px;
    &:hover {
        background-color: #8acbe9;
    }
`;
export const InfoUserName = styled(Typography)`
    margin-left: 5px;
`;
export const CardList = styled(Box)`
    position: absolute;
    top: calc(100% + 14px);
    right: -4px;
    background-color: #ffff;
    width: 400px;
    display: none;
    ::after {
        content: '';
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: -26px;
        border-width: 18px 20px;
        border-style: solid;
        border-color: transparent transparent #ffff transparent;
    }
`;
export const CartHeader = styled(IconButton)`
    position: relative;
    display: inline-block;
    padding: 0 8px;
    &:hover {
        ${CardList} {
            display: block;
        }
    }
`;
