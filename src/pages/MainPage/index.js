import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import recommenderApi from '../../services/recommenderApi';
import api from '../../services/api';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
} from './styles';

import { getuserCandidatureRequest } from '../../store/modules/candidature/actions';
// import { getAdsRequest } from '../../store/modules/hostAds/actions';
import { getHostRequest } from '../../store/modules/host/actions';

import SideBar from '../../partials/SideBar';
import ContentMain from '../../partials/ContentMain/index';

import headerImage from '../../assets/imgs/mainpage/header5.png';

export default function MainPage() {
  const dispatch = useDispatch();
  const candidature = useSelector(state => state.candidature);
  // const userInfo = useSelector(state => state.user);

  // const hostAds = useSelector(state => state.hostAds);
  // const host = useSelector(state => state.host);

  const [vagasRecentes, setVagasRecentes] = useState([]);
  const [vagasRecentesLoading, setVagasRecentesLoading] = useState(false);

  useEffect(() => {
    setVagasRecentesLoading(true);
    async function fetchData() {
      const token = localStorage.getItem('token');
      const headerParams = { Authorization: `Bearer ${token}` };
      const response = await api.get('/alloportunidades', {
        headers: headerParams,
      });
      console.log(response);
      setVagasRecentes(response.data);
      setVagasRecentesLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    dispatch(getHostRequest(token, id));
  }, [dispatch]);

  // const [anunciosLoading, setAnunciosLoading] = useState(false);

  // useEffect(() => {
  //   setAnunciosLoading(true);
  //   const token = localStorage.getItem('token');
  //   const idHost = host.host.id;
  //   dispatch(getAdsRequest(token, idHost));
  //   setAnunciosLoading(false);
  // }, [host, dispatch]);

  const [recommendations, setRecommendations] = useState([]);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);

  useEffect(() => {
    setRecommendationsLoading(true);
    async function fetchData() {
      const userId = localStorage.getItem('id');
      const response = await recommenderApi.get(`/recommender/${userId}`);
      setRecommendations(response.data);
      setRecommendationsLoading(false);
    }
    fetchData();
  }, []);

  const [candidaturasLoading, setCandidaturasLoading] = useState(false);

  useEffect(() => {
    setCandidaturasLoading(true);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    dispatch(getuserCandidatureRequest(token, id));
    setCandidaturasLoading(false);
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(recommendations);
  //   console.log(vagasRecentes);
  //   console.log(candidature.list);
  //   console.log(hostAds.listAds);
  // }, [candidature, hostAds, recommendations, vagasRecentes]);

  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <Header background={headerImage}>
              <div>
                <h1> Conquiste o mundo. </h1>
                {/* <input type="text" placeholder="Canadá" /> */}
              </div>
            </Header>
          </CotentHeader>
          <CotentBody>
            <ContentMain
              loading={recommendationsLoading}
              contents={recommendations}
              title="Vagas Recomendadas"
              errorMessage="Não foi possível fazer recomendações para você"
            />
            <ContentMain
              loading={vagasRecentesLoading}
              contents={vagasRecentes}
              title="Vagas publicadas recentemente"
              errorMessage="Não foi possível carregar as vagas mais recentes"
            />
            <ContentMain
              loading={candidaturasLoading}
              contents={candidature.list}
              title="Minhas Vagas"
              errorMessage="Você ainda não se candidatou em nenhuma vaga"
            />
            {/* {userInfo.user.anfitriao === 1 && (
              <ContentMain
                loading={anunciosLoading}
                contents={hostAds.listAds}
                title="Meus Anúncios"
                errorMessage="Você ainda não anunciou nenhuma vaga"
              />
            )} */}
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
