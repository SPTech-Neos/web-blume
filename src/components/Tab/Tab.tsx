import React, {useState} from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";
import Services from "../../sections/Services/Services";
import Products from "../../sections/Products/Products";
import About from "../../sections/About/About";

type SectionProps = {
    result?: string;
}
const Tab: React.FC<SectionProps> = () => {

    const [result, setResult] = useState("");

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // const myElement = document.getElementById(`${event.target.id}`);
    
        // if(!myElement){
        //     console.log("div nao encontrada");
        // }else{
        //     myElement.style = 'color: var(--color-green-300); border-bottom: 4px solid var(--color-green-300);';
        // }

        setResult(event.target.id);           
    }

    return (
        <S.ContainerTab direction='column'>
            <S.TabHeader>
                <TabOption id="servico" titulo="Serviços" onClick={handleClick} />

                <TabOption id="produto" titulo="Produtos" onClick={handleClick} />

                <TabOption id="sobre" titulo="Sobre" onClick={handleClick} />
            </S.TabHeader>
            <S.TabBody id="section-escolhida">
                {result == 'servico'? (
                    "Serviços" // trocar pela section certa
                ) : result == 'produto'? (
                    "Produtos" // trocar para section certa
                ) : result == 'sobre'? (
                    "Sobre" // trocar para section certa
                ) : "Selecione uma opção"}
            </S.TabBody>
        </S.ContainerTab>
    );
};

export default Tab;