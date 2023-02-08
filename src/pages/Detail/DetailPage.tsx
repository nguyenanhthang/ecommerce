import React from 'react';
import {
    BannerDetail,
    DetailBody,
    DetailContainer,
    RelativeProductDetailWrapper,
    ReviewDetail
} from './DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from './../../assets/index';
import ImageProduct from './components/LeftDetail/ImageProduct';
import ChooseOption from './components/RightDetaile/ChooseOption';
import BottomPage from './components/BottomDetail/BottomPage';
import RelatedProduct from './components/ReLatedProduct/RelatedProduct';
import Footer from 'layouts/footer/Footer';
import { useDetail } from '../../Hook/useProduct';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const userId: any = useParams();
    const getDetailProduct = useDetail(userId.id);
    //console.log(getDetailProduct);
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
                <ImageProduct getDetailProduct={getDetailProduct?.data?.data} />
                <ChooseOption getDetailProduct={getDetailProduct?.data?.data} />
            </DetailBody>
            <ReviewDetail>
                <BottomPage />
            </ReviewDetail>
            <RelativeProductDetailWrapper>
                <RelatedProduct getDetailProduct={getDetailProduct?.data} />
            </RelativeProductDetailWrapper>
            <Footer />
        </DetailContainer>
    );
};

export default DetailPage;
