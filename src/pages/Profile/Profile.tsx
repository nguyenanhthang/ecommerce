import React, { useEffect } from 'react';
import { ProfileWrapper } from './Profile.styled';
import MyProfile from './Components/MyProfile/MyProfile';
import SideBarProfile from './Components/SidebarProfile/SideBarProfile';
import { useUser } from '../../Hook/useUser';

type Props = {};

const Profile = (props: Props) => {
    const getUser = useUser();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ProfileWrapper>
            {!getUser.isLoading && <SideBarProfile getUser={getUser} />}
            {!getUser.isLoading && <MyProfile getUser={getUser} />}
        </ProfileWrapper>
    );
};

export default Profile;
