import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IoIosArrowBack } from 'react-icons/io';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  createUserRequest,
  loginRequest,
} from '../../store/modules/user/actions';

import SignInGoogleButton from '../../components/buttons/SignInGoogleButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';

import {
  Container,
  BodyDivision,
  SignUpContainer,
  SignUpHeader,
  SignUpBody,
  SignUpFooter,
  LinkButton,
  LoginContainer,
  LoginHeader,
  LoginBody,
  LoginFooter,
  PasswordContainer,
  PasswordHeader,
  PasswordBody,
  PasswordFooter,
  EmailSignUpContainer,
  EmailSignUpHeader,
  EmailSignUpBody,
  EmailSignUpFooter,
} from './styles';
import { Input } from '../../components/Inputs/PrimaryInput/styles';

export default function Login() {
  const dispatch = useDispatch();

  const [form, setForm] = useState('signUp');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const [erroSenha, setErroSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);

  const [token, setToken] = useState('');
  const [newSenha, setNewSenha] = useState('');

  function ValidateEmail() {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (expression.test(String(email))) {
      setErroEmail(false);
    } else {
      setErroEmail(true);
    }
  }

  function createUser() {
    ValidateEmail();
    if (senha.length >= 6) {
      setErroSenha(false);
      const user = {
        email,
        senha,
        nome,
      };
      dispatch(createUserRequest(user));
    } else {
      setErroSenha(true);
    }
  }

  function makeLogin() {
    ValidateEmail();
    const user = {
      email,
      senha,
      nome,
    };
    dispatch(loginRequest(user));
  }

  function changeForm(change) {
    setForm(change);
  }

  async function getTokenReset() {
    ValidateEmail();
    if (!erroEmail) {
      const response = await api.post('/recuperarsenha', { email });
      if (response.status === 204) {
        changeForm('passwordReset');
      } else {
        toast.error('Email não encontrado');
      }
    }
  }

  async function resetPassword() {
    const response = await api.put('/recuperarsenha', {
      token,
      senha: newSenha,
    });
    if (response.status === 204) {
      toast.success('Senha alterada com sucesso!');
    }
  }

  return (
    <>
      <Container>
        {form === 'signUp' && (
          <>
            <SignUpContainer>
              <SignUpHeader>
                <h2>Escolha o destino.</h2>
                <h2>Encontre oportunidades.</h2>
                <p>Crie uma conta agora, é grátis!</p>
              </SignUpHeader>
              <SignUpBody>
                {/* <IconButton
                  type="button"
                  // value="/main"
                  text="Registre-se com o Google"
                  icon={<FaGoogle />}
                  onClick={() => handleButtonClick()}
                /> */}
                <SignInGoogleButton />
                <SecondaryButton
                  type="button"
                  text="Registrar-se com um e-mail"
                  onClick={() => changeForm('emailSignUp')}
                />
              </SignUpBody>
              <SignUpFooter>
                <span>já tem uma conta?</span>
                <LinkButton type="button" onClick={() => changeForm('login')}>
                  Faça Login
                </LinkButton>
              </SignUpFooter>
            </SignUpContainer>
          </>
        )}

        {form === 'login' && (
          <>
            <LoginContainer>
              <LoginHeader>
                <button type="button" onClick={() => changeForm('signUp')}>
                  <IoIosArrowBack />
                </button>
                <span>Faça login na sua conta </span>
              </LoginHeader>
              <LoginBody>
                <SignInGoogleButton />

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
                {erroEmail && <p>Email Inválido</p>}

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
              <LoginFooter>
                <p>
                  <LinkButton
                    type="button"
                    onClick={() => changeForm('password')}
                  >
                    Esqueceu sua senha?
                  </LinkButton>
                </p>
                <p>
                  <span>Não tem uma conta?</span>
                  <LinkButton
                    type="button"
                    onClick={() => changeForm('signUp')}
                  >
                    Registre-se
                  </LinkButton>
                </p>
              </LoginFooter>
            </LoginContainer>
          </>
        )}

        {form === 'emailSignUp' && (
          <>
            <EmailSignUpContainer>
              <EmailSignUpHeader>
                <button type="button" onClick={() => changeForm('signUp')}>
                  <IoIosArrowBack />
                </button>
                <span>Crie sua conta </span>
              </EmailSignUpHeader>
              <EmailSignUpBody>
                <Input
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome"
                />

                <Input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                {erroEmail && <p>Email Inválido</p>}
                <Input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
                <p>Use 6 carácteres ou mais.</p>
                {erroSenha && <p>Senha muito curta</p>}
                <SecondaryButton
                  type="button"
                  text="Comece já sua aventura!"
                  onClick={() => createUser()}
                />
              </EmailSignUpBody>
              <EmailSignUpFooter>
                <p>
                  Ao se registrar você concorda com a Política de Privacidade e
                  os Termos de Uso do Baggins.
                </p>
                <p>
                  <span>já tem uma conta?</span>
                  <LinkButton type="button" onClick={() => changeForm('login')}>
                    Faça Login
                  </LinkButton>
                </p>
              </EmailSignUpFooter>
            </EmailSignUpContainer>
          </>
        )}

        {form === 'password' && (
          <>
            <PasswordContainer>
              <PasswordHeader>
                <button type="button" onClick={() => changeForm('login')}>
                  <IoIosArrowBack />
                </button>
                <span>Esqueceu sua senha?</span>
              </PasswordHeader>
              <PasswordBody>
                <p>
                  Não se preocupe, vamos enviar uma mensagem para você redefinir
                  sua senha
                </p>
                <span>
                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder="E-mail"
                  />
                  {erroEmail && <p>Email não encontrado</p>}

                  <SecondaryButton
                    type="button"
                    text="Continuar"
                    onClick={() => getTokenReset()}
                  />
                </span>
              </PasswordBody>
              <PasswordFooter>
                <LinkButton type="button" onClick={() => changeForm('login')}>
                  Voltar à página de login
                </LinkButton>
              </PasswordFooter>
            </PasswordContainer>
          </>
        )}

        {form === 'passwordReset' && (
          <>
            <PasswordContainer>
              <PasswordHeader>
                <button type="button" onClick={() => changeForm('login')}>
                  <IoIosArrowBack />
                </button>
                <span>E-mail enviado!</span>
              </PasswordHeader>
              <PasswordBody>
                <p>
                  Um código para a redefinição da senha foi enviado para o seu
                  e-mail.
                </p>
                <span>
                  <Input
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    type="text"
                    placeholder="Código"
                  />
                  <Input
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    type="text"
                    placeholder="Nova senha"
                  />
                  <Input
                    value={newSenha}
                    onChange={e => setNewSenha(e.target.value)}
                    type="text"
                    placeholder="Confirmar senha"
                  />
                  <SecondaryButton
                    type="button"
                    text="Alterar senha"
                    onClick={() => resetPassword()}
                  />
                </span>
              </PasswordBody>
              <PasswordFooter>
                <LinkButton type="button" onClick={() => changeForm('login')}>
                  Voltar à página de login
                </LinkButton>
              </PasswordFooter>
            </PasswordContainer>
          </>
        )}
      </Container>
    </>
  );
}
