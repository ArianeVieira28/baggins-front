import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  uploadPhotoSuccess,
  uploadPhotoFailure,
  getPhotoSuccess,
  getPhotoFailure,
} from './actions';

export function* uploadPhoto({ data }) {
  const photo = new FormData();
  photo.append('file', data.photo);

  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
      Accept: 'multipart/form-data',
    };
    const response = yield call(api.post, '/files', photo, {
      headers: headerParams,
    });
    toast.success('Foto atualizada!');
    yield all([put(uploadPhotoSuccess(response.data))]);
  } catch (error) {
    yield put(uploadPhotoFailure(error));
  }
}
export function* getPhoto({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
      Accept: 'multipart/form-data',
    };
    const response = yield call(api.get, `/avatar/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getPhotoSuccess(response.data))]);
  } catch (error) {
    yield put(getPhotoFailure(error));
  }
}
export default all([
  takeLatest('@user/UPLOAD_PHOTO_REQUEST', uploadPhoto),
  takeLatest('@user/GET_PHOTO_REQUEST', getPhoto),
]);
