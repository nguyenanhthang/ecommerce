import React from 'react';
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
    const navigate = useNavigate();
    return (
        <HomeContainer>
            <BannerHome>
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
            <Popular>
                {itemData.map((item) => (
                    <ImgComponent
                        key={item.img}
                        img={item.img}
                        textImg={item.title}
                        onclick={() => navigate(`/${item.title}`)}
                    />
                ))}
            </Popular>
            <NewProductContainer>
                <TitleNewProduct>
                    New
                    <br />
                    Arrival
                </TitleNewProduct>
                <NewProduct />
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
        </HomeContainer>
    );
};

export default Home;
