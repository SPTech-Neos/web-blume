import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import * as S from "./headerProfile.styled";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";
import { AuthContextEstablishment } from "../../../contexts/Establishment/AuthContextProviderEstablishment";

import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";
import { Button, MenuItem } from "@mui/material";
// import { EmployeeResponseDto } from "../../../utils/Employee/employee.types";

const HeaderProfile: React.FC<S.ProfileProps> = ({ background }) => {
  const { isAuthenticated } = useContext(AuthContextEmployee);

  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
  const [establishmentInfo, setEstablishmentInfo] =
    useState<EstablishmentResponseDto | null>(null);
  // const [employeeInfo, setEmployeeInfo] = useState<EmployeeResponseDto | null>(null);

  // const { establishmentId } = useParams<{establishmentId: string}>();
  const { getEstablishmentById } = useContext(AuthContextEstablishment);
  const { getEmployeeById } = useContext(AuthContextEmployee);

  useEffect(() => {
    const fetchEstablishmentData = async () => {
      const employeeEstab = await getEmployeeById(Number(token.id));

      const data = await getEstablishmentById(
        Number(employeeEstab?.establishment.id)
      );
      setEstablishmentInfo(data);
    };
    fetchEstablishmentData();
  }, [tokenFromCookie, isAuthenticated]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <S.HeaderBody>
      <S.ContainerSelect>
        <S.ContainerImg background={background}></S.ContainerImg>
        {/* <S.SelectEmpresa name="empresas" id="empresas"> */}
        <Button onClick={handleClick}>Estabelecimento</Button>
        <S.MenuDropdwon open={open}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </S.MenuDropdwon>
        {/* </S.SelectEmpresa> */}
      </S.ContainerSelect>
    </S.HeaderBody>
  );
};
export default HeaderProfile;
