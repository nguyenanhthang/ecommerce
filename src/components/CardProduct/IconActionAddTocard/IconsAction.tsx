import React from 'react';
import { IconsActionWrapper, IconsActions, StyledRating } from './IconsAction.styled';
import { LocalMall, OpenInNew } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const IconsAction = () => {
    return (
        <IconsActionWrapper>
            <IconsActions>
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
