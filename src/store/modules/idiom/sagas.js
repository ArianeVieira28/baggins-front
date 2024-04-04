import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createIdiomSuccess,
  createIdiomFailure,
  getUserIdiomSuccess,
  getUserIdiomFailure,
  updateIdiomSuccess,
  updateIdiomFailure,
  getAllIdiomSuccess,
  getAllProfSuccess,
  deleteIdiomSuccess,
  deleteIdiomFailure,
} from './actions';

export function* createIdiom({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/pessoaidioma', data.idioma, {
      headers: headerParams,
    });
    toast.success('Idioma cadastrado');
    yield all([put(createIdiomSuccess(response.data))]);
  } catch (error) {
    yield put(createIdiomFailure(error));
  }
}
export function* getIdiom({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/pessoaidioma/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getUserIdiomSuccess(response.data))]);
  } catch (error) {
    yield put(getUserIdiomFailure(error));
  }
}

export function* getAllIdiom({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/idiomas`, {
      headers: headerParams,
    });
    yield all([put(getAllIdiomSuccess(response.data))]);
  } catch (error) {
    yield put(getUserIdiomFailure(error));
  }
}

export function* getAllProf({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/idiomaproficiencia`, {
      headers: headerParams,
    });
    yield all([put(getAllProfSuccess(response.data))]);
  } catch (error) {
    yield put(getUserIdiomFailure(error));
  }
}

export function* updateIdiom({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/pessoaidioma/${data.idIdioma}/${data.idPessoa}`,
      data.idioma,
      {
        headers: headerParams,
      }
    );
    yield all([put(updateIdiomSuccess(response.data))]);
  } catch (error) {
    yield put(updateIdiomFailure(error));
  }
}

export function* deleteIdiom({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.delete,
      `/pessoaidioma/${data.idIdioma}/${data.idPessoa}`,
      {
        headers: headerParams,
      }
    );
    yield all([put(deleteIdiomSuccess(response.data))]);
    toast.success('Idioma excluído com sucesso!');
  } catch (error) {
    yield put(deleteIdiomFailure(error));
  }
}

export default all([
  takeLatest('@user/CREATE_IDIOM_REQUEST', createIdiom),
  takeLatest('@user/GET_IDIOM_REQUEST', getIdiom),
  takeLatest('@user/UPDATE_IDIOM_REQUEST', updateIdiom),
  takeLatest('@user/GET_ALLIDIOM_REQUEST', getAllIdiom),
  takeLatest('@user/GET_ALLPROF_REQUEST', getAllProf),
  takeLatest('@user/DELETE_IDIOM_REQUEST', deleteIdiom),
]);
