import styled from 'styled-components';

import kombi from '../../assets/imgs/home/kombi.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 84rem;
  margin: auto;
  height: 100%;
  width: 100%;
`;

export const FlexDiv = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
`;

export const Banner = styled.div`
  background-image: url(${kombi});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 90%;
  height: 100%;

  max-height: 90%;
  max-width: 100%;
  border-radius: 100px;
`;
