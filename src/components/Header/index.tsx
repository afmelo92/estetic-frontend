import React from 'react';
import { FaPowerOff, FaShoppingCart } from 'react-icons/fa';
import { Container, Navbar, NavLogo, NavItems, Profile } from './styles';
import avatar from '../../assets/avatar.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <NavLogo>
          <h1>Estetic</h1>
          <Profile>
            <img src={avatar} alt="avatar" />
            <div>
              <span>Bem vindo, </span>
              <strong>Andre Melo</strong>
            </div>
          </Profile>
        </NavLogo>

        <NavItems>
          <FaShoppingCart size={25} style={{ marginRight: 20 }} />
          <FaPowerOff size={25} />
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
