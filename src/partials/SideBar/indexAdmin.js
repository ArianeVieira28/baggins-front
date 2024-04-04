import React, { useEffect } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  InnerContainer,
  Header,
  Body,
  Footer,
  NavigationList,
} from './styles';

import profilePic from '../../assets/imgs/profile/profile7.png';

// import LightButton from '../../components/buttons/LightButton';

import { getUserRequest } from '../../store/modules/user/actions';

export default function SideBar() {
  const dispatch = useDispatch();
  const nome = localStorage.getItem('nome');

  const history = useHistory();
  // function handleButtonClick() {
  //   history.push('/host');
  // }

  // const userInfo = useSelector(state => state.user);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    dispatch(getUserRequest(userId));
  }, [dispatch]);

  function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('id');
    history.push('/main');
  }
  return (
    <Container>
      <InnerContainer>
        <Header profilePic={profilePic}>
          <div />
          <p> {nome} </p>
        </Header>
        <Body>
          <NavigationList>
            <Link to="/mainAdmin">Home</Link>
          </NavigationList>
        </Body>
        <Footer>
          <Link to="/" onClick={() => logOut()}>
            Sair
          </Link>
        </Footer>
      </InnerContainer>
    </Container>
  );
}
