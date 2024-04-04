import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  useDispatch,
  // useSelector
} from 'react-redux';

import { FaGoogle } from 'react-icons/fa';
import { loginAdminRequest } from '../../store/modules/user/actions';
import IconButton from '../../components/buttons/IconButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';

import {
  Container,
  BodyDivision,
  LoginContainer,
  LoginHeader,
  LoginBody,
  LoginFooter,
} from './styles';
import { Input } from '../../components/Inputs/PrimaryInput/styles';

export default function LoginAdmin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function makeLogin() {
    const user = {
      email,
      senha,
    };
    dispatch(loginAdminRequest(user));
  }

  const history = useHistory();
  function handleButtonClick() {
    history.push('/mainAdmin');
  }

  return (
    <>
      <Container>
        <>
          <LoginContainer>
            <LoginHeader>
              <span>Faça login na sua conta </span>
            </LoginHeader>
            <LoginBody>
              <IconButton
                type="button"
                value="/main"
                text="Iniciar sessão com o Google"
                icon={<FaGoogle />}
                onClick={handleButtonClick}
              />
              <BodyDivision>
                <hr />
                <span> ou </span>
                <hr />
              </BodyDivision>
              <Input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <SecondaryButton
                type="button"
                text="Entrar"
                onClick={() => makeLogin()}
              />
            </LoginBody>
            <LoginFooter />
          </LoginContainer>
        </>
      </Container>
    </>
  );
}
