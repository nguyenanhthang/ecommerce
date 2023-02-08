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
    username: yup.string().required('Vui Lòng Nhập Tên'),
    full_name: yup.string().required('Vui Lòng Nhập Mật Khẩu')
});
type LoginInput = yup.InferType<typeof schema>;
const MyProfile: React.FC<Props> = ({ getUser }) => {
    const methods: any = useForm<LoginInput>({
        resolver: yupResolver(schema)
    });
    const {
        // setError,
        // reset,
        // handleSubmit,
        // formState: { isSubmitSuccessful, errors }
    } = methods;
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [state, setState] = React.useState({
        boy: true,
        girl: false,
        other: false
    });
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
                            <Inputs
                                name='username'
                                label='Tên đăng nhập'
                                type='text'
                                width={100}
                                height={100}
                                value={getUser ? getUser.data.data.username : ''}
                            />
                        </FormWrapper>
                        <FormWrapper>
                            <Inputs
                                name='Full_name'
                                label='Tên'
                                type='text'
                                width={100}
                                height={100}
                                value={getUser ? getUser.data.data.full_name : ''}
                            />
                        </FormWrapper>
                    </FormInput>
                </FormProvider>
                <EmailProfile>Email: {getUser.data.data.email}</EmailProfile>
                <PhoneProfile>Phone: {getUser.data.data.phone}</PhoneProfile>
                <SexWrapperProfile>
                    <FormControl>
                        <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='demo-row-radio-buttons-group-label'
                            name='row-radio-buttons-group'
                        >
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                            <FormControlLabel value='other' control={<Radio />} label='Other' />
                            <FormControlLabel value='disabled' disabled control={<Radio />} label='other' />
                        </RadioGroup>
                    </FormControl>
                </SexWrapperProfile>
                <BirthDayProfile>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Chọn ngày sinh'
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </BirthDayProfile>
                <ButtonComponent type='button' width={10} height={10} text='Save' border='1px solid rgba(0,0,0,.09)' />
            </FormEditProfile>
        </MyProfileWrapper>
    );
};

export default MyProfile;
