import React from 'react';
import { BannerIF } from '../../../../types/Component.type';
import {
    BannerWrapper,
    ButtonBanner,
    ButtonBannerWrap,
    Banner,
    BannerContainer,
    TextBanner,
    TextBannerWrap
} from './BannerRelative.styled';
import { Box } from '@mui/system';
const BannerRelative: React.FC<BannerIF> = ({ ...otherProps }) => {
    return (
        <BannerWrapper
            sx={{
                width: `${otherProps.width}%`,
                height: `${otherProps.height}vh`
            }}
        >
            <BannerContainer>
                <Banner sx={{ background: `url(${otherProps.imageBanner})` }}>
                    <TextBannerWrap>
                        <TextBanner>{otherProps.nameBanner}</TextBanner>
                    </TextBannerWrap>
                    <ButtonBannerWrap>
                        <ButtonBanner onClick={otherProps.onClick}>{otherProps.nameButton}</ButtonBanner>
                    </ButtonBannerWrap>
                    <TextBannerWrap>
                        <Box></Box>
                    </TextBannerWrap>
                </Banner>
            </BannerContainer>
        </BannerWrapper>
    );
};

export default BannerRelative;
