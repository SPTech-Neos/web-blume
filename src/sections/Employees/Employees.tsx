import React, { useEffect, useState } from "react";
import * as S from "./employees.styled";

// import Cookies from "js-cookie";
import Searchbar from "../../components/Searchbar/Searchbar";
import CardEmployee from "../../components/Cards/CardEmployee/CardEmployee";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
// import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
import { EmployeeAdapter } from "../../adapters/User/Employee/Employee";
// import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

import Text from "../../components/Texts/Text/Text";

const Employees: React.FC = () => {
  // const tokenFromCookie = Cookies.get("employeeInfo");
  // const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
  // const estabAdapter = new EstablishmentAdapter();
  const employeeAdapter = new EmployeeAdapter();

  // const [establishment, setEstablishment] =
  //   useState<EstablishmentResponseDto | null>(null);

  const [employees, getEmployees] = useState<EmployeeResponseDto[] | null>([]);

  useEffect(() => {
    handleGetEmployees();
  }, []);

  const handleGetEmployees = async () => {
    try {
      // const result = await EmployeeAdapter.getAllEmployee(token.establishment.id);
      const result = await employeeAdapter.getAllEmployee();
      console.log("Resultado: " + result);

      if (result) {
        getEmployees(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function GenerateEmployees(): any {
    if (employees != null) {
      // console.log(employees[1]);

      employees.forEach((employee) => {
        return (
          <CardEmployee
            id={Number(employee.id)}
            tipoCard="funcionario"
            onClick={handleClickEmployee}
            imgUrl={employee.imgUrl}
            nome={employee.name}
          />
        );
      });
    } else {
      // console.log(employees);

      return <Text>Sem Funcionários</Text>;
    }
  }

  const handleClickEmployee = (event: React.MouseEvent<HTMLDivElement>) => {
    const lastSelected = document.getElementsByClassName("active");
    lastSelected[0]?.classList.remove("active");
    const selected = event.target as HTMLElement;
    const parent = selected?.parentElement;

    // console.log(selected);

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

    // console.log(selected);

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
          <CardEmployee
            id={1}
            tipoCard="funcionario"
            onClick={handleClickEmployee}
            imgUrl=""
            nome={"Nome Funcionário"}
          />
          <CardEmployee tipoCard="adicionar" onClick={handleClickAdd} />
          {GenerateEmployees()}
        </S.CardsContainer>
      </S.EmployeeContainer>
    </S.EmployeeSection>
  );
};

export default Employees;
