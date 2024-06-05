import styled from 'styled-components'

export const ProductsSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 5.2%;
    align-items: center;
    justify-content: end;
    flex-direction: column;

    & h1{
        font-size: 30px;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ProductsBody = styled.div`
    width: 95%;
    height: 65%;
    display: grid;
    grid-template-columns: 90%;
    grid-auto-rows: 22%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    
`;