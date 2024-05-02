import React from 'react';

import Modal from '../components/Modals/FormModal/Modal';

// import InputContainer from '../components/Input/InputContainer/InputContainer';
// import { Checkbox } from '../components/Input/Checkbox/Checkbox';

const Test: React.FC = () => (
	<>
		{/* <InputText></InputText>
        <Label text='Label'></Label> */}
        {/* <InputContainer label='Label' placeholder='Teste placeholder...' type='password'></InputContainer>
        <InputContainer label='Label' placeholder='Teste placeholder...' type='datetime-local'></InputContainer> */}

        {/* <Checkbox label='checkbox'></Checkbox> */}

        <Modal type={'error'} message={'testando'} isOpen={true}></Modal>
	</>
);

export default Test;