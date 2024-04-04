import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  max-width: 84rem;
  margin: auto;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  background: transparent;
  width: 100%;
  height: 70px;
`;

export const Ul = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;

  list-style: none;

  li {
    margin: 0 2rem;

    a {
      font-weight: 500;
      color: #666;
      transition: 0.25s;
    }

    a:hover {
      text-decoration: none;
      color: #f2ac33;
    }
  }
`;
