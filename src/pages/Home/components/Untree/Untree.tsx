import React from 'react';
import { UntreeIf } from '../../../../types/Component.type';
import { DetailUntree, TitleUntree, UntreeWrapper, IconUntree } from './Untree.styled';

const Untree: React.FC<UntreeIf> = ({ icon, title, detail }) => {
    return (
        <UntreeWrapper>
            <IconUntree>{icon}</IconUntree>
            <TitleUntree>{title}</TitleUntree>
            <DetailUntree>{detail}</DetailUntree>
        </UntreeWrapper>
    );
};

export default Untree;
