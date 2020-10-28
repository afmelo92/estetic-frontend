import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.primary};
`;

export const Navbar = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  justify-content: space-between;
  color: ${props => props.theme.color.altText};
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    h1 {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  max-width: 270px;
  max-height: 57px;

  a {
    padding: 5px 10px 3px 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: ${props => props.theme.color.altText};
    transition: 0.2s ease-in-out;

    &:hover {
      background: ${props => shade(0.2, props.theme.color.secondary)};
    }

    img {
      width: 45px;
      height: 45px;
      border-radius: 50px;
      margin-right: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 900px) {
    margin-left: 10px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.color.altText};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${props => shade(0.2, props.theme.color.altText)};
    }
  }

  @media (max-width: 900px) {
    padding-right: 50px;
  }
`;
