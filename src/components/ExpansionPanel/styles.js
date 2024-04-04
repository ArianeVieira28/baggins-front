import styled from 'styled-components';

export const Btn = styled.div`
  button: disabled {
    background-color: #ccc;
  }
  button[disabled]:hover {
    background: #ccc;
    color: #3a397b !important;
  }
`;
export const HeaderProfileAvatar = styled.div`
  height: 100px;
  width: 100px;

  background-image: url(${props => props.src});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  border-radius: 50%;

  margin: auto 0;
`;
