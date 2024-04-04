/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocationOn, MdLocationCity } from 'react-icons/md';
import Rating from '@material-ui/lab/Rating';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  Title,
  Description,
  IconDiv,
  ContentBodyWrapper,
  ContentBodyTitle,
  HeaderProfileAvatar,
} from './styles';

import SideBar from '../../partials/SideBar';
import profileImage from '../../assets/imgs/profile/profile1.png';

import { getCurriculumRequest } from '../../store/modules/curriculum/actions';
import { getUserIdiomRequest } from '../../store/modules/idiom/actions';
import { getUserSkillsRequest } from '../../store/modules/skills/actions';
import headerImage from '../../assets/imgs/profile/header3.jpg';

export default function CurriculumOpening({ match }) {
  const dispatch = useDispatch();
  const curriculum = useSelector(state => state.curriculum);
  const idiom = useSelector(state => state.idiom);
  const skills = useSelector(state => state.skills);

  const token = localStorage.getItem('token');
  const id = decodeURIComponent(match.params.id);

  const [preview, setPreview] = useState(null);
  const photo = useSelector(state => state.photo);

  useEffect(() => {
    dispatch(getCurriculumRequest(token, id));
    dispatch(getUserIdiomRequest(token, id));
    dispatch(getUserSkillsRequest(token, id));
  }, [dispatch]);

  useEffect(() => {
    setPreview(`http://34.95.136.148/api/avatar/${id}`);
  }, [photo]);

  // useEffect(() => {
  //   console.log(skills.userHabilidade);
  // }, [skills]);

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
              <HeaderProfileAvatar
                src={preview === null ? profileImage : preview}
              />
            </CotentHeader>
            {/* <HostInfo>
                <HostAvatar src={profileImage} />
              </HostInfo> */}
            <Title>
              <span>{curriculum.curriculum.nome}</span>
            </Title>
          </CotentHeader>
          <CotentBody>
            <ContentBodyWrapper>
              <IconDiv>
                <MdLocationOn /> <span> {curriculum.curriculum.pais}</span>
                <MdLocationCity />{' '}
                <span>
                  {' '}
                  {curriculum.curriculum.estado}, {curriculum.curriculum.cidade}
                </span>
              </IconDiv>
            </ContentBodyWrapper>

            <ContentBodyWrapper>
              <ContentBodyTitle> Sobre mim </ContentBodyTitle>
              <Description>{curriculum.curriculum.descricao}</Description>
            </ContentBodyWrapper>

            <ContentBodyWrapper>
              <ContentBodyTitle> Redes Sociais </ContentBodyTitle>
              <Description>
                <i className="fab fa-facebook-square" />
                Facebook: {curriculum.curriculum.facebook}
              </Description>
              <Description>
                <i className="fab fa-instagram" />
                Instagram: {curriculum.curriculum.instagram}
              </Description>
              <Description>
                <i className="fab fa-twitter-square" />
                Twitter: {curriculum.curriculum.twitter}
              </Description>
            </ContentBodyWrapper>

            <ContentBodyWrapper>
              <ContentBodyTitle> Idiomas </ContentBodyTitle>
              <Description>
                {idiom.listIdiom &&
                  idiom.listIdiom.map(m => (
                    <span value={m.id} key={m.id}>
                      {m.idioma} - {m.proficiencia}
                    </span>
                  ))}
              </Description>
            </ContentBodyWrapper>

            <ContentBodyWrapper>
              <ContentBodyTitle> Habilidades </ContentBodyTitle>
              <Description>
                <Row>
                  {skills.userHabilidade &&
                    skills.userHabilidade.map(m => (
                      <Col
                        key={m.id}
                        className="rounded border border-purple col-sm-3"
                      >
                        <span value={m.id} key={m.id}>
                          {m.habilidade}
                          <Rating
                            name="read-only"
                            readOnly
                            value={m.rateStar}
                            size="small"
                          />
                        </span>
                      </Col>
                    ))}
                </Row>
              </Description>
            </ContentBodyWrapper>
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
