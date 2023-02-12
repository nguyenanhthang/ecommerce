import { styled } from '@mui/material/styles';
import { Box, CardMedia, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const CardPageWrap = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 150vh;
    max-width: 100vw;
`;
export const CardPageContainer = styled(Grid)`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    width: inherit;
    height: inherit;
`;
