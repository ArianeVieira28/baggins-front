/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdLocationOn, MdWork } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import recommenderAPi from '../../services/recommenderApi';

import { getAdsByIdRequest } from '../../store/modules/hostAds/actions';
import {
  createCandidatureRequest,
  getCandidatureRequest,
} from '../../store/modules/candidature/actions';
import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  Title,
  Description,
  HostAvatar,
  HostInfo,
  IconDiv,
  ContentBodyWrapper,
  ContentBodyTitle,
  Inscription,
  CommentsWrapper,
  AverageRating,
} from './styles';

import SideBar from '../../partials/SideBar';
// import profileImage from '../../assets/imgs/profile/profile2.jpg';

import Comments from '../../partials/Comments';
import DynamicIconList from '../../components/DynamicIconList';
import JobOpeningSlider from '../../components/JobOpeningSlider';
import PrimaryButton from '../../components/buttons/PrimaryButton';

import testImage1 from '../../assets/imgs/testimages/test1.jpg';
import testImage2 from '../../assets/imgs/testimages/test2.jpg';
import testImage3 from '../../assets/imgs/testimages/test3.jpg';
import testImage4 from '../../assets/imgs/testimages/test4.jpg';
import testImage5 from '../../assets/imgs/testimages/test5.jpg';
import testImage6 from '../../assets/imgs/testimages/test6.jpg';
import testImage7 from '../../assets/imgs/testimages/test7.jpg';
import testImage8 from '../../assets/imgs/testimages/test8.jpg';

const average = 4.36;

const comments = [
  {
    id: 1,
    useroferta: 'Nícolas Mano Torres',
    rating: 4,
    commentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
    placerat in egestas erat imperdiet sed euismod. Nulla facilisi morbi
    tempus iaculis urna. Sed vulputate mi sit amet mauris commodo quis.
    Nunc vel risus commodo viverra maecenas accumsan. Habitant morbi
    tristique senectus et.`,
    commentDate: '22/04/2020',
    userLocation: 'Brazil (but wish were Canadá)',
  },
  {
    id: 2,
    useroferta: 'Mano Torres',
    rating: 1,
    commentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
    placerat in egestas erat imperdiet sed euismod. Nulla facilisi morbi
    tempus iaculis urna. Sed vulputate mi sit amet mauris commodo quis.
    Nunc vel risus commodo viverra maecenas accumsan. Habitant morbi
    tristique senectus et.`,
    commentDate: '22/04/2019',
    userLocation: 'Brazil (but wish were New Zeland)',
  },
];

const images = [
  {
    id: 1,
    banner: testImage1,
  },
  {
    id: 2,
    banner: testImage2,
  },
  {
    id: 3,
    banner: testImage3,
  },
  {
    id: 4,
    banner: testImage4,
  },
  {
    id: 5,
    banner: testImage5,
  },
  {
    id: 6,
    banner: testImage6,
  },
  {
    id: 7,
    banner: testImage7,
  },
  {
    id: 8,
    banner: testImage8,
  },
];

