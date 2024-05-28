import React from "react";
import * as S from './profile.styled';7

import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2CSection from '../../sections/ProfileB2C/ProfileB2C';

const ProfileB2C: React.FC = () => (
	<AuthContextProviderClient>

		<S.ProfileB2CSection>
			<Sidebar /> {/*tipo perfil chumbado por enquanto */}
			<ProfileB2CSection></ProfileB2CSection>
		</S.ProfileB2CSection>
		
	</AuthContextProviderClient>
);

export default ProfileB2C;