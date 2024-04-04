export function getGoogleAuthRequest() {
  return {
    type: '@user/GET_GOOGLE_REQUEST',
  };
}
export function getGoogleAuthSuccess(data) {
  return {
    type: '@user/GET_GOOGLE_SUCCESS',
    data,
  };
}
export function getGoogleAuthFailure(data) {
  return {
    type: '@user/GET_GOOGLE_FAILURE',
    data,
  };
}
