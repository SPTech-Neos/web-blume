import React from 'react';

import InputContainer from '../components/Input/InputContainer/InputContainer';
import { Checkbox } from '../components/Input/Checkbox/Checkbox';

const Test: React.FC = () => (
	<>
		{/* <InputText></InputText>
        <Label text='Label'></Label> */}
        <InputContainer label='Label' placeholder='Teste placeholder...' type='password'></InputContainer>
        <InputContainer label='Label' placeholder='Teste placeholder...' type='time'></InputContainer>

        <Checkbox label='checkbox'></Checkbox>
	</>
);

export default Test;