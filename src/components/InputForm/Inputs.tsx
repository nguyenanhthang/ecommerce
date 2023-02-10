/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { InputIf } from '../../types/Component.type';
import { InputWrapper } from './Inputs.styled';
import { Controller, useFormContext } from 'react-hook-form';
const Inputs: React.FC<InputIf> = ({ id, name, label, type, ...otherProps }) => {
    const {
        control,
        formState: { errors },
        setValue
    } = useFormContext();
    return (
        <Controller
            defaultValue=''
            control={control}
            name={name}
            render={({ field }) => (
                <InputWrapper
                    {...otherProps}
                    {...field}
                    placeholder={otherProps.placeholder}
                    inputProps={{ style: { height: `${otherProps.height}`, width: `${otherProps.width}` } }}
                    label={label}
                    type={type}
                    error={!!errors[name]}
                    helperText={errors[name] && `${errors[name]?.message}`}
                />
            )}
        />
    );
};

export default Inputs;
