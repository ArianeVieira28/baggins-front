import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TrashFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import testImage1 from '../../assets/imgs/testimages/test1.jpg';
import { getHostRequest } from '../../store/modules/host/actions';
import {
  getAdsRequest,
  deleteAdsRequest,
  disableAdsRequest,
  editRedirectAdsRequest,
} from '../../store/modules/hostAds/actions';

import {
  ContentMyAds,
  ContentsHeader,
  ContentsBody,
  ContentsFooter,
  ContentsContainer,
  ContentsWrapper,
  FooterButtons,
} from './styles';

import IconButton from '../../components/buttons/IconButton';
import LightButton from '../../components/buttons/LightButton';

export default function Tab1() {
  const dispatch = useDispatch();

  const hostAds = useSelector(state => state.hostAds);
  const host = useSelector(state => state.host);

  const ativarDesativarVaga = (e, id, ativa) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (ativa === 0) {
      dispatch(disableAdsRequest(token, id, { ativa: 1 }));
    } else {
      dispatch(disableAdsRequest(token, id, { ativa: 0 }));
    }
  };

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    dispatch(getHostRequest(token, id));
  }, [dispatch]);

  useEffect(() => {
    const { id } = host.host;
    const token = localStorage.getItem('token');

    dispatch(getAdsRequest(token, id));
  }, [dispatch, host.host]);

  function deletarOportunidade(e, id) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    dispatch(deleteAdsRequest(token, id));
  }

  function handleEdit(e, id) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    dispatch(editRedirectAdsRequest(token, id));
  }

  return (
    <>
      <ContentMyAds>
        <ContentsWrapper>
          {hostAds.listAds.map(content => (
            <ContentsContainer key={content.id}>
              <Link to={`/jobopening/${content.id}`}>
                <ContentsHeader banner={testImage1} />
                <ContentsBody>
                  {content.titulo && content.titulo.length > 20 ? (
                    <span>{content.titulo.substring(0, 20)}...</span>
                  ) : (
                    <span>{content.titulo}</span>
                  )}
                </ContentsBody>
                <ContentsFooter>
                  {content.descricao && content.descricao.length > 80 ? (
                    <span>{content.descricao.substring(0, 80)}...</span>
                  ) : (
                    <span>{content.descricao}</span>
                  )}
                  <FooterButtons>
                    <IconButton
                      type="button"
                      icon={<TrashFill size={20} />}
                      onClick={e => deletarOportunidade(e, content.id)}
                      color="#df0000"
                    />
                    <LightButton
                      type="button"
                      onClick={e =>
                        ativarDesativarVaga(e, content.id, content.ativa)
                      }
                      text={content.ativa === 1 ? 'Desativar' : 'Ativar'}
                    />
                    <LightButton
                      type="button"
                      onClick={e => handleEdit(e, content.id)}
                      text="Editar"
                      color="#00a000"
                    />
                  </FooterButtons>
                </ContentsFooter>
              </Link>
            </ContentsContainer>
          ))}
        </ContentsWrapper>
      </ContentMyAds>
    </>
  );
}
