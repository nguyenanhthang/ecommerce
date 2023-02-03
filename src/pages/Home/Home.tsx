import React, { useEffect } from 'react';
import Banner from './components/banner/Banner';
import { BannerHome, HomeContainer, Popular, UntreeContainer } from './Home.styled';
import Untree from './components/Untree/Untree';
import { LocalShippingOutlined, SecurityOutlined, HistoryOutlined } from '@mui/icons-material';
import images from '../../assets/index';
import ImgComponent from '../../components/Img/ImgComponent';
import { useNavigate } from 'react-router-dom';
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
    // useEffect(() => {
    //     const handleScroll = () => {

    //     };
    //     window.addEventListener('scroll', handleScroll);
    // }, []);
    console.log(window.scrollY);
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
        </HomeContainer>
    );
};

export default Home;
