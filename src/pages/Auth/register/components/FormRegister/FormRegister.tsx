import React, { useState, useEffect } from 'react';
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
import { AccountCircleOutlined, ContactPhoneOutlined, LockPersonOutlined, MailOutlined } from '@mui/icons-material';
import ButtonComponent from '../../../../../components/Button/ButtonComponent';
import InputPassword from '../../../../../components/InputForm/inputPassword/InputPassword';
import IconsComponent from '../../../../../components/Icons/IconsComponent';
import images from '../../../../../assets';
import { useNavigate } from 'react-router-dom';
import config from '../../../../../config/config';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { registerAuth } from '../../../../../api/auth';
const schema = yup.object().shape({
    full_name: yup.string().required('Vui Lòng Nhập Tên'),
    username: yup.string().required('Vui Lòng Nhập Tên'),
    phone: yup.string().required('Vui Lòng Nhập so dien thoai'),
    email: yup
        .string()
        .required('vui Lòng Nhập Email ')
        .email('Trường Này Phải Là Email')
        .min(6, 'Phải Có Ít nhất 6 Ký Tự'),
    password: yup
        .string()
        .required('Vui Lòng Nhập Mật Khẩu')
        .min(8, 'Mật Khẩu Phải Có Ít nhất 8 Ký Tự')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),
    confirmPassword: yup
        .string()
        .required('Vui Lòng Nhập Lại Mật Khẩu')
        .oneOf([yup.ref('password'), null], 'Mật Khẩu Không Chính Xác')
});
type RegisterInput = yup.InferType<typeof schema>;

const FormRegister = () => {
    const methods: any = useForm<RegisterInput>({
        resolver: yupResolver(schema)
    });
    const {
        setError,
        handleSubmit,
        formState: { isSubmitSuccessful, errors }
    } = methods;
    const navigate = useNavigate();
    const registerMutation = useMutation({
        mutationFn: (body: any) => {
            return registerAuth(body);
        }
    });
    const handleRegister: SubmitHandler<RegisterInput> = (value) => {
        registerMutation.mutate(value, {
            onSuccess: () => {
                navigate(config.routes.login);
            },
            onError: (error: any) => {
                [
                    {
                        name: 'username',
                        message: error.response.data.message
                    },
                    {
                        name: 'email',
                        message: error.response.data.message
                    }
                ].forEach(({ name, message }) => setError(name, { message }));
            }
        });
    };
    const handleConvertLogin = () => {
        navigate(config.routes.login);
    };
    return (
        <FormRegisterWrapper>
            <RegisterHeading>
                <HeaderRegister variant='caption'>Register</HeaderRegister>
                <DetailRegister variant='caption'>Create your account to get full access</DetailRegister>
            </RegisterHeading>
            <FormProvider {...methods}>
                <FormInput component='form' onSubmit={methods.handleSubmit(handleRegister)}>
                    <FormWrapper>
                        <AccountCircleOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <Inputs
                            name='full_name'
                            placeholder=''
                            label='Full Name'
                            type='text'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <AccountCircleOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <Inputs name='username' placeholder='' label='User Name' type='text' width={100} height={100} />
                    </FormWrapper>
                    <FormWrapper>
                        <ContactPhoneOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <Inputs name='phone' placeholder='' label='Phone' type='number' width={100} height={100} />
                    </FormWrapper>
                    <FormWrapper>
                        <MailOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <Inputs
                            name='email'
                            placeholder=''
                            label='Email Address'
                            type='email'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <LockPersonOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <InputPassword name='password' label='Password' />
                    </FormWrapper>
                    <FormWrapper>
                        <LockPersonOutlined sx={{ fontSize: 35, mr: 1 }} />
                        <InputPassword name='confirmPassword' label='Confirm Password' />
                    </FormWrapper>
                    <ButtonRegisterWrapper>
                        <ButtonComponent type='submit' text='Register' width={100} height={100} color='#ffff' />
                    </ButtonRegisterWrapper>
                </FormInput>
            </FormProvider>
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
