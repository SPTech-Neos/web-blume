import React from 'react';

import InputContainer from '../components/Input/InputContainer/InputContainer';

const Test: React.FC = () => (
	<>
		{/* <InputText></InputText>
        <Label text='Label'></Label> */}
        <InputContainer label='Label' placeholder='Teste placeholder...' type='password'></InputContainer>
        <InputContainer label='Label' placeholder='Teste placeholder...' type='time'></InputContainer>
	</>
);

export default Test;