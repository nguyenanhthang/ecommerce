import { styled } from '@mui/material/styles';
import { Box, List } from '@mui/material';
import { deviceComponents } from 'Hook/useDevice';
import Grid2 from '@mui/material/Unstable_Grid2';
export const SideBarWrapper = styled(Grid2)`
    height: 100vh;
    overflow: auto;
    @media screen and ${deviceComponents.mobileL} {
        display: none;
    }
    @media screen and ${deviceComponents.tablet} {
        display: none;
    }
`;
export const SideBarList = styled(List)`
    width: 100%;
`;
