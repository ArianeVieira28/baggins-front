import React from 'react';

import Slider from '../../components/Slider';

import {
  Container,
  ContentHeader,
  HeaderLeft,
  // HeaderRight
} from './styles';

export default function ContentMain(props) {
  const { contents, title, loading, errorMessage } = props;

  return (
    <Container>
      <ContentHeader>
        <HeaderLeft>{title}</HeaderLeft>
        {/* <HeaderRight>Ver Tudo</HeaderRight> */}
      </ContentHeader>
      <Slider
        errorMessage={errorMessage}
        loading={loading}
        contents={contents}
      />
    </Container>
  );
}
