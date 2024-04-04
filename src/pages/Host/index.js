import React from 'react';
import Stepper from '../../components/Stepper';
import SideBar from '../../partials/SideBar';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  Header,
  CotentBody,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <Header>
              <div>
                <h1> Tornar-se anfitrião. </h1>
                <h5>
                  Conecte-se com viajantes de vários lugares que estão
                  interessados em trocar suas habilidades por hospedagem.
                </h5>
              </div>
            </Header>
          </CotentHeader>
          <CotentBody>
            <Stepper />
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
