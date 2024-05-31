import  React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { ptBR } from '@mui/x-date-pickers/locales';

import * as S from './scheduleModal.styled';

import { SecondaryTitle } from '../../Texts/Title/title.styled';
import { PrimaryButton as Button } from '../../Button/button.styled';

const Schedule: React.FC = () => {

    const today = new Date();

    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;


    const [value, setValue] = React.useState<Dayjs | null>(dayjs(currentDate));
    
    return (
        <S.ModalSection>
            <S.ModalContainer>
                <S.ModalBody>
                    <S.closeModal size={22}/>

                    <SecondaryTitle  size="lg" lines={true}>
                        Agendar Serviço 
                    </SecondaryTitle>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <S.Calendario disablePast value={value} onChange={(newValue) => setValue(newValue)} />
                    </LocalizationProvider>

                    <Button width="180px">
                        Selecionar
                    </Button>

                </S.ModalBody>    
            </S.ModalContainer>
        </S.ModalSection>
      );
}

export default Schedule;