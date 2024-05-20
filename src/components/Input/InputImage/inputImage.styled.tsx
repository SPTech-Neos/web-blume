import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export interface InputImageProps {
    onChange?: (e: any) => void;
    // children: string | JSX.Element | JSX.Element[];
    // href: string;
    // size?: 'sm' | 'md' | 'lg';
    // font?: 'Poppins' | 'Inter';
}

export interface ImagePreviewProps {
    src: string;
}

// const sizeVariants = {
//     sm: {
//        fontSize: '14px',
//     },
//     md: {
//        fontSize: '1rem',
//     },
//     lg: {
//        fontSize: '1.5rem',
//     }
//   };

export const InputImage = styled.input
    .attrs((props => ({
        type: 'file',
        accept: 'image/*',
    })
))<InputImageProps>`
    font-family: 'Poppins';
    display: none;
`;

export const InputLabel = styled.label
    .attrs((() => ({
        
    })
))
`
    background: ${c.gray100};
    border: 2px solid ${c.violet300};
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 132.5px;
`;

export const ImagePreview = styled.img
    .attrs((() => ({
        
    })
))
`
    display: ${props => props.src == '' ? 'none' : 'block'};
    max-width: 250px;
    max-height: 250px;
    background: ${c.gray300};
`;

export const Icon = styled.img
    .attrs((() => ({
        
    })
))
`
    background: ${c.violet300};
    padding: 8px;
    border-radius: 4px 0 0 4px;
`;

export const Round = styled.div
    .attrs((() => ({
        
    })
))
`
    background: ${c.gray300};
    border-radius: 50%;
    height: 100px;
    width: 100px;
`;

export const Row = styled.div
    .attrs((() => ({
        
    })
))
`
    display: flex;
    gap: 15px;
    align-items: center;
`;

export const Column = styled.div
    .attrs((() => ({
        
    })
))
`
    display: flex;
    flex-direction: column;
`;

export const ColumnCenter = styled(Column)
    .attrs((() => ({
        
    })
))
`
    align-items: center;
`;

export const IconText = styled.p
    .attrs((() => ({
        
    })
))
`
    padding: 7.3px;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 12px;
    transition: all .25s ease-in-out;
    border-radius: 0 4px 4px 0;

    ${InputLabel}:hover & {
        background: ${c.violet300};
        color: ${c.gray100};
    }
`;