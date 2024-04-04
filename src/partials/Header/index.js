import React from 'react';

import { NavBar, Ul } from './styles';

import logo from '../../assets/imgs/logos/baggins-3.png';

export default function Header() {
  return (
    <>
      <NavBar>
        <img src={logo} alt="logo" />
        <Ul>
          {/* <li>
            <a href="/">Início</a>
          </li> */}
          {/* <li>
            <a href="/">Descobrir</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li> */}
        </Ul>
      </NavBar>
    </>
  );
}
