import React, { useState } from 'react';
import {
    EmailProfile,
    FormEditProfile,
    HeaderProfile,
    MyProfileWrapper,
    PhoneProfile,
    TitleProfile
} from './MyProfile.styled';
import {
    Description,
    MyProfileParent,
    MyAvatarWrapper,
    MyAvatarContainer,
    DescriptionMyAvatar
} from './MyProfile.styled';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, FormWrapper } from '../../../Auth/Login/components/FormLogin/FormLogin.styled';
import Inputs from '../../../../components/InputForm/Inputs';
import ButtonComponent from 'components/Button/ButtonComponent';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../../../api/auth';
import { Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { devNull } from 'os';
type Props = {
    getUser: any;
};
const schema = yup.object().shape({
    full_name: yup.string().required('Vui Lòng Nhập Tên'),
    phone: yup.string().required('Vui Lòng Nhập so dien thoai'),
    email: yup
        .string()
        .required('vui Lòng Nhập Email ')
        .email('Trường Này Phải Là Email')
        .min(6, 'Phải Có Ít nhất 6 Ký Tự')
});
type ProfileInput = yup.InferType<typeof schema>;
const MyProfile: React.FC<Props> = ({ getUser }) => {
    const methods: any = useForm<ProfileInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            full_name: getUser?.data?.data?.full_name,
            email: getUser?.data?.data?.email,
            phone: getUser?.data?.data?.phone
        }
    });
    const {
        setError,
        reset,
        handleSubmit,
        formState: { isSubmitSuccessful, errors }
    } = methods;
    const updateMutation = useMutation({
        mutationFn: () => getUser
    });
    const [state, setstate] = useState<any>('');
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        const file = event.target.files;
        formData.append('avatar', file ? file[0].name : '');
        setstate(formData);
    };
    console.log(getUser);
    const updateLogin: SubmitHandler<ProfileInput> = (value: any) => {
        console.log({
            full_name: value.full_name,
            email: value.email,
            phone: value.phone,
            avatar: state.get('avatar')
        });
        updateMutation.mutate(value, {
            onSuccess: () => {
                alert('update thanh cong');
                return updateUser(getUser?.data?.data?.id, {
                    full_name: value.full_name,
                    email: value.email,
                    phone: value.phone,
                    avatar: state.get('avatar')
                });
            }
        });
    };
    return (
        <MyProfileParent container xs={9}>
            <MyProfileWrapper xs={9}>
                <HeaderProfile>
                    <TitleProfile variant='h5'>Hồ Sơ Của Tôi</TitleProfile>
                    <Description>Quản lý thông tin hồ sơ để bảo mật tài khoản</Description>
                </HeaderProfile>
                <FormEditProfile>
                    <FormProvider {...methods}>
                        <FormInput component='form' onSubmit={methods.handleSubmit(updateLogin)}>
                            <FormWrapper>
                                <Inputs name='full_name' placeholder='name' type='text' width={100} height={100} />
                            </FormWrapper>
                            <EmailProfile>
                                Email: <Inputs name='email' placeholder='email' type='text' width={100} height={100} />
                            </EmailProfile>
                            <PhoneProfile>
                                Phone: <Inputs name='phone' placeholder='phone' type='text' width={100} height={100} />
                            </PhoneProfile>
                            <ButtonComponent
                                type='submit'
                                width={10}
                                height={10}
                                text='Save'
                                color='#ffff'
                                colorButton='#ee4d2d'
                                border='1px solid rgba(0,0,0,.09)'
                            />
                        </FormInput>
                    </FormProvider>
                </FormEditProfile>
            </MyProfileWrapper>
            <MyAvatarWrapper xs={3}>
                <MyAvatarContainer>
                    <input
                        type='file'
                        accept='image/*'
                        name='image'
                        id='file'
                        onChange={loadFile}
                        style={{ display: 'none' }}
                    />
                    <img
                        src={state ? state : getUser.data.data.avatar}
                        style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                        id='output'
                        alt=''
                    />
                    <Box display='flex' justifyContent='flex-end' padding='10px 20px'>
                        <label htmlFor='file' style={{ cursor: 'pointer' }}>
                            <PhotoCamera />
                        </label>
                    </Box>
                    <DescriptionMyAvatar>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</DescriptionMyAvatar>
                </MyAvatarContainer>
            </MyAvatarWrapper>
        </MyProfileParent>
    );
};

export default MyProfile;
