export function getAllAdsRequest(token) {
  return {
    type: '@user/GET_ALL_ADS_REQUEST',
    data: { token },
  };
}
export function getAllAdsSuccess(data) {
  return {
    type: '@user/GET_ALL_ADS_SUCCESS',
    data,
  };
}
export function getAllAdsFailure(data) {
  return {
    type: '@user/GET_ALL_ADS_FAILURE',
    data,
  };
}
