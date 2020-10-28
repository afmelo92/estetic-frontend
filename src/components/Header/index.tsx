import React from 'react';
import { FaPowerOff, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavLogo, NavItems, Profile } from './styles';
import avatar from '../../assets/avatar.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <NavLogo>
          <h1>Estetic</h1>
          <Profile>
            <Link to="/">
              <img src={avatar} alt="avatar" />
              <div>
                <span>Bem vindo, </span>
                <strong>Andre Melo</strong>
              </div>
            </Link>
          </Profile>
        </NavLogo>

        <NavItems>
          <Link to="/">
            <FaShoppingCart
              size={28}
              style={{ marginRight: 20, paddingTop: 5 }}
            />
          </Link>
          <Link to="/">
            <FaPowerOff size={28} style={{ paddingTop: 5 }} />
          </Link>
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
