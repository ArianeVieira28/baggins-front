import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  max-width: 84rem;
  margin: auto;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: transparent;
  width: 100%;
  height: 70px;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;

  list-style: none;

  li {
    margin: 0 2rem;

    a {
      color: #666;
      transition: 0.25s;
    }

    a:hover {
      text-decoration: none;
      color: #f2ac33;
    }
  }
`;

export const Logo = styled.img``;
