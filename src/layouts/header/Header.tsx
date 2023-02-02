import React from 'react';
import {
    HeaderContainer,
    HeaderWrapper,
    LogoIcon,
    NavLogo,
    NavTitleWrapper,
    NavTitle,
    NavAction,
    StyledBadge,
    NavTop,
    NavTopStart,
    NavTopEnd
} from './Header.styled';
import SearchComponent from '../../components/Search/SearchComponent';
import IconsComponent from '../../components/Icons/IconsComponent';
import { IconButton } from '@mui/material';
import { ShoppingCart, CircleNotifications, PsychologyAlt, Phone, GTranslate } from '@mui/icons-material';
import ButtonComponent from './../../components/Button/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';

const Header = () => {
    const Navigate = useNavigate();
    return (
        <HeaderWrapper>
            <NavTop>
                <NavTopStart>
                    <ButtonComponent text='0397800165' icon={<Phone sx={{ fontSize: '1rem' }} />} />
                </NavTopStart>
                <NavTopEnd>
                    <ButtonComponent text='Notification' icon={<CircleNotifications sx={{ fontSize: '1rem' }} />} />
                    <ButtonComponent text='Help' icon={<PsychologyAlt sx={{ fontSize: '1rem' }} />} />
                    <ButtonComponent text='Language' icon={<GTranslate sx={{ fontSize: '1rem' }} />} />
                    <ButtonComponent onClick={() => Navigate(config.routes.login)} text='Login' />
                    <ButtonComponent onClick={() => localStorage.removeItem('user')} text='Register' />
                </NavTopEnd>
            </NavTop>
            <HeaderContainer>
                <NavLogo>
                    <LogoIcon></LogoIcon>
                </NavLogo>
                <NavTitleWrapper>
                    <NavTitle variant='caption'>Home</NavTitle>
                    <NavTitle variant='caption'>Product</NavTitle>
                    <NavTitle variant='caption'>About</NavTitle>
                    <NavTitle variant='caption'>Contact</NavTitle>
                </NavTitleWrapper>
                <NavAction>
                    <SearchComponent />
                    <IconButton aria-label='cart'>
                        <StyledBadge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </StyledBadge>
                    </IconButton>
                    {/* <IconsComponent LinkIcons='/static/images/avatar/1.jpg' width={35} height={35} /> */}
                </NavAction>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
