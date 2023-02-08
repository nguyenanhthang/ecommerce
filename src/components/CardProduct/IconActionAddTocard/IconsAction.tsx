import React from 'react';
import { IconsActionWrapper, IconsActions, StyledRating } from './IconsAction.styled';
import { LocalMall, OpenInNew } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useParams } from 'react-router-dom';
import config from 'config/config';
import { useMutation } from '@tanstack/react-query';
import { productsDetail } from '../../../api/Product';
import { useDetail } from '../../../Hook/useProduct';
type Props = {
    id: any;
};
const IconsAction: React.FC<Props> = ({ id }) => {
    const navigate = useNavigate();
    return (
        <IconsActionWrapper>
            <IconsActions onClick={() => navigate(`/detail/${id}`)}>
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
