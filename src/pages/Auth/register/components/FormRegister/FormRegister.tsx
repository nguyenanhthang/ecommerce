import React, { useState } from 'react';
import {
    FormRegisterWrapper,
    DetailRegister,
    HeaderRegister,
    RegisterHeading,
    FormInput,
    FormWrapper,
    WrapperLine,
    Line,
    Or,
    RegisterBySocial,
    ButtonRegisterWrapper,
    ConvertLogin,
    LoginDescription,
    LoginConvert
} from './FormRegister.styled';
import Inputs from '../../../../../components/InputForm/Inputs';
import { AccountCircle, LockPerson } from '@mui/icons-material';
import ButtonComponent from '../../../../../components/Button/ButtonComponent';
import InputPassword from '../../../../../components/InputForm/inputPassword/InputPassword';
import IconsComponent from '../../../../../components/Icons/IconsComponent';
import images from '../../../../../assets';
import { useNavigate } from 'react-router-dom';
const FormRegister = () => {
    const Navigate = useNavigate();
    const handleConvertLogin = () => {
        Navigate('/login');
    };
    return (
        <FormRegisterWrapper>
            <RegisterHeading>
                <HeaderRegister variant='caption'>Register</HeaderRegister>
                <DetailRegister variant='caption'>Create your account to get full access</DetailRegister>
            </RegisterHeading>
            <FormInput>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        id='FullName'
                        placeholder=''
                        label='Full Name'
                        value=''
                        helperText=''
                        type='text'
                        width={100}
                        height={100}
                    />
                </FormWrapper>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        id='EmailAddress'
                        placeholder=''
                        label='Email Address'
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
                <FormWrapper>
                    <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                    <InputPassword label='Confirm Password Password' />
                </FormWrapper>
            </FormInput>
            <WrapperLine>
                <Line></Line>
                <Or variant='caption'>Or</Or>
                <Line></Line>
            </WrapperLine>
            <RegisterBySocial>
                <ButtonComponent
                    border='1px solid #3333'
                    text='Facebook'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoFacebook} width={20} height={20} />}
                />
                <ButtonComponent
                    border='1px solid #3333'
                    text='Google'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoGoogle} width={20} height={20} />}
                />
                <ButtonComponent
                    border='1px solid #3333'
                    text='Apple'
                    width={25}
                    height={25}
                    icon={<IconsComponent LinkIcons={images.logoApple} width={20} height={20} />}
                />
            </RegisterBySocial>
            <ButtonRegisterWrapper>
                <ButtonComponent text='Register' width={100} height={100} color='#ffff' />
            </ButtonRegisterWrapper>
            <ConvertLogin>
                <LoginDescription variant='caption'>
                    Already have an account?{' '}
                    <LoginConvert onClick={handleConvertLogin} variant='caption'>
                        Login
                    </LoginConvert>{' '}
                    here
                </LoginDescription>
            </ConvertLogin>
        </FormRegisterWrapper>
    );
};

export default FormRegister;
