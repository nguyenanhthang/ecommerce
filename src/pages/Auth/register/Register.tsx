import React from 'react';
import { RegisterContainer, RegisterWrap } from './Register.styled';
import FormRegister from './components/FormRegister/FormRegister';
const Register = () => {
    return (
        <RegisterContainer>
            <RegisterWrap container>
                <FormRegister />
            </RegisterWrap>
        </RegisterContainer>
    );
};

export default Register;
