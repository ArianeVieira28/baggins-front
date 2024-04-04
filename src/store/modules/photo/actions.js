export function uploadPhotoRequest(token, photo) {
  return {
    type: '@user/UPLOAD_PHOTO_REQUEST',
    data: { token, photo },
  };
}
export function uploadPhotoSuccess(data) {
  return {
    type: '@user/UPLOAD_PHOTO_SUCCESS',
    data,
  };
}
export function uploadPhotoFailure(data) {
  return {
    type: '@user/UPLOAD_PHOTO_FAILURE',
    data,
  };
}
export function getPhotoRequest(token, id) {
  return {
    type: '@user/GET_PHOTO_REQUEST',
    data: { token, id },
  };
}
export function getPhotoSuccess(data) {
  return {
    type: '@user/GET_PHOTO_SUCCESS',
    data,
  };
}
export function getPhotoFailure(data) {
  return {
    type: '@user/GET_PHOTO_FAILURE',
    data,
  };
}
