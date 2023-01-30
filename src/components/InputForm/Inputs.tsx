import React from 'react';
import { InputIf } from '../../types/Component.type';
import { InputWrapper } from './Inputs.styled';

const Inputs: React.FC<InputIf> = ({ id, label, type, height, width, helperText, value, placeholder }) => {
    return (
        <InputWrapper
            inputProps={{ style: { height: `${height}`, width: `${width}` } }}
            id={id}
            label={label}
            type={type}
            helperText={helperText}
            defaultValue={value}
            placeholder={placeholder}
        />
    );
};

export default Inputs;
