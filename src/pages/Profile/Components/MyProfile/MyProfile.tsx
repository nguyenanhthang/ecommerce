import React from 'react';
import {
    BirthDayProfile,
    ButtonProfile,
    EmailProfile,
    FormEditProfile,
    HeaderProfile,
    MyProfileWrapper,
    PhoneProfile,
    SexWrapperProfile,
    TitleProfile
} from './MyProfile.styled';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Description } from './MyProfile.styled';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, FormWrapper } from '../../../Auth/Login/components/FormLogin/FormLogin.styled';
import Inputs from '../../../../components/InputForm/Inputs';
import ButtonComponent from 'components/Button/ButtonComponent';
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
type LoginInput = yup.InferType<typeof schema>;
const MyProfile: React.FC<Props> = ({ getUser }) => {
    console.log(getUser);
    const methods: any = useForm<LoginInput>({
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
    return (
        <MyProfileWrapper>
            <HeaderProfile>
                <TitleProfile variant='h5'>Hồ Sơ Của Tôi</TitleProfile>
                <Description>Quản lý thông tin hồ sơ để bảo mật tài khoản</Description>
            </HeaderProfile>
            <FormEditProfile>
                <FormProvider {...methods}>
                    <FormInput component='form'>
                        <FormWrapper>
                            <Inputs name='full_name' placeholder='name' type='text' width={100} height={100} />
                        </FormWrapper>
                    </FormInput>
                    <EmailProfile>
                        Email: <Inputs name='email' placeholder='email' type='text' width={100} height={100} />
                    </EmailProfile>
                    <PhoneProfile>
                        Phone: <Inputs name='phone' placeholder='phone' type='text' width={100} height={100} />
                    </PhoneProfile>
                    <ButtonComponent
                        type='button'
                        width={10}
                        height={10}
                        text='Save'
                        color='#ffff'
                        colorButton='#ee4d2d'
                        border='1px solid rgba(0,0,0,.09)'
                    />
                </FormProvider>
            </FormEditProfile>
        </MyProfileWrapper>
    );
};

export default MyProfile;
