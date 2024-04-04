import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createCurriculumSuccess,
  createCurriculumFailure,
  updateCurriculumSuccess,
  updateCurriculumFailure,
  getCurriculumSuccess,
} from './actions';

export function* createCurriculum({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/curriculo', data.curriculum, {
      headers: headerParams,
    });
    toast.success('Dados cadastrados');
    yield all([put(createCurriculumSuccess(response.data))]);
  } catch (error) {
    yield put(createCurriculumFailure(error));
  }
}

export function* getCurriculum({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/curriculo/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getCurriculumSuccess(response.data))]);
  } catch (error) {
    yield put(createCurriculumFailure(error));
  }
}

export function* updateCurriculum({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/curriculo/${data.id}`,
      data.curriculum,
      {
        headers: headerParams,
      }
    );
    toast.success('Dados atualizados!');

    yield all([put(updateCurriculumSuccess(response.data))]);
  } catch (error) {
    yield put(updateCurriculumFailure(error));
  }
}

export default all([
  takeLatest('@user/CREATE_CURRICULUM_REQUEST', createCurriculum),
  takeLatest('@user/UPDATE_CURRICULUM_REQUEST', updateCurriculum),
  takeLatest('@user/GET_CURRICULUM_REQUEST', getCurriculum),
]);
