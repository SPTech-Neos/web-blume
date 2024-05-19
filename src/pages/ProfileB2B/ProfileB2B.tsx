import React from "react";
// import { colors as c } from '../../styles/Colors';

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
// import { Colors } from '../../styles/Colors';
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2BSection from "../../sections/ProfileB2B/ProfileB2B";
// import * as S from './profileB2B.styled';

const ProfileB2B: React.FC = () => {

  return (
    <AuthContextProviderEmployee>
      <div id="profile-wrapper">
        <HeaderProfile />
        <Sidebar />{" "} {/*tipo perfil chumbado por enquanto */}
        <ProfileB2BSection />
      </div>
    </AuthContextProviderEmployee>
  );
}

export default ProfileB2B;
