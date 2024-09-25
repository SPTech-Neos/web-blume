import React from "react";
import * as S from './about.styled';

// import {colors as c} from '../../styles/Colors';
import iconProfile from '../../assets/icon-profile.png';

const About: React.FC<S.AboutProps> = ({children, imgUrl, establishmentInfo}) => {
    return (
        <S.AboutContainer direction="row">
            <S.AboutDesc>
                <h2>Descrição:</h2>
                <S.Description>
                    <span>
                    {establishmentInfo?.description || 'Sem descrição'}
                    </span>
                </S.Description>

                <h2>CNPJ:</h2>
                <S.Description>
                    <span>
                    {establishmentInfo?.cnpj || 'Sem descrição'}
                    </span>
                </S.Description>

                <h2>Horários:</h2>
                <S.Description>
                    <span>
                    {`${establishmentInfo?.startShift} - ${establishmentInfo?.endShift}` || 'Sem descrição'}
                    </span>
                </S.Description>
                
                <h2>Categorias: </h2>
                <S.ContainerCategoria>
                    {children}
                </S.ContainerCategoria>
            </S.AboutDesc>

            <S.AboutImage>
                <S.AboutProfileImg imgUrl={imgUrl ?? iconProfile} establishmentInfo={establishmentInfo}/>
                <h3>{establishmentInfo?.name}</h3>   
            </S.AboutImage>
        </S.AboutContainer>
    );

}
    

export default About;