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
import config from '../../../../../config/config';
import { useMutation } from '@tanstack/react-query';
import { register } from '../../../../../api/auth';
import { FormStateType, initForm, checkErrorType } from '../../../../../types/Users.type';
const FormRegister = () => {
    const navigate = useNavigate();
    const [inPutRegister, setInputRegister] = useState<FormStateType>(initForm);
    const [errorMessage] = useState<FormStateType>(initForm);
    const [checkError] = useState<any>(checkErrorType);
    // const validate = (data: any, messageError: string) => {
    //     if (data.username === '') {
    //         return (errorMessage.username = messageError) && (checkError.username = true);
    //     } else if (data.password === '') {
    //         return (errorMessage.username = messageError) && (checkError.password = true);
    //     } else if (data.email === '') {
    //         return (errorMessage.email = messageError) && (checkError.password = true);
    //     }
    //     return (errorMessage.username = messageError) && (errorMessage.username = messageError);
    // };
    const handleChangeRegister = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputRegister((prev) => ({ ...prev, [name]: event.target.value }));
    };
    const registerMutation = useMutation({
        mutationFn: (data: any) => {
            return register(data);
        }
    });
    const handleRegister = async () => {
        registerMutation.mutate(inPutRegister, {
            onSuccess: () => {
                navigate(config.routes.home);
            },
            onError: async (error: any) => {
                //validate(inPutRegister, error.response.data.message);
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
            <FormInput>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        error={checkError.full_name}
                        id='name'
                        placeholder=''
                        label='Full Name'
                        value={inPutRegister.full_name}
                        helperText={errorMessage.full_name}
                        type='text'
                        width={100}
                        height={100}
                        onChange={handleChangeRegister('full_name')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        error={checkError.username}
                        id='userName'
                        placeholder=''
                        label='User Name'
                        value={inPutRegister.username}
                        helperText={errorMessage.username}
                        type='text'
                        width={100}
                        height={100}
                        onChange={handleChangeRegister('username')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        error={checkError.phone}
                        id='phone'
                        placeholder=''
                        label='Phone'
                        value={inPutRegister.phone}
                        helperText={errorMessage.phone}
                        type='number'
                        width={100}
                        height={100}
                        onChange={handleChangeRegister('phone')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <AccountCircle sx={{ fontSize: 35, mr: 1 }} />
                    <Inputs
                        error={checkError.email}
                        id='EmailAddress'
                        placeholder=''
                        label='Email Address'
                        value={inPutRegister.email}
                        helperText={errorMessage.email}
                        type='email'
                        width={100}
                        height={100}
                        onChange={handleChangeRegister('email')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                    <InputPassword
                        error={checkError.password}
                        helperText={errorMessage.password}
                        value={inPutRegister.password}
                        label='Password'
                        onChange={handleChangeRegister('password')}
                    />
                </FormWrapper>
                <FormWrapper>
                    <LockPerson sx={{ fontSize: 35, mr: 1 }} />
                    <InputPassword
                        error={checkError.confirmPassword}
                        helperText={errorMessage.confirmPassword}
                        value={inPutRegister.confirmPassword}
                        label='passwordConfirm'
                        onChange={handleChangeRegister('confirmPassword')}
                    />
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
                <ButtonComponent onClick={handleRegister} text='Register' width={100} height={100} color='#ffff' />
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
