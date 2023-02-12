import React, { useEffect } from 'react';
import Banner from './components/banner/Banner';
import {
    AboutUsHomeWrapper,
    BannerHome,
    HomeContainer,
    NewProductContainer,
    Popular,
    TitleNewProduct,
    UntreeContainer
} from './Home.styled';
import Untree from './components/Untree/Untree';
import { LocalShippingOutlined, SecurityOutlined, HistoryOutlined } from '@mui/icons-material';
import images from '../../assets/index';
import ImgComponent from '../../components/Img/ImgComponent';
import { useNavigate } from 'react-router-dom';
import NewProduct from './components/ProductNew/NewProduct';
import BannerRelative from './components/BannerRalative/BannerRelative';
import Footer from 'layouts/Footer/Footer';
import { useProduct, useCategories } from '../../Hook/useProduct';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
const itemData = [
    {
        img: images.clockImg,
        title: 'Watches'
    },
    {
        img: images.clothesImg,
        title: 'Clothes'
    },
    {
        img: images.jacketImg,
        title: 'Jacket'
    },
    {
        img: images.glassesImg,
        title: 'Glasses'
    }
];
const Home = () => {
    const search = useAppSelector((state: RootState) => state.product.search);
    const limit: number = 4;
    const navigate = useNavigate();
    const getProducts: any = useProduct(search);
    const getCategory: any = useCategories(limit);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <HomeContainer>
            <BannerHome container>
                <Banner />
            </BannerHome>
            <UntreeContainer>
                <Untree
                    icon={<LocalShippingOutlined />}
                    title='WORLDWIDE DELIVERY'
                    detail='Far far away, behind the word mountains, far from the countries.'
                />
                <Untree
                    icon={<SecurityOutlined />}
                    title='SECURE PAYMENTS'
                    detail='Far far away, behind the word mountains, far from the countries.'
                />
                <Untree
                    icon={<HistoryOutlined />}
                    title='SIMPLE RETURNS'
                    detail='Far far away, behind the word mountains, far from the countries.'
                />
            </UntreeContainer>
            <Popular container spacing={1}>
                {getCategory?.data?.data?.data?.map((item: any, i: number) => (
                    <ImgComponent
                        key={i}
                        img={item.cate_image}
                        textImg={item.cate_name}
                        onclick={() => navigate(`/${item.cate_name}`)}
                    />
                ))}
            </Popular>
            <NewProductContainer>
                <TitleNewProduct>
                    New
                    <br />
                    Arrival
                </TitleNewProduct>
                <NewProduct getProducts={getProducts} />
            </NewProductContainer>
            <AboutUsHomeWrapper>
                <BannerRelative
                    width={100}
                    height={40}
                    imageBanner={images.bannerFooter1}
                    nameBanner='collection houses our first-ever'
                    nameButton='About Us'
                />
                <BannerRelative
                    width={48.2}
                    height={40}
                    imageBanner={images.bannerFooter2}
                    nameBanner='collection houses our first-ever'
                    nameButton='Read more'
                />
                <BannerRelative
                    width={48.2}
                    height={40}
                    imageBanner={images.bannerFooter3}
                    nameBanner='collection houses our first-ever'
                    nameButton='Read more'
                />
            </AboutUsHomeWrapper>
            <Footer />
        </HomeContainer>
    );
};

export default Home;
