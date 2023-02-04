import { styled } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';
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
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 8px'
    }
}));
