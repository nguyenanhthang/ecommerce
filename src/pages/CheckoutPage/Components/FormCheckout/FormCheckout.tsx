import React from 'react';
import { Typography } from '@mui/material';
import { CheckOutFormBox, CheckOutFormWrapInput, CheckOutFormWrap, CheckOutForm } from './FormCheckout.styled';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Inputs from '../../../../components/InputForm/Inputs';
type Props = {};
const schema = yup.object().shape({
    username: yup.string().required('Vui Lòng Nhập Tên'),
    password: yup.string().required('Vui Lòng Nhập Mật Khẩu')
});
type LoginInput = yup.InferType<typeof schema>;
const FormCheckout = (props: Props) => {
    const methods: any = useForm<LoginInput>({
        resolver: yupResolver(schema)
    });
    const {
        setError,
        reset,
        handleSubmit,
        formState: { isSubmitSuccessful, errors }
    } = methods;
    return (
        <CheckOutFormWrap>
            <Typography variant='h3'> order now </Typography>
            <Typography variant='h1'> free and fast </Typography>
            <FormProvider {...methods}>
                <CheckOutForm component='form'>
                    <CheckOutFormBox>
                        <CheckOutFormWrapInput>
                            <Inputs name='yourName' label='Your Name' type='text' width={100} height={100} />
                        </CheckOutFormWrapInput>
                        <CheckOutFormWrapInput>
                            <Inputs name='yourPhone' label='Your Phone' type='text' width={100} height={100} />
                        </CheckOutFormWrapInput>
                    </CheckOutFormBox>
                    <CheckOutFormBox>
                        <CheckOutFormWrapInput>
                            <Inputs name='address' label='address' type='text' width={100} height={100} />
                        </CheckOutFormWrapInput>
                        <CheckOutFormWrapInput>
                            <Inputs name='email' label='Email' type='text' width={100} height={100} />
                        </CheckOutFormWrapInput>
                    </CheckOutFormBox>
                    {/* <input type="submit" value="order now" class="btn"> */}
                </CheckOutForm>
            </FormProvider>
        </CheckOutFormWrap>
    );
};

export default FormCheckout;
