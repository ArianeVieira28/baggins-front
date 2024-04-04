import { call, put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

import api from '../../../services/api';

import { getGoogleAuthSuccess, getGoogleAuthFailure } from './actions';

export function* getGoogleAuth() {
  try {
    const headerParams = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, Content-Type,  X-Requested-With, Accept',
    };
    const response = yield call(api.get, '/google/login', {
      headers: headerParams,
    });
    yield all([put(getGoogleAuthSuccess(response.data))]);
    // console.log(response.data);
  } catch (error) {
    yield put(getGoogleAuthFailure(error));
  }
}
export default all([takeLatest('@user/GET_GOOGLE_REQUEST', getGoogleAuth)]);
