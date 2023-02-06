import React, { useEffect } from 'react';
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
    NavTopEnd,
    InfoUserName,
    InfoWrapper,
    NavListUser,
    NavListItem
} from './Header.styled';
import SearchComponent from '../../components/Search/SearchComponent';
import IconsComponent from '../../components/Icons/IconsComponent';
import { IconButton, Typography } from '@mui/material';
import { ShoppingCart, CircleNotifications, PsychologyAlt, Phone, GTranslate } from '@mui/icons-material';
import ButtonComponent from './../../components/Button/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser, logoutUser } from '../../api/auth';
import request from 'utils/request';
import { AccountBox, ShoppingCartCheckout, Logout } from '@mui/icons-material';
const MenuItem: any = [
    { title: 'Profile', to: config.routes.profile, icon: <AccountBox /> },
    { title: 'Detail Cart', to: config.routes.detailCart, icon: <ShoppingCartCheckout /> }
];
const Header = () => {
    const navigate = useNavigate();
    const userQuery = useQuery({
        queryKey: ['getUsers'],
        queryFn: () => getUser()
    });
    const LogoutUserMutation = useMutation({
        mutationFn: () => {
            return logoutUser();
        }
    });
    const HandleLogoutUser = () => {
        LogoutUserMutation.mutate(userQuery.data.data, {
            onSuccess: () => {
                localStorage.removeItem('token');
                navigate(config.routes.login);
            }
        });
    };
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
                    {userQuery.data?.data ? (
                        <InfoWrapper>
                            <IconsComponent LinkIcons={userQuery.data.data.avatar} width={20} height={20} />
                            <InfoUserName>{userQuery.data.data.full_name}</InfoUserName>
                            <NavListUser>
                                {MenuItem.map((el: any, i: number) => {
                                    return (
                                        <>
                                            <NavListItem key={i} onClick={() => navigate(el.to)}>
                                                {el.icon} {el.title}
                                            </NavListItem>
                                        </>
                                    );
                                })}
                                <NavListItem onClick={() => HandleLogoutUser()}>
                                    <Logout /> LogOut
                                </NavListItem>
                            </NavListUser>
                        </InfoWrapper>
                    ) : (
                        <>
                            <ButtonComponent onClick={() => navigate(config.routes.login)} text='Login' />
                            <ButtonComponent onClick={() => navigate(config.routes.register)} text='Register' />
                        </>
                    )}
                </NavTopEnd>
            </NavTop>
            <HeaderContainer>
                <NavLogo>
                    <LogoIcon></LogoIcon>
                </NavLogo>
                <NavTitleWrapper>
                    <NavTitle onClick={() => navigate(config.routes.home)} variant='caption'>
                        Home
                    </NavTitle>
                    <NavTitle onClick={() => navigate(config.routes.product)} variant='caption'>
                        Product
                    </NavTitle>
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
                </NavAction>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
