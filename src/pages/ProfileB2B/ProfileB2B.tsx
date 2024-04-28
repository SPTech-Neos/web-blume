import React from 'react';
import HeaderProfile from '../../components/Headers/HeaderProfile/HeaderProfile';
import Sidebar from '../../components/Sidebar/Sidebar'
import ProfileB2BSection from '../../sections/ProfileB2B/ProfileB2B';
// import * as S from './profileB2B.styled';

const ProfileB2B: React.FC = () => (
	<>
		<HeaderProfile />
		<Sidebar />
		<ProfileB2BSection />
	</>
);

export default ProfileB2B;