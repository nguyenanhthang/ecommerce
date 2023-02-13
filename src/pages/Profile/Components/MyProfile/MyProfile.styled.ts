import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Grid } from '@mui/material';
export const MyProfileParent = styled(Grid)`
    display: flex;
`;
export const MyProfileWrapper = styled(Grid)`
    display: flex;
    flex-direction: column;
    height: inherit;
`;
export const HeaderProfile = styled(Box)`
    display: flex;
    flex-direction: column;
`;
export const TitleProfile = styled(Typography)`
    font-weight: 600;
`;
export const Description = styled(Typography)``;
export const FormEditProfile = styled(Box)`
    display: flex;
    flex-direction: column;
`;
export const EmailProfile = styled(Typography)`
    margin: 30px 0;
    width: 100%;
`;
export const PhoneProfile = styled(Typography)`
    margin: 0 0 30px 0;
    width: 100%;
`;
export const SexWrapperProfile = styled(Box)`
    display: flex;
    margin: 30px 0;
`;
export const BirthDayProfile = styled(Box)`
    display: flex;
    margin: 0 0 30px 0;
`;
export const ButtonProfile = styled(Button)`
    margin: 0 0 30px 0;
`;
export const MyAvatarWrapper = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: inherit;
`;
export const MyAvatarContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const DescriptionMyAvatar = styled(Typography)`
    color: #999;
    text-align: center;
`;
