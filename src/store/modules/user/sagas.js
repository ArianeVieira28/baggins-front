import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// import { myFirebase, myFirestore } from '../../../pages/Chat/Config/MyFirebase';
// import firebase, { auth } from 'firebase';
import { AppString } from '../../../pages/Chat/Component/Const';
// import profileImage from '../../../assets/imgs/profile/profile1.png';

import api, { url } from '../../../services/api';
import history from '../../../services/history';
import { myFirebase, myFirestore } from '../../../pages/Chat/Config/MyFirebase';

import {
  createUserSuccess,
  createUserFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  loginAdminSuccess,
  loginAdminFailure,
  getUserSuccess,
  userUpdateSuccess,
  createUserAddressSuccess,
  createUserAddressFailure,
  getUserAddressSuccess,
  getUserAddressFailure,
  userAddressUpdateSuccess,
  userAddressUpdateFailure,
  createUserContactSuccess,
  createUserContactFailure,
  getUserContactSuccess,
  updateUserContactSuccess,
} from './actions';

export function* CreateUser({ user }) {
  try {
    const response = yield call(api.post, '/pessoa', user);

    if (response.data !== 'Este usuário já existe!') {
      const { email, senha } = user;

      myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(function(data) {
          myFirebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(function(res) {
              console.log('Autenticado no chat');
            });
          // localStorage.setItem('chatToken', data.user.getIdToken)
        })
        .catch(function(error) {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // if (errorCode == 'auth/weak-password') {
          //   alert('The password is too weak.');
          // } else {
          //   alert(errorMessage);
          // }
          // console.log(error);
        });

      const emailSenha = { email, senha };

      toast.success('Cadastro realizado!');
      yield all([
        put(createUserSuccess(response.data)),
        put(loginRequest(emailSenha)),
      ]);
    } else {
      toast.error('Este usuário já existe!');
    }
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

export function* Login({ user }) {
  try {
    const response = yield call(api.post, '/authenticate', user);
    yield put(loginSuccess(response.data));

    localStorage.setItem('id', response.data.pessoa.id);
    localStorage.setItem('nome', response.data.pessoa.nome);
    localStorage.setItem('token', response.data.token.token);

    myFirebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.senha)
      .then(async result => {
        const { user } = result;
        localStorage.setItem(AppString.ID, user.uid);
        localStorage.setItem(AppString.NICKNAME, response.data.pessoa.nome);
        localStorage.setItem(
          AppString.PHOTO_URL,
          `${url}/avatar/${response.data.pessoa.id}`
        );
        myFirestore
          .collection('users')
          .doc(user.uid)
          .set({
            id: user.uid,
            nickname: response.data.pessoa.nome,
            aboutMe: '',
            photoUrl: `${url}/avatar/${response.data.pessoa.id}`,
            email: user.email,
          })
          .then(data => {});
      })
      .catch(err => {
        // this.props.showToast(0, err.message)
        // this.setState({ isLoading: false });
      });

    history.push('/main');
  } catch (error) {
    toast.error('Login e/ou senha inválidos!');

    yield put(loginFailure(error));
  }
}
export function* LoginAdmin({ user }) {
  try {
    const response = yield call(api.post, '/authenticateadmin', user);
    yield put(loginAdminSuccess(response.data));
    localStorage.setItem('id', response.data.pessoa.id);
    localStorage.setItem('nome', response.data.pessoa.nome);
    localStorage.setItem('token', response.data.token.token);

    history.push('/mainAdmin');
  } catch (error) {
    toast.error('Login e/ou senha inválidos!');

    yield put(loginAdminFailure(error));
  }
}
export function* updateUser({ data }) {
  try {
    const response = yield call(api.put, `/pessoa/${data.id}`, data.user);
    yield put(userUpdateSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* getUser({ id }) {
  try {
    const response = yield call(api.get, `/pessoa/${id}`);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* createUserAddress({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    const response = yield call(api.post, '/enderecopessoa', data.user, {
      headers: headerParams,
    });

    yield all([put(createUserAddressSuccess(response.data))]);
  } catch (error) {
    yield put(createUserAddressFailure(error));
  }
}

export function* createUserContact({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    const response = yield call(api.post, '/contato', data.user, {
      headers: headerParams,
    });

    yield all([put(createUserContactSuccess(response.data))]);
  } catch (error) {
    yield put(createUserContactFailure(error));
  }
}

export function* getUserAddress({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/enderecopessoa/${data.id}`, {
      headers: headerParams,
    });
    yield put(getUserAddressSuccess(response.data));
  } catch (error) {
    yield put(getUserAddressFailure(error));
  }
}

export function* getUserContact({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/contato/${data.id}`, {
      headers: headerParams,
    });
    yield put(getUserContactSuccess(response.data));
  } catch (error) {
    yield put(getUserAddressFailure(error));
  }
}

export function* updateUserAddress({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/enderecopessoa/${data.id}`,
      data.user,
      {
        headers: headerParams,
      }
    );
    yield put(userAddressUpdateSuccess(response.data));
    toast.success('Endereço alterado!');
  } catch (error) {
    yield put(userAddressUpdateFailure(error));
  }
}

export function* updateUserContact({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.put, `/contato/${data.id}`, data.user, {
      headers: headerParams,
    });
    yield put(updateUserContactSuccess(response.data));
    toast.success('Contato alterado!');
  } catch (error) {
    yield put(userAddressUpdateFailure(error));
  }
}
export default all([
  takeLatest('@user/CREATE_REQUEST', CreateUser),
  takeLatest('@user/LOGIN_REQUEST', Login),
  takeLatest('@user/GET_REQUEST', getUser),
  takeLatest('@user/UPDATE_REQUEST', updateUser),
  takeLatest('@user/CREATE_ADDRESS_REQUEST', createUserAddress),
  takeLatest('@user/GET_ADDRESS_REQUEST', getUserAddress),
  takeLatest('@user/UPDATE_ADDRESS_REQUEST', updateUserAddress),
  takeLatest('@user/CREATE_CONTACT_REQUEST', createUserContact),
  takeLatest('@user/GET_CONTACT_REQUEST', getUserContact),
  takeLatest('@user/UPDATE_CONTACT_REQUEST', updateUserContact),
  takeLatest('@user/LOGIN_ADMIN_REQUEST', LoginAdmin),
]);
