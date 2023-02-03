import React from 'react';
import { ImgIf } from 'types/Component.type';
import {
    ButtonImg,
    ButtonImgWrap,
    Image,
    ImageContainer,
    ImageWrapper,
    TextImg,
    TextImgWrap
} from './ImgComponent.styled';
import { Box } from '@mui/material';

const ImgComponent: React.FC<ImgIf> = ({ img, textImg, onclick }) => {
    return (
        <ImageWrapper>
            <ImageContainer>
                <Image style={{ backgroundImage: `url(${img})` }}>
                    <Box></Box>
                    <ButtonImgWrap>
                        <ButtonImg onClick={onclick}>Shop Now</ButtonImg>
                    </ButtonImgWrap>
                    <TextImgWrap>
                        <TextImg>{textImg}</TextImg>
                    </TextImgWrap>
                </Image>
            </ImageContainer>
        </ImageWrapper>
    );
};

export default ImgComponent;
