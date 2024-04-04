import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  padding: 10px 20px;

  background-color: #f2ac33;
  color: #fff;

  border: none;
  border-radius: 4px;

  text-align: center;
  text-decoration: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;
