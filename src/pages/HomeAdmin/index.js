import React from 'react';

import { Container, Content, Banner, FlexDiv } from './styles';

import Header from '../../partials/Header';
import LoginAdmin from '../../partials/LoginAdmin';
import Footer from '../../partials/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <FlexDiv>
            <LoginAdmin />
          </FlexDiv>
          <Banner />
        </Content>
        <Footer />
      </Container>
    </>
  );
}
