import React, { useState } from 'react';
import {
    DetailLogin,
    FormLoginWrapper,
    HeaderLogin,
    LoginHeading,
    FormInput,
    FormWrapper,
    LoginCheck,
    ForgotPassword,
    WrapperLine,
    Line,
    Or,
    LoginBySocial,
    ButtonLoginWrapper,
    ConvertRegister,
    RegisterDescription,
    RegisterConvert
} from './FormLogin.styled';
import Inputs from '../../../../../components/InputForm/Inputs';
import { AccountCircle, LockPerson } from '@mui/icons-material';
import { FormControlLabel, Checkbox } from '@mui/material';
import ButtonComponent from '../../../../../components/Button/ButtonComponent';
import InputPassword from '../../../../../components/InputForm/inputPassword/InputPassword';
import IconsComponent from '../../../../../components/Icons/IconsComponent';
import images from '../../../../../assets';
const FormLogin = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <FormLoginWrapper>
            <LoginHeading>
                <HeaderLogin variant='caption'>Login</HeaderLogin>
                <DetailLogin variant='caption'>Enter Login details to get access</DetailLogin>
            </LoginHeading>
            <FormInput>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        id='Login'
                        placeholder=''
                        label='Username Or Email Address'
                        value=''
                        helperText=''
                        type='text'
                        width={100}
                        height={100}
                    />
                </FormWrapper>
                <FormWrapper>
                    <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                    <InputPassword label='Password' />
                </FormWrapper>
            </FormInput>
            <LoginCheck>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name='keepLogin' />}
                    label='Keep Me Logged In'
                />
                <ForgotPassword variant='caption'>Forgot Password?</ForgotPassword>
            </LoginCheck>
            <WrapperLine>
                <Line></Line>
                <Or variant='caption'>Or</Or>
                <Line></Line>
            </WrapperLine>
            <LoginBySocial>
                <ButtonComponent
                    text='Facebook'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoFacebook} width={20} height={20} />}
                />
                <ButtonComponent
                    text='Google'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoGoogle} width={20} height={20} />}
                />
                <ButtonComponent
                    text='Apple'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoApple} width={20} height={20} />}
                />
            </LoginBySocial>
            <ButtonLoginWrapper>
                <ButtonComponent text='Login' width={100} height={100} color='#ffff' />
            </ButtonLoginWrapper>
            <ConvertRegister>
                <RegisterDescription variant='caption'>
                    Don’t have an account? <RegisterConvert variant='caption'>Sign Up</RegisterConvert> here
                </RegisterDescription>
            </ConvertRegister>
        </FormLoginWrapper>
    );
};

export default FormLogin;
