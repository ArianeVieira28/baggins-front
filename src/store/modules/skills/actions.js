export function getSkillsRequest(token) {
  return {
    type: '@user/GET_SKILLS_REQUEST',
    data: { token },
  };
}
export function getSkillsSuccess(data) {
  return {
    type: '@user/GET_SKILLS_SUCCESS',
    data,
  };
}
export function getSkillsFailure(data) {
  return {
    type: '@user/GET_SKILLS_FAILURE',
    data,
  };
}

export function createUserSkillsRequest(token, skills) {
  return {
    type: '@user/CREATE_SKILLS_REQUEST',
    data: { token, skills },
  };
}
export function createUserSkillsSuccess(data) {
  return {
    type: '@user/CREATE_SKILLS_SUCCESS',
    data,
  };
}
export function createUserSkillsFailure(data) {
  return {
    type: '@user/CREATE_SKILLS_FAILURE',
    data,
  };
}

export function updateUserSkillsRequest(token, idHabilidade, idPessoa, rate) {
  return {
    type: '@user/UPDATE_SKILLS_REQUEST',
    data: { token, idHabilidade, idPessoa, rate },
  };
}
export function updateUserSkillsSuccess(data) {
  return {
    type: '@user/UPDATE_SKILLS_SUCCESS',
    data,
  };
}
export function updateUserSkillsFailure(data) {
  return {
    type: '@user/UPDATE_SKILLS_FAILURE',
    data,
  };
}

export function getUserSkillsRequest(token, id) {
  return {
    type: '@user/GET_USER_SKILLS_REQUEST',
    data: { token, id },
  };
}
export function getUserSkillsSuccess(data) {
  return {
    type: '@user/GET_USER_SKILLS_SUCCESS',
    data,
  };
}
