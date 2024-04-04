export function createCurriculumRequest(token, curriculum) {
  return {
    type: '@user/CREATE_CURRICULUM_REQUEST',
    data: { token, curriculum },
  };
}
export function createCurriculumSuccess(data) {
  return {
    type: '@user/CREATE_CURRICULUM_SUCCESS',
    data,
  };
}
export function createCurriculumFailure(data) {
  return {
    type: '@user/CREATE_CURRICULUM_FAILURE',
    data,
  };
}

export function updateCurriculumRequest(token, id, curriculum) {
  return {
    type: '@user/UPDATE_CURRICULUM_REQUEST',
    data: { token, id, curriculum },
  };
}
export function updateCurriculumSuccess(data) {
  return {
    type: '@user/UPDATE_CURRICULUM_SUCCESS',
    data,
  };
}
export function updateCurriculumFailure(data) {
  return {
    type: '@user/UPDATE_CURRICULUM_FAILURE',
    data,
  };
}

export function getCurriculumRequest(token, id) {
  return {
    type: '@user/GET_CURRICULUM_REQUEST',
    data: { token, id },
  };
}
export function getCurriculumSuccess(data) {
  return {
    type: '@user/GET_CURRICULUM_SUCCESS',
    data,
  };
}
