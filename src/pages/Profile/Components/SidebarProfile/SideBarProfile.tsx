import React from 'react';
import {
    InfoNameProfile,
    InfoProfile,
    SideBarProfileContainer,
    SideBarProfileWrapper,
    Ordered,
    TitleOrdered
} from './SideBarProfile.styled';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore, Create } from '@mui/icons-material';
import IconsComponent from 'components/Icons/IconsComponent';
import ButtonComponent from 'components/Button/ButtonComponent';
import { SideBarProfileGrid } from './SideBarProfile.styled';

type Props = {
    getUser: any;
};
const DataSideBar: any = [
    {
        title: 'Tài Khoản Của tôi',
        children: [
            { label: 'Hồ Sơ', to: '/profile' },
            { label: 'Ngân Hàng', to: '/profile' },
            { label: 'Địa Chỉ', to: '/profile' },
            { label: 'Đổi Mật Khẩu', to: '/profile' }
        ]
    }
];
const SideBarProfile: React.FC<Props> = ({ getUser }) => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <SideBarProfileGrid container xs={3}>
            <SideBarProfileWrapper item xs={12}>
                <InfoProfile>
                    <IconsComponent LinkIcons={'http://hieu.fresher.ameladev.click/' + getUser?.data?.data?.avatar} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', marginLeft: '5px' }}>
                        <InfoNameProfile>Name: {getUser ? getUser.data.data.full_name : ''}</InfoNameProfile>
                        <ButtonComponent icon={<Create />} type='button' text='Edit Profile' border='none' />
                    </Box>
                </InfoProfile>
                <SideBarProfileContainer>
                    {DataSideBar.map((el: any, i: number) => {
                        return (
                            <Box key={i}>
                                <ListItemButton sx={{ p: 0, flexGrow: 0 }} onClick={handleClick}>
                                    <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
                                    <ListItemText primary={el.title} />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout='auto' unmountOnExit>
                                    <List component='div' disablePadding>
                                        {el.children.map((el: any) => {
                                            return (
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                                                    <ListItemText primary={`${el.label}`} />
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            </Box>
                        );
                    })}
                    <Ordered>
                        <TitleOrdered>Đơn mua</TitleOrdered>
                    </Ordered>
                </SideBarProfileContainer>
            </SideBarProfileWrapper>
        </SideBarProfileGrid>
    );
};

export default SideBarProfile;
