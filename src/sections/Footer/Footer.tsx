import React from "react";
import * as S from './footer.styled';
import Container from "../../components/Container/Container";

import logoBlumeFooter from "../../assets/blume-footer.svg";
import logoNeosFooter from "../../assets/neos-footer.svg"

const Footer: React.FC<S.FooterProps> = () => {
    return (
        <S.Footer>
            <S.Container direction="column">
                <S.Row>
                    <div className="col-group">
                        <S.Col>
                            <img 
                                className="logo-blume-footer"
                                src={logoBlumeFooter}
                                alt={`Imagem svg com detalhes de circulos no fundo`}
                            />
                        </S.Col>
                        <S.Col></S.Col>
                        <S.Col></S.Col>
                    </div>
                    
                    <S.Col>

                    </S.Col>
                </S.Row>

                <S.Row>
                    <img 
                        className="logo-neos-footer"
                        src={logoNeosFooter}
                        alt={`Imagem svg com detalhes de circulos no fundo`}
                    />
                </S.Row>
            </S.Container>
        </S.Footer>
    );
}

export default Footer;