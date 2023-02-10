import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
export const MyProfileWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: inherit;
    margin: 0 30px;
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
    width: 100%;
`;
export const EmailProfile = styled(Typography)`
    margin: 30px 0;
`;
export const PhoneProfile = styled(Typography)`
    margin: 0 0 30px 0;
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
