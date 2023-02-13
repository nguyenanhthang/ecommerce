import React from 'react';
import { ButtonIf } from 'types/Component.type';
import LoadingButton from '@mui/lab/LoadingButton';
import { TexButton } from 'components/Button/ButtonComponent.styled';

const ButtonLoading: React.FC<ButtonIf> = ({ loading, onClick, type, width, height, text, color, border }) => {
    return (
        <LoadingButton
            type={type}
            sx={{ minHeight: `${height}%`, minWidth: `${width}%`, border: border, color: '#ffff' }}
            color='secondary'
            onClick={onClick}
            loading={loading}
            loadingPosition='center'
            variant='contained'
            loadingIndicator='Loading…'
        >
            {text}
        </LoadingButton>
    );
};

export default ButtonLoading;
