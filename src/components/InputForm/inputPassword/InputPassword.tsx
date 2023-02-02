import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { OutlinedInput, InputLabel, IconButton, InputAdornment, FormControl, FormHelperText } from '@mui/material';
import { InputIf } from '../../../types/Component.type';

const InputPassword: React.FC<InputIf> = ({ label, onChange, value, helperText, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl error={error} sx={{ width: '100%' }}>
            <InputLabel htmlFor='outline d-adornment-password'>{label}</InputLabel>
            <OutlinedInput
                onChange={onChange}
                value={value}
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
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};

export default InputPassword;
