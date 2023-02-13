import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import images from '../../../assets/index';
import Grid2 from '@mui/material/Unstable_Grid2';
export const RegisterContainer = styled(Box)`
    background-image: url(${images.backgroundLogin});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 130vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RegisterWrap = styled(Grid2)`
    width: 100vw;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;
