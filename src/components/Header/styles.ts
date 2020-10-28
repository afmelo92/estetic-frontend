import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.primary};
`;

export const Navbar = styled.nav`
  border: 1px solid yellow;
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
  border: 1px solid green;
  display: flex;
  max-width: 150px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    margin-right: 10px;
  }

  @media (min-width: 900px) {
    margin-left: 10px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    padding-right: 50px;
  }
`;
