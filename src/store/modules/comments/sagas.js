import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createCommentSuccess,
  createCommentFailure,
  getCommentsSuccess,
  getCommentsFailure,
} from './actions';

export function* createComment({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.post,
      '/oportunidadeavaliacao',
      data.comment,
      {
        headers: headerParams,
      }
    );
    yield all([put(createCommentSuccess(response.data))]);
    toast.success('Comentário cadastrado com sucesso!');
  } catch (error) {
    yield put(createCommentFailure(error));
    toast.success('Você já avaliou esta vaga!');
  }
}
export function* getComments({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oportunidadeavaliacao/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getCommentsSuccess(response.data))]);
  } catch (error) {
    yield put(getCommentsFailure(error));
  }
}
export default all([
  takeLatest('@user/CREATE_COMMENT_REQUEST', createComment),
  takeLatest('@user/GET_COMMENT_REQUEST', getComments),
]);
