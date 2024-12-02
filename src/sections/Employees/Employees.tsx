import React, { useEffect, useState } from "react";
import * as S from "./employees.styled";

import Cookies from "js-cookie";
import Searchbar from "../../components/Searchbar/Searchbar";
import CardEmployee from "../../components/Cards/CardEmployee/CardEmployee";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
// import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
import { EmployeeAdapter } from "../../adapters/User/Employee/Employee";
// import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

// import Text from "../../components/Texts/Text/Text";

const Employees: React.FC = () => {
  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
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
      // LIHA ANTIGA, NÃO É MAIS USADA
      // const result = await EmployeeAdapter.getAllEmployee(token.establishment.id);

      console.log(token.establishment.id);

      const result = await employeeAdapter.getAllEmployee(
        token.establishment.id
      );
      console.log("Resultado: " + result);

      if (result) {
        getEmployees(result);
        console.log(employees);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickEmployee = (event: React.MouseEvent<HTMLDivElement>) => {
    const lastSelected = document.getElementsByClassName("active");
    lastSelected[0]?.classList.remove("active");
    const selected = event.target as HTMLElement;
    const parent = selected?.parentElement;

    // console.log(selected);

    if (parent?.id == "collection-cards") {
      console.log(selected);
      selected.classList.add("active");

      window.location.replace("/");
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
          {employees &&
            employees.map((employee, index) => (
              <CardEmployee
                id={employee.id}
                tipocard="funcionario"
                onClick={handleClickEmployee}
                imgUrl={employee.imgUrl}
                nome={employee.name}
                key={index}
              />
            ))}
          <CardEmployee tipocard="adicionar" onClick={handleClickAdd} />
        </S.CardsContainer>
      </S.EmployeeContainer>
    </S.EmployeeSection>
  );
};

export default Employees;
