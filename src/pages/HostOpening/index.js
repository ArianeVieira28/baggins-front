import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocationOn, MdLocationCity } from 'react-icons/md';
// import Rating from '@material-ui/lab/Rating';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  // Title,
  Description,
  IconDiv,
  ContentBodyWrapper,
  ContentBodyTitle,
  // HeaderProfileAvatar,
} from './styles';

import SideBar from '../../partials/SideBar/indexAdmin';
import { getHostDetailsRequest } from '../../store/modules/host/actions';
import headerImage from '../../assets/imgs/profile/header3.jpg';

export default function CurriculumOpening({ match }) {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const id = decodeURIComponent(match.params.id);

  const host = useSelector(state => state.host);

  useEffect(() => {
    dispatch(getHostDetailsRequest(token, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <CotentHeader>
              <Header background={headerImage}>
                <div />
              </Header>
              {/* <HeaderProfileAvatar src={profileImage} /> */}
            </CotentHeader>
            {/* <HostInfo>
                <HostAvatar src={profileImage} />
              </HostInfo> */}
            {/* <Title>
              <span>{host.hostDetails.nome}</span>
            </Title> */}
          </CotentHeader>
          <CotentBody>
            <ContentBodyWrapper>
              <IconDiv>
                <MdLocationOn /> <span> {host.hostDetails.pais}</span>
                <MdLocationCity />{' '}
                <span>
                  {' '}
                  {host.hostDetails.estado}, {host.hostDetails.cidade}
                </span>
              </IconDiv>
            </ContentBodyWrapper>
            <ContentBodyWrapper>
              <ContentBodyTitle> Informações do Anfitrião </ContentBodyTitle>
              <Description>
                {/* <i className="fab fa-facebook-square" /> */}
                Nome: {host.hostDetails.nome}
              </Description>
              <Description>
                {/* <i className="fab fa-facebook-square" /> */}
                Email: {host.hostDetails.email}
              </Description>
            </ContentBodyWrapper>
            <ContentBodyWrapper>
              <ContentBodyTitle> Classificação da vaga </ContentBodyTitle>
              <Description>
                {/* <i className="fab fa-facebook-square" /> */}
                Tipo da Empresa: {host.hostDetails.tipo_oportunidade}
              </Description>
              <Description>
                {/* <i className="fab fa-facebook-square" /> */}
                Nome: {host.hostDetails.nomeEmpresa}
              </Description>
            </ContentBodyWrapper>
            <ContentBodyWrapper>
              <ContentBodyTitle> Endereço </ContentBodyTitle>
              <Description>
                {/* <i className="fab fa-facebook-square" /> */}
                Cidade: {host.hostDetails.cidade}
              </Description>
              <Description>
                {/* <i className="fab fa-instagram" /> */}
                Endereço: {host.hostDetails.endereco}
              </Description>
              <Description>
                {/* <i className="fab fa-twitter-square" /> */}
                Complemento: {host.hostDetails.complemento}
              </Description>
            </ContentBodyWrapper>
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
