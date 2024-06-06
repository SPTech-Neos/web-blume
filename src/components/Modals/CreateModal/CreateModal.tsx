import React from "react";
import * as S from './createModal.styled';

type props = {
    id?: string
}

const CreateModal:React.FC<props> = ({id}) => {
    return (
        <S.ModalSection id={id}>
            <S.ModalContainer>
                
            </S.ModalContainer>
        </S.ModalSection>
    );
}

export default CreateModal;