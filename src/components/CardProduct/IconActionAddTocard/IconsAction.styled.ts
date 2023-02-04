import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
export const IconsActionWrapper = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
`;
export const IconsActions = styled(Box)`
    background: #ffff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75'
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47'
    }
});
