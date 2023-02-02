import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { OutlinedInput, InputLabel, IconButton, InputAdornment, FormControl, FormHelperText } from '@mui/material';
import { InputIf } from '../../../types/Component.type';
import { Controller, useFormContext } from 'react-hook-form';

const InputPassword: React.FC<InputIf> = ({ label, name }) => {
    const {
        control,
        formState: { errors }
    } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormControl {...field} error={!!errors[name]} sx={{ width: '100%' }}>
                    <InputLabel htmlFor='outline d-adornment-password'>{label}</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                    <FormHelperText>{errors[name] && `${errors[name]?.message}`}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default InputPassword;
