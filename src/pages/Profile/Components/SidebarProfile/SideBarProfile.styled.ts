import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
export const SideBarProfileGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    height: inherit;
    padding-right: 60px;
`;
export const SideBarProfileWrapper = styled(Grid)`
    display: flex;
    flex-direction: column;
    height: inherit;
`;
export const SideBarProfileContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: inherit;
`;
export const InfoProfile = styled(Box)`
    display: flex;
    align-items: center;
`;
export const InfoNameProfile = styled(Typography)`
    padding: 0 0 0 7px;
`;

export const Ordered = styled(Box)``;
export const TitleOrdered = styled(Typography)``;