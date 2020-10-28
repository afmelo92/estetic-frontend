import React from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { FiClock } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import {
  Calendar,
  Container,
  Content,
  NextAppointment,
  MorningSection,
  Appointment,
} from './styles';
import 'react-day-picker/lib/style.css';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Content>
        <Calendar>
          <h1>Horários agendados</h1>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            // disabledDays={[{ daysOfWeek: [0, 6], ...disabledDays }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            // onMonthChange={handleMonthChange}
            // selectedDays={selectedDate}
            // onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
        <NextAppointment>
          <strong>Agendamentos a seguir</strong>
          <div className="appointment-item">
            <img src={avatar} alt="avatar" />

            <div>
              <strong>Josias Teófilo</strong>
              <p>Remoção de tatuagem</p>
            </div>
            <span>
              <FiClock size={25} />
              12:00
            </span>
          </div>

          <div className="appointment-item">
            <img src={avatar} alt="avatar" />
            <div>
              <strong>Josias Teófilo</strong>
              <p>Remoção de tatuagem</p>
            </div>
            <span>
              <FiClock size={25} />
              12:00
            </span>
          </div>

          <div className="appointment-item">
            <img src={avatar} alt="avatar" />

            <div>
              <strong>Josias Teófilo</strong>
              <p>Remoção de tatuagem</p>
            </div>
            <span>
              <FiClock size={25} />
              12:00
            </span>
          </div>
        </NextAppointment>
      </Content>
      <Content>
        <MorningSection>
          <strong>Manhã</strong>

          <Appointment>
            <span>
              <FiClock />
              11:00
            </span>
            <div>
              <img src={avatar} alt="avatar" />
              <strong>Luiza Erundina</strong>
            </div>
          </Appointment>
          <Appointment>
            <span>
              <FiClock />
              11:00
            </span>
            <div>
              <img src={avatar} alt="avatar" />
              <strong>Luiza Erundina</strong>
            </div>
          </Appointment>
          <Appointment>
            <span>
              <FiClock />
              11:00
            </span>
            <div>
              <img src={avatar} alt="avatar" />
              <strong>Luiza Erundina</strong>
            </div>
          </Appointment>
        </MorningSection>
      </Content>
    </Container>
  );
};

export default Schedule;
