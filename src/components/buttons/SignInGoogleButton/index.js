import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
import IconButton from '../IconButton';

export default function SingInGoogleButton() {
  // const { type, onClick, text, icon, classe } = props;

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <>
      <GoogleLogin
        clientId="1001550703166-90vve40aqv5cpsi872300v4j14u11tkj.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        render={renderProps => (
          <IconButton
            icon={<FaGoogle />}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            text="Iniciar sessão com o Google"
          />
        )}
      />
    </>
  );
}
