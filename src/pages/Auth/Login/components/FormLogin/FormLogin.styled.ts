import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
export const FormLoginWrapper = styled(Box)`
    background: #ffff;
    position: absolute;
    min-width: 40%;
    box-shadow: 0px 10px 30px 0px rgb(13 12 13 / 20%);
    padding: 2% 4%;
    border-radius: 5px;
`;
export const LoginHeading = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;
export const HeaderLogin = styled(Typography)`
    color: #140c40;
    font-weight: 600;
    margin-bottom: 16px;
    font-size: 2rem;
`;
export const DetailLogin = styled(Typography)`
    color: #9ba2a7;
    margin-bottom: 15px;
    font-weight: normal;
    line-height: 1.4;
    font-size: 1.1rem;
`;
export const FormInput = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const FormWrapper = styled(Box)`
    width: 100%;
    margin-top: 6%;
    display: flex;
    align-items: center;
    .MuiFormControl-root {
        height: 45px;
        .MuiInputBase-root {
            height: 100%;
        }
        legend {
            font-size: 0.6rem;
        }
    }
    .MuiFormLabel-root {
        font-size: small;
        line-height: normal;
    }
    #outlined-adornment-password {
        padding: 0 0 0 15px;
    }
`;
export const LoginCheck = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 6%;
`;
export const ForgotPassword = styled(Typography)`
    color: #fd9883;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: unset;
    font-size: 1.1rem;
`;
export const WrapperLine = styled(Box)`
    margin-top: 6%;
    display: flex;
    align-items: center;
`;
export const Line = styled(Box)`
    height: 1px;
    width: 100%;
    background-color: #dbdbdb;
    flex: 1;
`;
export const Or = styled(Typography)`
    color: #ccc;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: 0.75rem;
`;
export const LoginBySocial = styled(Box)`
    margin-top: 6%;
    display: flex;
    justify-content: space-between;
`;
export const ButtonLoginWrapper = styled(Box)`
    margin-top: 6%;
    width: 100%;
    height: 38px;
    background: #ee4d2d;
    border-radius: 4px;
`;
export const ConvertRegister = styled(Box)`
    margin-top: 6%;
    width: 100%;
`;
export const RegisterDescription = styled(Typography)`
    color: #9ba2a7;
`;
export const RegisterConvert = styled(Typography)`
    color: #fd9883;
    cursor: pointer;
`;
