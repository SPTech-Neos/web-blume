import  React from 'react';

import TimePicker from '../../TimePicker/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { ptBR } from '@mui/x-date-pickers/locales';

import * as S from './scheduleModal.styled';

import { SecondaryTitle } from '../../Texts/Title/title.styled';
import { PrimaryButton as Button } from '../../Button/button.styled';

interface props {
    id?: string
}

const Schedule: React.FC<props> = ({id}) => {

    const today = new Date();

    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;


    const [value, setValue] = React.useState<Dayjs | null>(dayjs(currentDate));

    

    const closeModal = (event: React.MouseEvent<SVGSVGElement>) => {
        const clicked = (event.target as HTMLElement).parentElement;
        const parentClicked = clicked?.parentElement?.parentElement;
        parentClicked?.classList.remove("active-schedule");
        
    }

    const handleSelect = () => {
        
    }

    
    return (
        <S.ModalSection id={id}>
            <S.ModalContainer>
                <S.ModalBody>
                    <S.closeModal size={22} onClick={closeModal}/>

                    <SecondaryTitle  size="lg" lines={true}>
                        Agendar Serviço 
                    </SecondaryTitle>

                    <S.ScheduleContainer>
                        <S.Localization dateAdapter={AdapterDayjs}>
                            <S.Calendario disablePast value={value} onChange={(newValue) => setValue(newValue)} />
                        </S.Localization>
                        <S.HourContainer>
                            <TimePicker />
                        </S.HourContainer>
                    </S.ScheduleContainer>

                    <Button width="180px" onClick={handleSelect}>
                        Selecionar
                    </Button>

                </S.ModalBody>    
            </S.ModalContainer>
        </S.ModalSection>
      );
}

export default Schedule;