import  React from 'react';

import TimePicker from '../../TimePicker/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { ptBR } from '@mui/x-date-pickers/locales';
import moment from 'moment';

import * as S from './scheduleModal.styled';

import { SecondaryTitle } from '../../Texts/Title/title.styled';
import { PrimaryButton as Button } from '../../Button/button.styled';
import { SchedulingAdapter } from '../../../adapters/Scheduling/Scheduling';

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
    const schedulingAdapter = new SchedulingAdapter

    const closeModal = () => {
        const schedule = document.getElementById("schedule");
        console.log(schedule)
        schedule?.classList.remove("active-schedule");
        
    }

    const handleSelect = async () => {
        const selected = document.getElementsByClassName("active");
        const hourScheduled = selected[0].textContent;
        if(value != undefined){
            const date = value.valueOf();
            const formattedDate = moment(date).format('YYYY/MM/DD ' + hourScheduled + ':00');
            console.log(formattedDate);

            const newSchedule = {
                fkScheduligStatus: 2,
                fkService: 2,
                fkEmployee: 2,
                fkClient: 2,
            }

            try {
                const scheduling = schedulingAdapter.register(newSchedule);
                console.log(JSON.stringify(scheduling));
            }catch(error){
                console.log(error);
            }

            closeModal();
        }
    }

    
    return (
        <S.ModalSection id={id}>
            <S.ModalContainer>
                <S.ModalBody>
                    <S.CloseModal size={22} onClick={closeModal}/>

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