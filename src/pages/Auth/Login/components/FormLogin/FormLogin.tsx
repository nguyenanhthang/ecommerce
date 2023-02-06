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
import { getUser, login } from '../../../../../api/auth';
import { useMutation } from '@tanstack/react-query';
import FullScreenLoader from '../../../../../layouts/Loading/Loading';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import request from '../../../../../utils/request';
const schema = yup.object().shape({
    username: yup.string().required('Vui Lòng Nhập Tên'),
    password: yup.string().required('Vui Lòng Nhập Mật Khẩu')
});
type LoginInput = yup.InferType<typeof schema>;
const FormLogin = () => {
    const methods: any = useForm<LoginInput>({
        resolver: yupResolver(schema)
    });
    const {
        setError,
        reset,
        handleSubmit,
        formState: { isSubmitSuccessful, errors }
    } = methods;
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleConvertRegister = () => {
        navigate(config.routes.register);
    };
    const loginMutation = useMutation({
        mutationFn: (body: FormStateType) => {
            return login(body);
        }
    });
    const handleLogin: SubmitHandler<LoginInput> = (value: any) => {
        loginMutation.mutate(value, {
            onSuccess: () => {
                navigate(config.routes.home);
            },
            onError: async (error: any) => {
                [
                    {
                        name: 'username',
                        message: error.response.data.message
                    },
                    {
                        name: 'password',
                        message: error.response.data.message
                    }
                ].forEach(({ name, message }) => setError(name, { message }));
            }
        });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    if (localStorage.getItem('token')) {
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
            <FormProvider {...methods}>
                <FormInput component='form' onSubmit={methods.handleSubmit(handleLogin)}>
                    <FormWrapper>
                        <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                        <Inputs
                            name='username'
                            label='Username Or Email Address'
                            type='text'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                        <InputPassword name='password' label='Password' />
                    </FormWrapper>
                    <ButtonLoginWrapper>
                        <ButtonComponent type='submit' text='Login' width={100} height={100} color='#ffff' border='' />
                    </ButtonLoginWrapper>
                </FormInput>
            </FormProvider>
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
