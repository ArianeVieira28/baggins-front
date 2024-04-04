import React from 'react';

import { Container, Content, Banner, FlexDiv } from './styles';

import Header from '../../partials/Header';
import Login from '../../partials/Login';
import Footer from '../../partials/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <FlexDiv>
            <Login />
          </FlexDiv>
          <Banner />
        </Content>
        <Footer />
      </Container>
    </>
  );
}
