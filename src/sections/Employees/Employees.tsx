import React from "react";
import * as S from './employees.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import CardEmployee from "../../components/Cards/CardEmployee/CardEmployee";


const Employees: React.FC = () => {

    const handleClickEmployee = (event: React.MouseEvent<HTMLDivElement>) => {
        const lastSelected = document.getElementsByClassName("active");
        lastSelected[0]?.classList.remove("active");
        const selected = (event.target as HTMLElement);
        const parent = selected?.parentElement

        console.log(selected);

        if(parent?.id == "collection-cards"){
            console.log(selected);
            selected.classList.add("active");
        }else {
            console.log(parent);
            parent?.classList.add("active");
        }
      
    }

    const handleClickAdd = (event: React.MouseEvent<HTMLDivElement>) => {
        const lastSelected = document.getElementsByClassName("active");
        lastSelected[0]?.classList.remove("active");
        const selected = (event.target as HTMLElement);
        const parent = selected?.parentElement;

        console.log(selected);

        if(parent?.id == "collection-cards"){
            console.log(selected);
            selected.classList.add("active");
        }else if(parent?.parentElement?.parentElement?.id == "collection-cards"){
            console.log(parent?.parentElement?.id);
            parent?.parentElement?.classList.add("active");
        }

    }

    return(
        <S.EmployeeSection>
            <S.EmployeeContainer>
                <h1> Funcionários </h1>
                <Searchbar placeholderText="Nome do funcionário..."/>
                <S.CardsContainer id="collection-cards">  
                    <CardEmployee tipoCard="adicionar" onClick={handleClickAdd}/>
                    <CardEmployee id={1} nome="kevin" tipoCard="funcionario" imgUrl="" onClick={handleClickEmployee}/>
                </S.CardsContainer>
            </S.EmployeeContainer>
        </S.EmployeeSection>
    );
}

export default Employees;