import React from 'react';
import { BannerDetail, DetailBody, DetailContainer, ReviewDetail } from './DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from './../../assets/index';
import ImageProduct from './components/LeftDetail/ImageProduct';
import ChooseOption from './components/RightDetaile/ChooseOption';
import BottomPage from './components/BottomDetail/BottomPage';

const DetailPage = () => {
    return (
        <DetailContainer>
            <BannerDetail>
                <BannerRelative
                    nameBanner='SIMPLE PRODUCT'
                    paramBanner='Home > Shop > Simple Product'
                    imageBanner={images.banner7}
                    width={100}
                    height={50}
                />
            </BannerDetail>
            <DetailBody>
                <ImageProduct />
                <ChooseOption />
            </DetailBody>
            <ReviewDetail>
                <BottomPage />
            </ReviewDetail>
        </DetailContainer>
    );
};

export default DetailPage;
