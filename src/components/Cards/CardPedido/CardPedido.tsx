import React, {useState} from "react";
import * as S from './cardPedido.styled';
import { Trash } from "phosphor-react";
import { Info } from "phosphor-react";
import { colors as c } from "../../../styles/Colors";
import Modal from "../../Modals/FormModal/Modal";
import { ModalProps } from "../../Modals/FormModal/modal.styled";

const CardPedido: React.FC<S.PedidoProps> = ({service, client, employee, establishment, preco, status, imgUrl}) => {

    const classe = status == "Cancelado"? "cancel" : 
        status == "Em Andamento"? "andamento" 
        : "concluido"; 


    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja cancelar o pedido?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleDeleteConfirmation = () => {
        alert("deletou");
        // if (token) {
        //     handleDeleteEmployee(token.employeeId);
        //     setModalProps(null);
        //     navigate("/");
        // }
    };

    return (
        <S.CardContainer>
            <S.ImgPedido imgUrl={imgUrl}/>

            <S.InfoContainer>

                <S.InfoBody>
                    <S.Label> Serviço </S.Label>
                    <S.LabelValue> {service} </S.LabelValue>
                </S.InfoBody>
                
                <S.InfoBody>
                    <S.Label> Cliente </S.Label>
                    <S.LabelValue> {client} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Funcionário </S.Label>
                    <S.LabelValue> {employee} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Estabelecimento </S.Label>
                    <S.LabelValue> {establishment} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label > Status </S.Label>
                    <S.LabelValue className={classe}> {status} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Preço </S.Label>
                    <S.LabelValue> R$ {preco} </S.LabelValue>
                </S.InfoBody>

                <S.InfoButtons>
                    <Trash weight="bold" color="red" size={status == "Em Andamento"? 25 : 0} onClick={openDeleteModal}/>
                    <Info weight="bold" color={c.violet800} size={25}/>
                </S.InfoButtons>


            </S.InfoContainer>
            {modalProps && (
                        <Modal
                            type={modalProps.type}
                            message={modalProps.message}
                            isOpen={modalProps.isOpen}
                            linkTo={modalProps.linkTo}
                            onConfirm={modalProps.onConfirm}
                            onClose={() => setModalProps(null)}
                        />
            )}
         </S.CardContainer>
    );
}

export default CardPedido;