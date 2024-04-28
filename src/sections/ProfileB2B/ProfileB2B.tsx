import React from "react";

import * as S from './profileB2B.styled';

import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";

const ProfileB2B: React.FC = () => (

    <S.ProfileB2BSection> 
        <S.ContainerProfile direction="column">
            <Profile />
            <Tab />
        </S.ContainerProfile>
    </ S.ProfileB2BSection>
    

);              

export default ProfileB2B;