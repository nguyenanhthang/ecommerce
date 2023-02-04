import React from 'react';
import { ColumnFooter, ContainerFooter, LinkFooter, RowFooter, TitleFooter, WrapperFooter } from './Footer.styled';
import IconsComponent from 'components/Icons/IconsComponent';
import ButtonComponent from 'components/Button/ButtonComponent';
import images from '../../assets/index';

const Footer = () => {
    return (
        <ContainerFooter>
            <WrapperFooter>
                <RowFooter>
                    <ColumnFooter>
                        <TitleFooter>About Us</TitleFooter>
                        <LinkFooter>Story</LinkFooter>
                        <LinkFooter>Clients</LinkFooter>
                        <LinkFooter>Testimonials</LinkFooter>
                    </ColumnFooter>
                    <ColumnFooter>
                        <TitleFooter>Services</TitleFooter>
                        <LinkFooter>Marketing</LinkFooter>
                        <LinkFooter>Consulting</LinkFooter>
                        <LinkFooter>Development</LinkFooter>
                        <LinkFooter>Design</LinkFooter>
                    </ColumnFooter>
                    <ColumnFooter>
                        <TitleFooter>Contact Us</TitleFooter>
                        <LinkFooter>United States</LinkFooter>
                        <LinkFooter>United Kingdom</LinkFooter>
                        <LinkFooter>Australia</LinkFooter>
                        <LinkFooter>Support</LinkFooter>
                    </ColumnFooter>
                    <ColumnFooter>
                        <TitleFooter>Social</TitleFooter>
                        <LinkFooter>
                            <ButtonComponent
                                border='none'
                                width={25}
                                height={25}
                                icon={<IconsComponent LinkIcons={images.logoFacebook} width={20} height={20} />}
                            />
                            Facebook
                        </LinkFooter>
                        <LinkFooter>
                            <ButtonComponent
                                border='none'
                                width={25}
                                height={25}
                                icon={<IconsComponent LinkIcons={images.instagram} width={20} height={20} />}
                            />
                            Instagram
                        </LinkFooter>
                        <LinkFooter>
                            <ButtonComponent
                                border='none'
                                width={25}
                                height={25}
                                icon={<IconsComponent LinkIcons={images.youtube} width={20} height={20} />}
                            />
                            Youtube
                        </LinkFooter>
                        <LinkFooter>
                            <ButtonComponent
                                border='none'
                                width={25}
                                height={25}
                                icon={<IconsComponent LinkIcons={images.twitter} width={20} height={20} />}
                            />
                            Twitter
                        </LinkFooter>
                    </ColumnFooter>
                </RowFooter>
            </WrapperFooter>
        </ContainerFooter>
    );
};

export default Footer;
