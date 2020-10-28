import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  align-items: flex-start;
  justify-content: space-around;
  padding: 30px 20px;
  border: 1px solid red;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    align-items: center;

    h1 {
      padding-bottom: 20px;
      margin: 0;
    }
  }

  .DayPicker {
    background: ${props => props.theme.color.secondary};
    border-radius: 10px;
    padding-right: 20px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${props => props.theme.color.primary};
    border-radius: 10px;
    color: ${props => props.theme.color.altText};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${props => shade(0.2, props.theme.color.secondary)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: ${props => props.theme.color.primary} !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${props => props.theme.color.secondary} !important;
    border-radius: 10px;
    color: ${props => props.theme.color.altText} !important;
  }
`;

export const NextAppointment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;

  > strong {
    font-size: 35px;
    margin: 0 auto 25px auto;
  }

  div.appointment-item {
    background: ${props => props.theme.color.primary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 4px;
      left: 0;
      top: 10%;
      content: '';
      background: ${props => props.theme.color.secondary};
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;

      strong {
        font-size: 25px;
        color: ${props => props.theme.color.altText};
      }
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: ${props => props.theme.color.altText};

      svg {
        color: ${props => props.theme.color.secondary};
        margin-right: 8px;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    padding-top: 30px;
    margin: 0;

    > strong {
      font-size: 30px;
      margin: 0 auto 10px auto;
    }

    div {
      width: 100%;
    }
  }
`;

export const MorningSection = styled.section`
  margin-top: 20px;
  width: 100%;
  padding-left: 370px;

  > strong {
    color: ${props => props.theme.color.text};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${props => props.theme.color.text};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  p {
    color: ${props => props.theme.color.text};
  }

  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.altText};
    width: 70px;

    svg {
      color: ${props => props.theme.color.text};
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: ${props => props.theme.color.primary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;
