import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createHostSuccess,
  createHostFailure,
  createHostAddressSuccess,
  createHostAdressFailure,
  getTypeCompanySuccess,
  getTypeCompanyFailure,
  getHostSuccess,
  getHostFailure,
  getHostsSuccess,
  getHostsFailure,
  getHostDetailsSuccess,
  getHostDetailsFailure,
  aprovarAnfitriaoSuccess,
  aprovarAnfitriaoFailure,
} from './actions';

export function* createHost({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/anfitriao', data.host, {
      headers: headerParams,
    });
    if (response.data !== 'O usuário já é um anfitrião!') {
      // toast.success('Cadastro realizado com sucesso!');
      yield all([put(createHostSuccess(response.data))]);
    } else {
      toast.error('Você já enviou seus dados, aguarde ser aprovado!');
    }
  } catch (error) {
    yield put(createHostFailure(error));
  }
}

export function* createHostAddress({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/enderecoanfitriao', data.host, {
      headers: headerParams,
    });
    yield all([put(createHostAddressSuccess(response.data))]);
    toast.success('Cadastro realizado com sucesso!');
  } catch (error) {
    yield put(createHostAdressFailure(error));
  }
}

export function* getTypeCompany({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, '/tipooportunidade', {
      headers: headerParams,
    });
    yield all([put(getTypeCompanySuccess(response.data))]);
  } catch (error) {
    yield put(getTypeCompanyFailure(error));
  }
}
export function* getHost({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/tipoempresa/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getHostSuccess(response.data))]);
  } catch (error) {
    yield put(getHostFailure(error));
  }
}
export function* getHosts({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/anfitrioes`, {
      headers: headerParams,
    });
    console.log(response.data);
    yield all([put(getHostsSuccess(response.data))]);
  } catch (error) {
    yield put(getHostsFailure(error));
  }
}

export function* getHostDetails({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/hostdetails/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getHostDetailsSuccess(response.data))]);
  } catch (error) {
    yield put(getHostDetailsFailure(error));
  }
}

export function* aprovar({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    yield call(api.put, `/aprovar/${data.id}`, data.anfitriao, {
      headers: headerParams,
    });
    toast.success('Anfitrião aprovado');
    yield all([put(aprovarAnfitriaoSuccess(data.id))]);
  } catch (error) {
    yield put(aprovarAnfitriaoFailure(error));
  }
}

export default all([
  takeLatest('@user/CREATE_HOST_REQUEST', createHost),
  takeLatest('@user/CREATE_HOST_ADDRESS_REQUEST', createHostAddress),
  takeLatest('@user/GET_TYPE_REQUEST', getTypeCompany),
  takeLatest('@user/GET_HOST_REQUEST', getHost),
  takeLatest('@user/GET_HOSTS_REQUEST', getHosts),
  takeLatest('@user/GET_HOST_DETAILS_REQUEST', getHostDetails),
  takeLatest('@user/APPROVE_HOST_REQUEST', aprovar),
]);
