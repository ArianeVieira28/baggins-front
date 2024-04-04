import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background-color: #f2ac33;
  color: #fff;

  height: 60%;

  z-index: 999999;
  width: 350px;
  margin: 0 -200px 0 0;
  border-radius: 8px;

  * {
    margin: 0;
  }
`;

export const BodyDivision = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  hr {
    flex: 1 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  span {
    padding: 0 10px;
  }
`;

export const LinkButton = styled.button`
  color: #7978c4;
  border: none;
  background: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 60px 20px;
`;

export const SignUpHeader = styled.div`
  height: 100%;

  p {
    padding: 10px 0;
  }
`;

export const SignUpBody = styled.div`
  button {
    margin: 5px 0;
  }
`;

export const SignUpFooter = styled.div`
  font-size: 0.8rem;
  span {
    padding: 0 5px 0 0;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px 20px;
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0 0 20px 0;

  font-size: 1.5rem;
  button {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;
    color: #fff;

    transition: all 0.3s;
    &:hover {
      color: #7978c4;
    }
  }
  span {
    height: 100%;
    font-weight: 600;
  }
`;

export const LoginBody = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  input {
    margin: 5px 0;
  }
  button {
    margin: 5px 0;
  }
`;

export const LoginFooter = styled.div`
  font-size: 0.8rem;
  span {
    padding: 0 5px 0 0;
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 60px 20px;
`;
export const PasswordHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0 0 20px 0;

  font-size: 1.5rem;
  button {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;
    color: #fff;

    transition: all 0.3s;
    &:hover {
      color: #7978c4;
    }
  }
  span {
    height: 100%;
    font-weight: 600;
  }
`;
export const PasswordBody = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin: 5px 0;
  }
  button {
    margin: 5px 0;
  }
`;
export const PasswordFooter = styled.div`
  font-size: 0.8rem;
`;

export const EmailSignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px 20px;
`;

export const EmailSignUpHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.5rem;
  button {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;
    color: #fff;

    transition: all 0.3s;
    &:hover {
      color: #7978c4;
    }
  }
  span {
    height: 100%;
    font-weight: 600;
  }
`;

export const EmailSignUpBody = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    font-size: 0.8rem;
  }

  input {
    margin: 5px 0 0 0;
  }
  button {
    margin: 10px 0;
  }
`;

export const EmailSignUpFooter = styled.div`
  font-size: 0.8rem;
  span {
    padding: 0 5px 0 0;
  }
  p {
    padding: 0 0 5px 0;
  }
`;
