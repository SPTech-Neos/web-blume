import React, { useState, useContext, useEffect } from "react";
import * as S from "./establishmentProducts.styled";
import Searchbar from "../../components/Searchbar/Searchbar";
import { CardProduto } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
import Cookies from "js-cookie";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";
import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

// import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
const EstablishmentProducts: React.FC = () => {
  const estabAdapter = new EstablishmentAdapter();
  const [, setEstablishment] = useState<EstablishmentResponseDto | null>(null);

  const { isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

  // const handleAddProducts = () => {
  //     const modal = document.getElementById("modal-adicionar");

  //     modal?.classList.add("active");
  // }

  useEffect(() => {
    handleGetAllProducts();
  }, [isAuthenticatedEmployee]);

  const handleGetAllProducts = async () => {
    const estabFull = await estabAdapter.getEstablishmentById(
      token.establishment.id
    );
    setEstablishment(estabFull);
  };

  return (
    <S.ProductsSection>
      <CreateModal id="modal-adicionar" titulo="Produto" />

      <S.ProductsContainer>
        <h1> PRODUTOS </h1>
        <Searchbar placeholderText="Nome do produto..." />
        <S.ProductsButtons>
          <h2
            onClick={
              () => {}
              // handleAddProducts
            }
          >
            ADICIONAR PRODUTOS
          </h2>
        </S.ProductsButtons>
        <S.ProductsBody>
          {/* {establishmentFull?.products &&
            establishmentFull.products.map(
              (data: {
                id: string | number | undefined;
                brand: string | undefined;
                name: string | undefined;
                value: number | undefined;
              }) => ( */}
          <CardProduto
            id={1}
            service={"Serviço"}
            brand={"Marca"}
            status="Ativo"
            preco={9.9}
          />
          {/* )
            )} */}
        </S.ProductsBody>
      </S.ProductsContainer>
    </S.ProductsSection>
  );
};

export default EstablishmentProducts;
