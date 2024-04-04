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

  transition: all 0.3s;
  &:hover {
    border: 2px solid #f2ac33;
    color: #f2ac33;
  }

  span {
    width: 100%;
  }
`;
