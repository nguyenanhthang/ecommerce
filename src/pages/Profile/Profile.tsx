import React, { useEffect } from 'react';
import { ProfileWrapper } from './Profile.styled';
import MyProfile from './Components/MyProfile/MyProfile';
import SideBarProfile from './Components/SidebarProfile/SideBarProfile';
import MyAvatar from './Components/MyAvatar/MyAvatar';
import { useUser } from '../../Hook/useUser';

type Props = {};

const Profile = (props: Props) => {
    const getUser = useUser();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ProfileWrapper>
            <SideBarProfile getUser={getUser} />
            <MyProfile getUser={getUser} />
            <MyAvatar getUser={getUser} />
        </ProfileWrapper>
    );
};

export default Profile;
