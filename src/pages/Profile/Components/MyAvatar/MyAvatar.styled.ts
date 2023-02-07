import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
export const MyAvatarWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 20vh;
    height: inherit;
`;
export const MyAvatarContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
export const DescriptionMyAvatar = styled(Typography)`
    color: #999;
    text-align: center;
`;
