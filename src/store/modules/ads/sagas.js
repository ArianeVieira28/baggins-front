import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getAllAdsSuccess, getAllAdsFailure } from './actions';

export function* getAllAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, '/alloportunidades', {
      headers: headerParams,
    });
    yield all([put(getAllAdsSuccess(response.data))]);
  } catch (error) {
    yield put(getAllAdsFailure(error));
  }
}

export default all([takeLatest('@user/GET_ALL_ADS_REQUEST', getAllAds)]);
