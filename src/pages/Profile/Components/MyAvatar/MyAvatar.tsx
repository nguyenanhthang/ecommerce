import React from 'react';
import { DescriptionMyAvatar, MyAvatarContainer, MyAvatarWrapper } from './MyAvatar.styled';
import IconsComponent from 'components/Icons/IconsComponent';
import ButtonComponent from 'components/Button/ButtonComponent';

type Props = {
    getUser: any;
};

const MyAvatar: React.FC<Props> = ({ getUser }) => {
    return (
        <MyAvatarWrapper>
            <MyAvatarContainer>
                <IconsComponent LinkIcons={getUser ? getUser.data.data.full_name : ''} />
                <ButtonComponent
                    type='button'
                    width={100}
                    height={10}
                    text='choose img'
                    border='1px solid rgba(0,0,0,.09)'
                />
                <DescriptionMyAvatar>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</DescriptionMyAvatar>
            </MyAvatarContainer>
        </MyAvatarWrapper>
    );
};

export default MyAvatar;
