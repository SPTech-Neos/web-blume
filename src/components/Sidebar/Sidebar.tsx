import React from "react";

import { useLocation } from "react-router-dom";
import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, ShoppingCart, UserCircle, Cube, Article, UserList } from "@phosphor-icons/react";



const Sidebar: React.FC = () => {

    const location = useLocation();
    console.log("location: " + location.pathname);

    return (
        <S.SidebarWrapper color="var(--color-violet-100)">
            <S.Container direction="column">

                    <S.NavList>
                        <S.NavItem>
                            <S.NavLink  to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
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
                        {location.pathname == "/ProfileB2B"?(
                                    <S.NavItem>
                                    <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
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
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <UserCircle size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                    </S.NavList>

            </S.Container>
        </S.SidebarWrapper>
    );
};

export default Sidebar;
