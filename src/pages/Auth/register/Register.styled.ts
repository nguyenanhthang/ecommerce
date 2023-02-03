import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import images from '../../../assets/index';
export const RegisterContainer = styled(Box)`
    background-image: url(${images.backgroundLogin});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;
