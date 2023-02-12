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
import Grid2 from '@mui/material/Unstable_Grid2';
const ImgComponent: React.FC<ImgIf> = ({ img, textImg, onclick }) => {
    return (
        <Grid2 sx={{ height: '400px' }} xs={12} md={3} sm={6}>
            <ImageWrapper>
                <ImageContainer>
                    <Image style={{ backgroundImage: `url(http://hieu.fresher.ameladev.click/${img})` }}>
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
        </Grid2>
    );
};

export default ImgComponent;
