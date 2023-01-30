import React from 'react';
import { ButtonIf } from '../../types/Component.type';
import { ButtonWrapper, IconsWrapper, TexButton } from './ButtonComponent.styled';

const ButtonComponent: React.FC<ButtonIf> = ({ icon, text, width, height, color }) => {
    return (
        <ButtonWrapper sx={{ minHeight: `${height}%`, minWidth: `${width}%` }}>
            <IconsWrapper>{icon}</IconsWrapper>
            <TexButton variant='caption' sx={{ color: color }}>
                {text}
            </TexButton>
        </ButtonWrapper>
    );
};

export default ButtonComponent;
