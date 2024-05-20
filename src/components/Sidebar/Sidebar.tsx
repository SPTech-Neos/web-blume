import React, {useContext, useEffect} from "react";

import { useLocation } from "react-router-dom";
import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, ShoppingCart, UserCircle, Cube, Article, UserList } from "@phosphor-icons/react";
import { SignOut } from "phosphor-react";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";


const Sidebar: React.FC = () => {
    const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { handleLogoutClient, isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
    
    let handleLogout: () => void;
    let theme: string = '';

    if(isAuthenticatedEmployee) {
        theme = "establishment";
        handleLogout = handleLogoutEmployee;
        
    } else if(isAuthenticatedClient) {
        theme = "client";
        handleLogout = handleLogoutClient;
    }
    
    const location = useLocation();
    console.log(location);
    const iconeAtual = document.getElementsByTagName("a");
    useEffect(() =>{
        
        for(let i = 0; i < iconeAtual.length; i++){
            if(iconeAtual[i].pathname == location.pathname){
                iconeAtual[i].classList.add('active-location');
                console.log(iconeAtual[i].pathname);
                console.log(location.pathname);
            }
            console.log("THEME " + theme);
            console.log(isAuthenticatedClient + "client")
            console.log(isAuthenticatedEmployee + "employee")
        }
    })
    
    return (

        <S.SidebarWrapper theme={theme}>
            <S.Container direction="column">
 
                <S.NavList>
                    <S.NavItem>
                        <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <House size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>

                <S.NavList>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                        {location.pathname == "/ProfileB2B"?(
                                <Article size={24} />
                            ) :
                            <MagnifyingGlass size={24}/>
                        }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            {location.pathname == "/ProfileB2B"?(
                                <UserList size={24}/>
                            ) :                            
                                <ShoppingCart size={24}/>
                            }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <Receipt size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    {location.pathname === "/ProfileB2B"?(
                                <S.NavItem>
                                <S.NavLink to= '/' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                    <Cube size={24}/>
                                </S.NavLink>
                                </S.NavItem>
                            ) : null}
                </S.NavList>

                <S.NavList>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <Bell size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <GearSix size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to={theme === 'establishment'? "/ProfileB2B" : "/ProfileB2C"} className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <UserCircle size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to={"/"} className={({isActive})=>isActive? "nav-link active" : "nav-link"} onClick={() => handleLogout()}>
                            <SignOut size={24} />
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>

            </S.Container>
        </S.SidebarWrapper>
    );
};

export default Sidebar;
