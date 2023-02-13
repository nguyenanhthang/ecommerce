import React from 'react';
import { SideBarList, SideBarWrapper } from './SideBar.styled';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useCategories } from '../../Hook/useProduct';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    const limit: number = 4;
    const getCategory = useCategories(limit);
    const matches = useMediaQuery('(max-width:790px)');
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <SideBarWrapper md={1.5} sm={3} lg={1.5}>
            <SideBarList>
                {DataSideBar.map((el: any, i: number) => {
                    return (
                        <>
                            <ListItemButton sx={{ p: 0 }} onClick={handleClick}>
                                <ListItemText primary={el.title} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    {el.children.map((el: any) => {
                                        return (
                                            <ListItemButton sx={{ pl: 2 }}>
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
