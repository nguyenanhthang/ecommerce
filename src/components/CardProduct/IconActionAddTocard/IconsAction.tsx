import React from 'react';
import { IconsActionWrapper, IconsActions, StyledRating } from './IconsAction.styled';
import { LocalMall, OpenInNew } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import config from 'config/config';
const IconsAction = () => {
    const navigate = useNavigate();
    return (
        <IconsActionWrapper>
            <IconsActions onClick={() => navigate(config.routes.detail)}>
                <LocalMall />
            </IconsActions>
            <IconsActions>
                <OpenInNew />
            </IconsActions>
            <IconsActions>
                <StyledRating
                    max={1}
                    name='customized-color'
                    defaultValue={0}
                    precision={1}
                    icon={<FavoriteIcon fontSize='inherit' />}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                />
            </IconsActions>
        </IconsActionWrapper>
    );
};

export default IconsAction;
