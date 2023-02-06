import React from 'react';
import { SideBarList, SideBarWrapper } from './SideBar.styled';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const DataSideBar: any = [
    {
        title: 'CATEGORIES',
        children: [
            { label: 'Bags', sumProduct: +0 },
            { label: 'Clothing', sumProduct: +0 },
            { label: 'Shoes', sumProduct: +0 },
            { label: 'Accessories', sumProduct: +0 },
            { label: 'Kids', sumProduct: +0 }
        ]
    },
    {
        title: 'BRANDING',
        children: [
            { label: 'Luis Vuitton', sumProduct: '' },
            { label: 'Channel', sumProduct: '' },
            { label: 'Hermes', sumProduct: '' },
            { label: 'Gucci', sumProduct: '' }
        ]
    },
    {
        title: 'CATEGORIES',
        children: [
            { label: '$0.00 - $50.00', sumProduct: '' },
            { label: '$50.00 - $100.00', sumProduct: '' },
            { label: '$100.00 - $150.00', sumProduct: '' },
            { label: '$150.00 - $200.00', sumProduct: '' },
            { label: '$200.00+', sumProduct: '' }
        ]
    }
];
const SideBar = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <SideBarWrapper>
            <SideBarList>
                {DataSideBar.map((el: any, i: number) => {
                    return (
                        <>
                            <ListItemButton onClick={handleClick}>
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
                                                <ListItemText primary={`${el.label} ${el.sumProduct}`} />
                                            </ListItemButton>
                                        );
                                    })}
                                </List>
                            </Collapse>
                        </>
                    );
                })}
            </SideBarList>
        </SideBarWrapper>
    );
};

export default SideBar;
