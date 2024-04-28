import styled from 'styled-components';
import Container from '../Container/Container';

import svg01 from '../.././assets/icon-profile.png';

export interface ProfileProps {
    profile?: string; 
}

export const ContainerProfile = styled(Container)`
    height: 30vh;
    justify-content: start;
`

export const ContainerProfileImg = styled.div<ProfileProps>`
    width: 13.5%;
    height: 70%;
    display: flex;
    border-radius: 100%;
    background-image: url(${(props) => props.profile || svg01});
    background-size: cover;
`

export const ContainerProfileInfo = styled.div`
    width:60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding-left: 20px;
    gap: 20px;
    font-family: "Poppins", sans-serif;

`;

export const ContainerTags = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;

`;

export const TagsProfile = styled.div`
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--color-gray-200);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`;