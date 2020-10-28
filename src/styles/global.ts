import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font: 400 16px 'Baloo Chettan 2', sans-serif;
    border: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  .switch-container {
    position: fixed;
    right: 70px;
    top: 80px;

  }
   /* Position and sizing of burger button */
   .bm-burger-button {
    position: fixed;
    width: 28px;
    height: 22px;
    right: 20px;
    top: 27px;


    @media(min-width: 900px) {
      display: none;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${props => props.theme.color.altText};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    transition: 0.2s ease-in-out;

    background: ${props => props.theme.color.altText};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 34px;
    width: 34px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${props => props.theme.color.altText};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${props => props.theme.color.secondary};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

`;
