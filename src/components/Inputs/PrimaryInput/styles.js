import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;

  padding: 10px 20px;
  border: 2px solid rgba(14, 19, 24, 0.45);
  border-radius: 8px;

  transition: 0.3s;

  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: #3a397b;
  }
`;
