export function createCommentRequest(token, comment) {
  return {
    type: '@user/CREATE_COMMENT_REQUEST',
    data: { token, comment },
  };
}
export function createCommentSuccess(data) {
  return {
    type: '@user/CREATE_COMMENT_SUCCESS',
    data,
  };
}
export function createCommentFailure(data) {
  return {
    type: '@user/CREATE_COMMENT_FAILURE',
    data,
  };
}
export function getCommentsRequest(token, id) {
  return {
    type: '@user/GET_COMMENT_REQUEST',
    data: { token, id },
  };
}
export function getCommentsSuccess(data) {
  return {
    type: '@user/GET_COMMENT_SUCCESS',
    data,
  };
}
export function getCommentsFailure(data) {
  return {
    type: '@user/GET_COMMENT_FAILURE',
    data,
  };
}
