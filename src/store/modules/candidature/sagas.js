import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createCandidatureSuccess,
  createCandidatureFailure,
  getCandidatureSuccess,
  getUserCandidatureSuccess,
  updateCandidatureSuccess,
  updateCandidatureFailure,
  deleteCandidatureSuccess,
  deleteCandidatureFailure,
  getUsersChatSuccess,
  getUsersChatFailure,
  getHostsChatSuccess,
  getHostsChatFailure,
} from './actions';

export function* createCandidature({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/candidatura', data.candidatura, {
      headers: headerParams,
    });
    toast.success('Candidatura realizada com sucesso!');
    yield all([put(createCandidatureSuccess(response.data))]);
  } catch (error) {
    yield put(createCandidatureFailure(error));
    toast.error(error);
  }
}

export function* getCandidature({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.get,
      `/usercandidature/${data.idPessoa}/${data.idOportunidade}`,
      {
        headers: headerParams,
      }
    );
    yield all([put(getCandidatureSuccess(response.data))]);
  } catch (error) {
    yield put(createCandidatureFailure(error));
  }
}

export function* getUserCandidature({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.get,
      `/useroportunidades/${data.idPessoa}`,
      {
        headers: headerParams,
      }
    );
    yield all([put(getUserCandidatureSuccess(response.data))]);
  } catch (error) {
    yield put(createCandidatureFailure(error));
  }
}

export function* updateCandidature({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/candidatura/${data.idPessoa}/${data.idOportunidade}`,
      data.candidatura,
      {
        headers: headerParams,
      }
    );
    toast.success('Aprovado!');
    yield all([put(updateCandidatureSuccess(response.data))]);
  } catch (error) {
    yield put(updateCandidatureFailure(error));
  }
}

export function* deleteCandidature({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.delete,
      `/candidatura/${data.idOportunidade}/${data.idPessoa}`,
      {
        headers: headerParams,
      }
    );
    toast.success('Candidatura cancelada!');
    yield all([put(deleteCandidatureSuccess(response.data))]);
  } catch (error) {
    yield put(deleteCandidatureFailure(error));
  }
}
export function* getUsersChat({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/getuserschat/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getUsersChatSuccess(response.data))]);
  } catch (error) {
    yield put(getUsersChatFailure(error));
  }
}
export function* getAnfitrioesChat({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/gethostschat/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getHostsChatSuccess(response.data))]);
  } catch (error) {
    yield put(getHostsChatFailure(error));
  }
}
export default all([
  takeLatest('@user/CREATE_CANDIDATURE_REQUEST', createCandidature),
  takeLatest('@user/GET_CANDIDATURE_REQUEST', getCandidature),
  takeLatest('@user/GET_USER_CANDIDATURE_REQUEST', getUserCandidature),
  takeLatest('@user/UPDATE_CANDIDATURE_REQUEST', updateCandidature),
  takeLatest('@user/DELETE_CANDIDATURE_REQUEST', deleteCandidature),
  takeLatest('@user/GET_USERS_CHAT_REQUEST', getUsersChat),
  takeLatest('@user/GET_HOSTS_REQUEST', getAnfitrioesChat),
]);
