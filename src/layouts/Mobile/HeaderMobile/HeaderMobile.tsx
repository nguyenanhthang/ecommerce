import React from 'react';
import { HeaderMobileWrap, Search } from './HeaderMobile.styled';
import {
    Toolbar,
    IconButton,
    Box,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart, AccountBox, ShoppingCartCheckout, Logout } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import config from 'config/config';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../../../components/Search/SearchComponent';
import { useAppSelector } from '../../../app/hooks';
import { useUser } from '../../../Hook/useUser';
import {
    InfoWrapper,
    InfoUserName,
    NavListUser,
    NavListItem,
    NavLogo,
    LogoIcon,
    StyledBadge
} from '../../header/Header.styled';
import IconsComponent from 'components/Icons/IconsComponent';
import { searchProduct } from 'features/Product/ProductSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { useMutation } from '@tanstack/react-query';
import queryString from 'query-string';
import { logoutUser } from '../../../api/auth';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
type Props = {};
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const MenuItem: any = [
    { title: 'Profile', to: config.routes.profile, icon: <AccountBox /> },
    { title: 'Detail Cart', to: config.routes.cartPage, icon: <ShoppingCartCheckout /> }
];
const drawerWidth = 220;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    color: 'black',
    background: '#ffff',
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));
const HeaderMobile = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const getUser: any = useUser();
    const dispatch = useDispatch();
    const search = useAppSelector((state: RootState) => state.product.search);
    const TotalQuantity = useAppSelector((state: RootState) => state.product.totalQuantity);
    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
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
        <HeaderMobileWrap>
            <AppBar position='fixed' open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawerOpen}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLogo>
                        <LogoIcon></LogoIcon>
                    </NavLogo>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-evenly',
                            width: '100%',
                            paddingRight: '30px'
                        }}
                    >
                        <Search>
                            <SearchComponent
                                onKeyDown={handleKeyDown}
                                onChange={(e: any) => dispatch(searchProduct(e.target.value))}
                            />
                        </Search>
                        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
                            <StyledBadge badgeContent={TotalQuantity} color='secondary'>
                                <ShoppingCart />
                            </StyledBadge>
                        </IconButton>
                        <IconButton
                            sx={{ display: { xs: 'none' } }}
                            size='large'
                            aria-label='show 17 new notifications'
                            color='inherit'
                        >
                            <Badge badgeContent={17} color='error'>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
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
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                onClick={handleDrawerClose}
                variant='temporary'
                ModalProps={{
                    keepMounted: false
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    }
                }}
                anchor='left'
                open={open}
            >
                <Divider />
                <List>
                    {['Home', 'Product', 'About', 'Contact'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => navigate(`/${text}`)}>
                                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Home', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </HeaderMobileWrap>
    );
};

export default HeaderMobile;
