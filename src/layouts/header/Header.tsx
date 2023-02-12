import React, { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
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
    NavListItem,
    CartHeader,
    CardList
} from './Header.styled';
import SearchComponent from '../../components/Search/SearchComponent';
import IconsComponent from '../../components/Icons/IconsComponent';
import { ShoppingCart, CircleNotifications, PsychologyAlt, Phone, GTranslate } from '@mui/icons-material';
import ButtonComponent from './../../components/Button/ButtonComponent';
import { useNavigate} from 'react-router-dom';
import config from '../../config/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser, logoutUser } from '../../api/auth';
import request from 'utils/request';
import { AccountBox, ShoppingCartCheckout, Logout } from '@mui/icons-material';
import Cart from './components/cart/Cart';
import FullScreenLoader from 'layouts/Loading/Loading';
import { useUser } from 'Hook/useUser';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { searchProduct } from 'features/Product/ProductSlice';
import { RootState } from '../../app/store';
import queryString from 'query-string';
const MenuItem: any = [
    { title: 'Profile', to: config.routes.profile, icon: <AccountBox /> },
    { title: 'Detail Cart', to: config.routes.cartPage, icon: <ShoppingCartCheckout /> }
];
const Header = () => {
    const dataCart = useAppSelector((state) => state.product.CartProduct);
    const navigate = useNavigate();
    const getUser: any = useUser();
    const dispatch = useDispatch();
    const search = useAppSelector((state: RootState) => state.product.search);
    const TotalQuantity = useAppSelector((state: RootState) => state.product.totalQuantity);
    const handleKeyDown = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (search !== '') {
            return navigate({ pathname: config.routes.product, search: queryString.stringify({ keyword: search }) });
        }
        return navigate(config.routes.product);
    };
    const LogoutUserMutation: any = useMutation({
        mutationFn: () => {
            return logoutUser();
        }
    });
    const HandleLogoutUser = () => {
        LogoutUserMutation.mutate(getUser.data.data, {
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
                    {!getUser.isLoading && getUser.data && getUser.data.data ? (
                        <InfoWrapper key={getUser.data.data.id}>
                            <IconsComponent LinkIcons={getUser.data.data.avatar} width={20} height={20} />
                            <InfoUserName>{getUser.data.data.full_name}</InfoUserName>
                            <NavListUser>
                                {MenuItem.map((el: any, i: number) => {
                                    return (
                                        <NavListItem key={i} onClick={() => navigate(el.to)}>
                                            {el.icon} {el.title}
                                        </NavListItem>
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
                    <SearchComponent
                        onKeyDown={handleKeyDown}
                        onChange={(e: any) => dispatch(searchProduct(e.target.value))}
                    />
                    <CartHeader aria-label='cart'>
                        <StyledBadge badgeContent={TotalQuantity} color='secondary'>
                            <ShoppingCart />
                        </StyledBadge>
                        <CardList>
                            <Cart />
                        </CardList>
                    </CartHeader>
                </NavAction>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
