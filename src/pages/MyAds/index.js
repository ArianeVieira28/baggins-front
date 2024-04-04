import React from 'react';

import SideBar from '../../partials/SideBar';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  Header,
  CotentBody,
} from './styles';

import ContentMyAds from '../../partials/ContentMyAds';
import headerImage from '../../assets/imgs/myads/header1.jpg';

export default function Profile() {
  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <Header background={headerImage}>
              <div>
                <h5>
                  {' '}
                  “Entre todos os livros do mundo, as melhores histórias estão
                  entre as páginas de um passaporte.”{' '}
                </h5>
                <p>HostelWorld</p>
              </div>
            </Header>
          </CotentHeader>
          <CotentBody>
            <ContentMyAds />
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
