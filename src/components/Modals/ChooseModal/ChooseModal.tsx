import React from "react";
import * as S from './chooseModal.styled';
import { SecondaryTitle } from "../../Texts/Title/title.styled";
import { PrimaryButton as Button } from "../../Button/button.styled";


const ChooseModal:React.FC<S.SelectEmployee> = () => {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const selected = document.getElementsByClassName("active");
        
        selected[0]?.classList.remove("active");

        const clicked = (event.target as HTMLElement);
        const parentClicked = clicked.parentElement;

        if(parentClicked?.id == "container-employees"){
            clicked.classList.add("active");
        }else{
            parentClicked?.classList.add("active");
        }

    }

    const closeModal = (event: React.MouseEvent<SVGSVGElement> | void) => {
        const clicked = (event?.target as HTMLElement).parentElement;
        const parentClicked = clicked?.parentElement?.parentElement;
        parentClicked?.classList.remove("active-modal");
        
    }

    const handleSelect = () => {
        const modal = document.getElementsByClassName("active-modal");
        modal[0].classList.remove("active-modal");
        // const selected = document.getElementsByClassName("active");
        const schedule = document.getElementById("schedule");
        schedule?.classList.add("active-schedule");
    }

    return (
        <S.ModalSection id="editModal">
            <S.ModalContainer>
                <S.ModalBody>
                    <S.CloseModal size={22} onClick={closeModal}/>
                    <SecondaryTitle  size="lg" lines={true}>
                        Agendar Serviço 
                    </SecondaryTitle>
                    <S.EmployeeContainer>
                        <h3>Escolha o profissional que vai realizar o serviço:</h3>
                        <S.EmployeeChoiceContainer id="container-employees">
                            <S.ProfileEmployee id="1" onClick={handleClick}>
                                <S.ProfileImg />
                                <h4>Kevin</h4>
                            </S.ProfileEmployee>
                        </S.EmployeeChoiceContainer>
                    <Button width="180px" onClick={handleSelect}>
                        Selecionar
                    </Button>
                    </S.EmployeeContainer>
                </S.ModalBody>
            </S.ModalContainer>
        </S.ModalSection>
    );
}

export default ChooseModal;