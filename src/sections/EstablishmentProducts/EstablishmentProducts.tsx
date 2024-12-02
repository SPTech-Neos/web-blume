import React, { useState, useContext, useEffect } from "react";
import * as S from "./establishmentProducts.styled";
// import Searchbar from "../../components/Searchbar/Searchbar";
import { CardProduto } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
import Cookies from "js-cookie";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { ProductAdapter } from "../../adapters/Products/Product/Product";
import { ProductResponseDto } from "../../utils/Products/Product/product.types";
import { LinkButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { colors as c } from "../../styles/Colors";
import { Title } from "../../components/Texts/Title/Title";

// import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
const EstablishmentProducts: React.FC = () => {
  // const estabAdapter = new EstablishmentAdapter();
  // const [, setEstablishment] = useState<EstablishmentResponseDto | null>(null);

  const { isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

  const productAdapter = new ProductAdapter();

  const [products, setProducts] = useState<ProductResponseDto[] | null>([]);

  const handleAddProducts = () => {
    const modal = document.getElementById("modal-adicionar");

    modal?.classList.add("active");
  };

  useEffect(() => {
    console.log(products);

    handleGetAllProducts();
  }, [isAuthenticatedEmployee]);

  const handleGetAllProducts = async () => {
    try {
      const result = await productAdapter.getProductsByEstablishmentId(
        token.establishment.id
      );
      console.log("Resultado: " + result);

      if (result) {
        setProducts(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.ProductsSection>
      <CreateModal id="modal-adicionar" titulo="Produto" />

      <S.ProductsContainer>
        <h1> PRODUTOS </h1>
        {/* <Searchbar placeholderText="Nome do produto..." /> */}
        <S.ProductsButtons>
          <LinkButton color={c.green500} onClick={handleAddProducts}>
            adicionar produtos
          </LinkButton>
        </S.ProductsButtons>
        <S.ProductsBody>
          {products &&
            products.map((product, index) => (
              <CardProduto
                id={product.id}
                service={product.name}
                preco={product.value}
                brand={product.brand}
                status={product.status.name}
                key={index}
              />
            ))}

          {!products && (
            <>
              <img
                src={"../../assets/no-results.svg"}
                alt="Nenhum Produto Encontrado"
              />
              <Title>Nenhum produto encontrado</Title>
              {console.log("sem produto")}
            </>
          )}
        </S.ProductsBody>
      </S.ProductsContainer>
    </S.ProductsSection>
  );
};

export default EstablishmentProducts;
