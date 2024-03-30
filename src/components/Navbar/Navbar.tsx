import React from "react";
import './navbar.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Navbar: React.FC = () => (
	<div className="nav-container">
        <Container className="container">
            <Logo></Logo>
            <div className="nav-link"></div>
            <div className="nav-login">
                <button className="btn-entrar">ENTRAR</button>
            </div>
        </Container>
    </div>
);

export default Navbar;