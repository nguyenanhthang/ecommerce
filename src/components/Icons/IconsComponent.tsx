import React from 'react';
import Avatar from '@mui/material/Avatar';
import { IconIf } from '../../types/Component.type';

const IconsComponent: React.FC<IconIf> = ({ LinkIcons, width, height }) => {
    return (
        <Avatar alt='' src={`http://hieu.fresher.ameladev.click/${LinkIcons}`} sx={{ width: width, height: height }} />
    );
};

export default IconsComponent;
