import React from "react";
import * as S from './employees.styled'

import Sidebar from "../../components/Sidebar/Sidebar";
import EmployeesSection from "../../sections/Employees/Employees";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";

const Employees: React.FC = () => {
    return(
        <AuthContextProviderEmployee>
            <S.EmployeesPage>
                <Sidebar />
                <HeaderProfile />
                <EmployeesSection />
            </S.EmployeesPage>
        </AuthContextProviderEmployee>
    );
}

export default Employees;