import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid ${props => (props.color ? props.color : '#666')};
  color: ${props => (props.color ? props.color : '#666')};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  transition: all 0.3s;

  &:hover {
    border: 2px solid #3a397b;
    color: #3a397b;
  }
`;

export const IconSpan = styled.span`
  width: ${props => (props.hasText ? '10%' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSpan = styled.span`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
