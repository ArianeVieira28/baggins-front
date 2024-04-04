import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  ContentsHeader,
  ContentsBody,
  ContentsFooter,
  ContentsContainer,
  ContentsWrapper,
} from './styles';

import SideBar from '../../partials/SideBar';

// import headerImage from '../../assets/imgs/search/header1.jpg';
import headerImage from '../../assets/imgs/general/kombi1.jpg';

// import testImage1 from '../../assets/imgs/testimages/test1.jpg';
import testImage2 from '../../assets/imgs/testimages/test2.jpg';
// import testImage3 from '../../assets/imgs/testimages/test3.jpg';
// import testImage4 from '../../assets/imgs/testimages/test4.jpg';
// import testImage5 from '../../assets/imgs/testimages/test5.jpg';
// import testImage6 from '../../assets/imgs/testimages/test6.jpg';
// import testImage7 from '../../assets/imgs/testimages/test7.jpg';
// import testImage8 from '../../assets/imgs/testimages/test8.jpg';

import { getuserCandidatureRequest } from '../../store/modules/candidature/actions';

export default function MyJobOpenings() {
  const dispatch = useDispatch();
  const candidature = useSelector(state => state.candidature);
  const [listAds, setListAds] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    dispatch(getuserCandidatureRequest(token, id));
  }, [dispatch]);

  useEffect(() => {
    setListAds(candidature.list);
  }, [candidature]);

  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <Header background={headerImage}>
              <div>
                <h1> Minhas vagas </h1>
              </div>
            </Header>
          </CotentHeader>
          <CotentBody>
            <ContentsWrapper>
              {listAds &&
                listAds.map(content => (
                  <ContentsContainer key={content.id}>
                    <Link to={`/jobopening/${content.id}`}>
                      <ContentsHeader banner={testImage2} />
                      <ContentsBody>
                        {content.titulo && content.titulo.length > 20 ? (
                          <span>{content.titulo.substring(0, 20)}...</span>
                        ) : (
                          <span>{content.titulo}</span>
                        )}
                      </ContentsBody>
                      <ContentsFooter>
                        {content.descricao && content.descricao.length > 180 ? (
                          <span>{content.descricao.substring(0, 180)}...</span>
                        ) : (
                          <span>{content.descricao}</span>
                        )}
                      </ContentsFooter>
                    </Link>
                  </ContentsContainer>
                ))}
            </ContentsWrapper>
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
