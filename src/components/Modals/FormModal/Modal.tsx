import React from "react";
import * as Dialog from '@radix-ui/react-dialog';
import * as S from "./modal.styled";
import errorImg from "../../../assets/ModalImgs/error-img.svg";
import successImg from "../../../assets/ModalImgs/success-img.svg";

const Modal: React.FC<S.ModalProps> = ({ type, message, isOpen, linkTo, onConfirm }) => {
  return (
      <Dialog.Root open={isOpen} onOpenChange={() => isOpen = false}>
          <Dialog.Portal>
            <S.ModalOverlay />
            <S.ModalContent>

              <S.ModalImg
                src={type === "success" ? successImg : errorImg}
                alt={type === "success" ? "Imagem sucesso modal" : "Imagem erro modal"}
              />
              
              <>
                <S.DialogTitle> {type === "success" ? "Sucesso" : "Erro"}</S.DialogTitle>
                <S.DialogDescription> {message}</S.DialogDescription>
              </>

              {onConfirm && (
                <Dialog.Close asChild>
                  <S.DialogButton onClick={onConfirm}>
                    {type === "error" ? "Confirmar" : "Confirmar"}
                  </S.DialogButton>
                </Dialog.Close>
              )}
              
              {!onConfirm && linkTo && (
                <S.DialogLink type={type} to={linkTo}>
                  {type === "success" ? "Continuar" : "Voltar"}
                </S.DialogLink>
              )}

              <Dialog.Close />

            </S.ModalContent>

          </Dialog.Portal>
      </Dialog.Root>
  );
};

export default Modal;
