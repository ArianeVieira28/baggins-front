import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { url } from '../../services/api';

import {
  Container,
  InnerContainer,
  Header,
  Body,
  Footer,
  NavigationList,
} from './styles';

import profilePic from '../../assets/imgs/profile/profile1.png';

import LightButton from '../../components/buttons/LightButton';

import { getUserRequest } from '../../store/modules/user/actions';

import { getHostRequest } from '../../store/modules/host/actions';
import { getPhotoRequest } from '../../store/modules/photo/actions';

export default function SideBar() {
  const dispatch = useDispatch();
  const nome = localStorage.getItem('nome');

  const history = useHistory();
  function handleButtonClick() {
    history.push('/host');
  }
  const [preview, setPreview] = useState(null);
  const photo = useSelector(state => state.photo);

  const userInfo = useSelector(state => state.user);
  const host = useSelector(state => state.host);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    dispatch(getUserRequest(userId));
    dispatch(getHostRequest(token, userId));
    dispatch(getPhotoRequest(token, userId));
  }, [dispatch]);

  useEffect(() => {
    const userId = localStorage.getItem('id');

    if (photo.file !== '') {
      setPreview(`${url}/avatar/${userId}`);
    }
  }, [photo]);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    dispatch(getPhotoRequest(token, userId));
  }, [dispatch, userInfo]);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    dispatch(getHostRequest(token, userId));
  }, [dispatch, host.anfitriao]);

  function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('id');

    localStorage.removeItem('nickname');
    localStorage.removeItem('idChat');
    localStorage.removeItem('photoUrl');
    history.push('/main');
  }
  return (
    <Container>
      <InnerContainer>
        <Header profilePic={preview === null ? profilePic : preview}>
          <div />
          <p> {nome} </p>
        </Header>
        <Body>
          <NavigationList>
            <Link to="/main">Home</Link>
            <Link to="/search">Encontrar vagas</Link>
            {/* <Link to="/">Vagas encontradas</Link> */}
            <Link
              to="/myads"
              style={{
                display: userInfo.user.anfitriao === 1 ? 'flex' : 'none',
              }}
            >
              Meus anúncios
            </Link>
            <Link to="/myjobopenings">Minhas Vagas</Link>
            <Link to="/chat">Mensagens</Link>
          </NavigationList>
          <NavigationList>
            <Link to="/profile">Editar Perfil</Link>
            <Link to="/account">Configurações da conta</Link>
          </NavigationList>
        </Body>
        <Footer>
          <Link to="/" onClick={() => logOut()}>
            Sair
          </Link>

          {userInfo.user.anfitriao === 0 && (
            <LightButton
              disabled={host.host !== ''}
              onClick={handleButtonClick}
              type="button"
              text={
                host.host !== ''
                  ? 'Aguardando aprovação'
                  : 'Tornar-se Anfitrião'
              }
            />
          )}
        </Footer>
      </InnerContainer>
    </Container>
  );
}
