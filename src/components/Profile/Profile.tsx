import React from "react";

import * as S from './profile.styled';

const Profile: React.FC<S.ProfileProps> = ({profile}) => (
	<S.ContainerProfile direction="row">

                <S.ContainerProfileImg profile= {profile} />

                <S.ContainerProfileInfo>
                        <h1>Nome</h1>
                        <S.ContainerTags>
                                <S.TagsProfile>Tag</S.TagsProfile>
                                <S.TagsProfile>Categoria</S.TagsProfile>
                        </S.ContainerTags>
                </S.ContainerProfileInfo>

	</S.ContainerProfile>
);

export default Profile;