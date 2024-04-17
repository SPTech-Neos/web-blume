import React from "react";

import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, ShoppingCart, UserCircle } from "@phosphor-icons/react";


const Sidebar: React.FC = () => {
    return (
        <S.SidebarWrapper>
            <S.Container direction="column">

                    <S.NavList>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <House size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                    </S.NavList>

                    <S.NavList>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <MagnifyingGlass size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <ShoppingCart size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <Receipt size={24}/>
                            </S.NavLink>
                        </S.NavItem>
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
