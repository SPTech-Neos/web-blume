import React from "react";

import * as S from './headerProfile.styled';

const HeaderProfile: React.FC<S.ProfileProps> = ({ background }) => (
    <S.HeaderBody>

        <S.ContainerSelect>
            <S.ContainerImg background = {background}>
                
            </S.ContainerImg> 
            <S.SelectEmpresa name="empresas" id="empresas">
                <option value="nomeEmpresa">Nome da empresa</option>
            </S.SelectEmpresa>

        </S.ContainerSelect>

    </S.HeaderBody> 
);

export default HeaderProfile;