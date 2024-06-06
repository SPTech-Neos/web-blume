import React from "react";
import * as S from './employees.styled'

import Sidebar from "../../components/Sidebar/Sidebar";
import EmployeesSection from "../../sections/Employees/Employees";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";

const Employees: React.FC = () => {
    return(
        <S.EmployeesPage>
            <Sidebar />
            <HeaderProfile />
            <EmployeesSection />
        </S.EmployeesPage>
    );
}

export default Employees;