export default function JobOpening({ match }) {
  const [processedAverage, setProcessedAverage] = useState(0);
  const [textCandidato, setTextCandidato] = useState('Candidatar-se');
  const dispatch = useDispatch();
  const hostAds = useSelector(state => state.hostAds);
  const candidatura = useSelector(state => state.candidature);
  const token = localStorage.getItem('token');
  const idPessoa = localStorage.getItem('id');
  const idOportunidade = decodeURIComponent(match.params.id);

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('id');
      const opId = decodeURIComponent(match.params.id);
      await recommenderAPi.get(`/generatehistoric/${opId}/${userId}`);
    }
    fetchData();
  }, [match.params.id]);

  useEffect(() => {
    dispatch(getAdsByIdRequest(token, idOportunidade));
    dispatch(getCandidatureRequest(token, idOportunidade, idPessoa));
  }, [dispatch]);

  useEffect(() => {
    if (candidatura.candidatura) {
      setTextCandidato('Candidatado');
    } else {
      setTextCandidato('Candidatar-se');
    }
  }, [candidatura]);

  function Candidature() {
    dispatch(createCandidatureRequest(token, { idPessoa, idOportunidade }));
  }

  function createFilledStars(n) {
    const elements = [];
    for (let i = 0; i < n; i += 1) {
      elements.push(<AiFillStar key={i} />);
    }
    return elements;
  }
  function createOutlineStars(n) {
    const elements = [];
    for (let i = n; i < 5; i += 1) {
      elements.push(<AiOutlineStar key={i} />);
    }
    return elements;
  }
  function processAverage() {
    setProcessedAverage(Math.floor(average + 0.5));
  }

  useEffect(() => {
    processAverage();
  }, []);

  useEffect(() => {
    console.log(hostAds.listAds[0]);
  }, [hostAds]);

  return (
    <Container>
      <InnerContainer>
        <SideBar />

        {hostAds.listAds[0] && (
          <ContentWrapper>
            <CotentHeader>
              <Header>
                <Title>
                  <span>{hostAds.listAds[0].titulo}</span>
                </Title>
                <HostInfo>
                  <span> Posted by: {hostAds.listAds[0].nome} </span>
                  {/* <HostAvatar src={profileImage} /> */}
                </HostInfo>
              </Header>
            </CotentHeader>
            <CotentBody>
              <ContentBodyWrapper>
                <IconDiv>
                  <MdLocationOn /> <span> {hostAds.listAds[0].cidade}</span>
                </IconDiv>
                <IconDiv>
                  <MdWork />
                  <span>
                    Disponibilidade da Vaga <br />
                  </span>
                  <span>
                    Início: {hostAds.listAds[0].disponibilidadeInicio} <br />
                  </span>
                  <span>Final: {hostAds.listAds[0].disponibilidadeFinal} </span>
                </IconDiv>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Fotos </ContentBodyTitle>
                <JobOpeningSlider Contents={images} />
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Descrição </ContentBodyTitle>
                <Description>{hostAds.listAds[0].descricao}</Description>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Requisitos </ContentBodyTitle>
                <Description>{hostAds.listAds[0].requisitos}</Description>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Como você vai ajudar </ContentBodyTitle>
                <Description>
                  <DynamicIconList
                    icons={hostAds.listAds[0].habilidades}
                    label="habilidade"
                  />
                </Description>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> O que você vai receber </ContentBodyTitle>
                <Description>
                  <DynamicIconList
                    icons={hostAds.listAds[0].ofertas}
                    label="oferta"
                  />
                </Description>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <Inscription />
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Avaliação geral </ContentBodyTitle>
                <AverageRating>
                  <div>
                    {hostAds.listAds[0].mediaAvaliacao}
                    <span> - </span>
                    {createFilledStars(hostAds.listAds[0].mediaAvaliacao)}
                    {hostAds.listAds[0].mediaAvaliacao < 5 &&
                      createOutlineStars(hostAds.listAds[0].mediaAvaliacao)}
                  </div>
                  <PrimaryButton
                    disabled={
                      textCandidato === 'Candidatado' ||
                      hostAds.listAds[0].ativa === 0 ||
                      hostAds.listAds[0].idPessoa ===
                        JSON.parse(localStorage.getItem('id'))
                    }
                    onClick={() => Candidature()}
                    text={
                      hostAds.listAds[0].ativa === 0
                        ? 'Vaga desativada temporariamente'
                        : textCandidato
                    }
                    type="button"
                    // style={{
                    //   display:
                    //     hostAds.listAds[0].idPessoa ===
                    //     JSON.parse(localStorage.getItem('id'))
                    //       ? 'none'
                    //       : 'flex',
                    // }}
                  />
                </AverageRating>
              </ContentBodyWrapper>

              <ContentBodyWrapper>
                <ContentBodyTitle> Comentários </ContentBodyTitle>

                <CommentsWrapper>
                  <Comments
                    Contents={comments}
                    idCandidatura={candidatura.candidatura.id}
                    idOportunidade={idOportunidade}
                    vagaAtiva={hostAds.listAds[0].ativa}
                    idPessoaVaga={hostAds.listAds[0].idPessoa}
                  />
                </CommentsWrapper>
              </ContentBodyWrapper>
            </CotentBody>
          </ContentWrapper>
        )}
      </InnerContainer>
    </Container>
  );
}
