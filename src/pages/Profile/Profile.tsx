import React from 'react';
import { ProfileWrapper } from './Profile.styled';
import MyProfile from './Components/MyProfile/MyProfile';
import SideBarProfile from './Components/SidebarProfile/SideBarProfile';
import MyAvatar from './Components/MyAvatar/MyAvatar';

type Props = {};

const Profile = (props: Props) => {
    return (
        <ProfileWrapper>
            <SideBarProfile />
            <MyProfile />
            <MyAvatar />
        </ProfileWrapper>
    );
};

export default Profile;
