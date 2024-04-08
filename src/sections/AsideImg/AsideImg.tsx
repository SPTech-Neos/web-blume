import React from "react";
import * as S from './AsideImg.styled';
import Container from "../../components/Container/Container";

const AsideImg: React.FC<S.AsideImgProps> = ({ imgUrl, bgColor, imgAlt }) => {
    return (
        <S.AsideImg imgAlt={imgAlt} bgColor={bgColor} imgUrl={imgUrl}>
            <img src={imgUrl} alt={imgAlt} />
        </S.AsideImg>

    );
}

export default AsideImg;