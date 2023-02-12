import React from 'react';
import {
    FormRating,
    FormReviewWrapper,
    HeaderFormReview,
    SubmitReview,
    TitleFormReview,
    YourRatingReview
} from './FormReview.styled';
import { Rating } from '@mui/material';
import { ButtonRegisterWrapper, FormWrapper } from 'pages/Auth/register/components/FormRegister/FormRegister.styled';
import Inputs from 'components/InputForm/Inputs';
import ButtonComponent from 'components/Button/ButtonComponent';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
type Props = {};

const FormReview = (props: Props) => {
    const methods: any = useForm<RegisterInput>({
        resolver: yupResolver(schema)
    });
    const {
        setError,
        handleSubmit,
        formState: { isSubmitSuccessful, errors }
    } = methods;
    const [value, setValue] = React.useState<number | null>(4);
    return (
        <FormReviewWrapper md={5.5} lg={5.5} sm={12} xs={12}>
            <HeaderFormReview>
                <TitleFormReview variant='h4'>Add a Review</TitleFormReview>
                <YourRatingReview variant='caption'>
                    Your Rating:{' '}
                    <Rating
                        name='simple-controlled'
                        value={value}
                        onChange={(event, newValue: any) => {
                            setValue(newValue);
                        }}
                    />
                </YourRatingReview>
            </HeaderFormReview>
            <FormProvider {...methods}>
                <FormRating component='form'>
                    <FormWrapper>
                        <Inputs
                            name='full_name'
                            placeholder=''
                            label='Your Full Name'
                            type='text'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <Inputs
                            name='full_name'
                            placeholder=''
                            label='Email Address'
                            type='text'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <Inputs
                            name='full_name'
                            placeholder=''
                            label='Phone Number'
                            type='text'
                            width={100}
                            height={100}
                        />
                    </FormWrapper>
                    <FormWrapper>
                        <Inputs name='full_name' placeholder='' label='Review' type='text' width={100} height={100} />
                    </FormWrapper>
                    <ButtonRegisterWrapper>
                        <ButtonComponent type='submit' text='Submit Now' width={100} height={100} color='#ffff' />
                    </ButtonRegisterWrapper>
                </FormRating>
            </FormProvider>
        </FormReviewWrapper>
    );
};

export default FormReview;
