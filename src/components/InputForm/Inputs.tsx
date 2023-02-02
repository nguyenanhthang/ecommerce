import React from 'react';
import { InputIf } from '../../types/Component.type';
import { InputWrapper } from './Inputs.styled';

const Inputs: React.FC<InputIf> = ({ id, label, type, ...otherProps }) => {
    return (
        <InputWrapper
            error={otherProps.error}
            inputProps={{ style: { height: `${otherProps.height}`, width: `${otherProps.width}` } }}
            id={id}
            label={label}
            type={type}
            helperText={otherProps.helperText}
            defaultValue={otherProps.value}
            onChange={otherProps.onChange}
            placeholder={otherProps.placeholder}
        />
    );
};

export default Inputs;
