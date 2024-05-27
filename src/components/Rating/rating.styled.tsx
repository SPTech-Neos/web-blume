import styled from "styled-components";
import { Star } from "phosphor-react";
import { colors as c } from "../../styles/Colors";

export const StartRating = styled(Star)`
    position: relative;
    color: ${c.violet100};
`;   



export const RatingBody = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    & #star-1, #star-5{

        top: 3px;
    }

    & #star-3 {

        bottom: 3px;
    }
`;