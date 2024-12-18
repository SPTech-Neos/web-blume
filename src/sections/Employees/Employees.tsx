import React from "react";
import * as S from "./employees.styled";

// import Cookies from "js-cookie";
import Searchbar from "../../components/Searchbar/Searchbar";
import CardEmployee from "../../components/Cards/CardEmployee/CardEmployee";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
// import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
// import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

const Employees: React.FC = () => {
  //   const tokenFromCookie = Cookies.get("employeeInfo");
  //   const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
  //   const estabAdapter = new EstablishmentAdapter();

  // const [establishment, setEstablishment] = useState<EstablishmentResponseDto | null>(null);

  // useEffect(() => {
  //     handleGetEmployees();
  // }, []);

  // const handleGetEmployees = async () => {
  //     try{
  //         const result = await estabAdapter.getEstablishmentById(token.establishment.id);
  //         console.log("Resultado: " + result);
  //         if(result){
  //             setEstablishment(result);

  //         }
  //     }catch (error) {
  //         console.log(error);
  //     }
  // }

  const handleClickEmployee = (event: React.MouseEvent<HTMLDivElement>) => {
    const lastSelected = document.getElementsByClassName("active");
    lastSelected[0]?.classList.remove("active");
    const selected = event.target as HTMLElement;
    const parent = selected?.parentElement;

    console.log(selected);

    if (parent?.id == "collection-cards") {
      console.log(selected);
      selected.classList.add("active");
    } else {
      console.log(parent);
      parent?.classList.add("active");
    }
  };

  const handleClickAdd = (event: React.MouseEvent<HTMLDivElement>) => {
    const lastSelected = document.getElementsByClassName("active");
    lastSelected[0]?.classList.remove("active");
    const selected = event.target as HTMLElement;
    const parent = selected?.parentElement;

    console.log(selected);

    if (parent?.id == "collection-cards") {
      console.log(selected);
      selected.classList.add("active");
    } else if (parent?.parentElement?.parentElement?.id == "collection-cards") {
      console.log(parent?.parentElement?.id);
      parent?.parentElement?.classList.add("active");
    }

    handleAddEmployee();
  };

  const handleAddEmployee = () => {
    const modal = document.getElementById("modal-adicionar");

    modal?.classList.add("active");
  };

  return (
    <S.EmployeeSection>
      <CreateModal id="modal-adicionar" titulo="Funcionário" />
      <S.EmployeeContainer>
        <h1> Funcionários </h1>
        <Searchbar placeholderText="Nome do funcionário..." />
        <S.CardsContainer id="collection-cards">
          <CardEmployee tipoCard="adicionar" onClick={handleClickAdd} />
          {/* {establishment && establishment.employees.map((data: { id: number | undefined; name: string | undefined; }) => ( */}
          <CardEmployee
            id={1}
            tipoCard="funcionario"
            onClick={handleClickEmployee}
            imgUrl=""
            nome={"Nome Funcionário"}
          />
          {/* ))} */}
        </S.CardsContainer>
      </S.EmployeeContainer>
    </S.EmployeeSection>
  );
};

export default Employees;
