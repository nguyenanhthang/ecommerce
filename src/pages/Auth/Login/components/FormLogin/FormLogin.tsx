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
import { Navigate, useNavigate } from 'react-router-dom';
import config from '../../../../../config/config';
import { FormStateType, initForm } from '../../../../../types/Users.type';
import { login } from '../../../../../api/auth';
import { useMutation } from '@tanstack/react-query';
import FullScreenLoader from '../../../../../layouts/Loading/Loading';
const FormLogin = () => {
    const [inPutLogin, setInputLogin] = useState<FormStateType>(initForm);
    const [errorMessage] = useState<FormStateType>(initForm);
    const [checkError] = useState<any>({ messageUsername: false, messageUserPassword: false });
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleChangeLogin = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputLogin((prev) => ({ ...prev, [name]: event.target.value }));
    };
    const handleConvertRegister = () => {
        navigate(config.routes.register);
    };
    const validate = (data: any, messageError: string) => {
        if (data.username === '') {
            return (errorMessage.username = messageError) && (checkError.messageUsername = true);
        } else if (data.password === '') {
            return (errorMessage.password = messageError) && (checkError.messageUserPassword = true);
        }
        return (errorMessage.password = messageError) && (errorMessage.password = messageError);
    };
    const loginMutation = useMutation({
        mutationFn: (body: FormStateType) => {
            return login(body);
        }
    });
    const handleLogin = async () => {
        loginMutation.mutate(inPutLogin, {
            onSuccess: () => {
                navigate(config.routes.home);
            },
            onError: async (error: any) => {
                validate(inPutLogin, error.response.data.message);
            }
        });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    if (localStorage.getItem('user')) {
        return <Navigate to={config.routes.home} />;
    }
    if (loginMutation.isLoading) {
        return <FullScreenLoader />;
    }
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
                        error={checkError.messageUsername}
                        id='username'
                        placeholder=''
                        label='Username Or Email Address'
                        value={inPutLogin.username}
                        helperText={errorMessage.username}
                        type='text'
                        width={100}
                        height={100}
                        onChange={handleChangeLogin('username')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                    <InputPassword
                        error={checkError.messageUserPassword}
                        helperText={errorMessage.password}
                        value={inPutLogin.password}
                        label='Password'
                        onChange={handleChangeLogin('password')}
                    />
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
            </LoginBySocial>
            <ButtonLoginWrapper>
                <ButtonComponent onClick={handleLogin} text='Login' width={100} height={100} color='#ffff' border='' />
            </ButtonLoginWrapper>
            <ConvertRegister>
                <RegisterDescription variant='caption'>
                    Don’t have an account?{' '}
                    <RegisterConvert onClick={handleConvertRegister} variant='caption'>
                        Sign Up
                    </RegisterConvert>{' '}
                    here
                </RegisterDescription>
            </ConvertRegister>
        </FormLoginWrapper>
    );
};

export default FormLogin;
