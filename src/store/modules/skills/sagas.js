import { call, put, all, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
  getSkillsSuccess,
  getSkillsFailure,
  createUserSkillsSuccess,
  createUserSkillsFailure,
  getUserSkillsSuccess,
  updateUserSkillsSuccess,
  updateUserSkillsFailure,
} from './actions';

export function* getSkills({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, '/habilidades', {
      headers: headerParams,
    });
    yield all([put(getSkillsSuccess(response.data))]);
  } catch (error) {
    yield put(getSkillsFailure(error));
  }
}

export function* createUserSkills({ data }) {
  console.log(data);
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/habilidadepessoa', data.skills, {
      headers: headerParams,
    });
    toast.success('Habilidade cadastrada');
    yield all([put(createUserSkillsSuccess(response.data))]);
  } catch (error) {
    yield put(createUserSkillsFailure(error));
  }
}

export function* getUserSkills({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/habilidadepessoa/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getUserSkillsSuccess(response.data))]);
  } catch (error) {
    yield put(createUserSkillsFailure(error));
  }
}

export function* updateUserSkills({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/habilidadepessoa/${data.idHabilidade}/${data.idPessoa}`,
      data.rate,
      {
        headers: headerParams,
      }
    );
    yield all([put(updateUserSkillsSuccess(response.data))]);
  } catch (error) {
    yield put(updateUserSkillsFailure(error));
  }
}

export default all([
  takeLatest('@user/GET_SKILLS_REQUEST', getSkills),
  takeLatest('@user/CREATE_SKILLS_REQUEST', createUserSkills),
  takeLatest('@user/GET_USER_SKILLS_REQUEST', getUserSkills),
  takeLatest('@user/UPDATE_SKILLS_REQUEST', updateUserSkills),
]);
