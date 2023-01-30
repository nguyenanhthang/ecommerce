import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { OutlinedInput, InputLabel, IconButton, InputAdornment, FormControl } from '@mui/material';
import { InputIf } from '../../../types/Component.type';

const InputPassword: React.FC<InputIf> = ({ label }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl sx={{ width: '100%' }}>
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
        </FormControl>
    );
};

export default InputPassword;
