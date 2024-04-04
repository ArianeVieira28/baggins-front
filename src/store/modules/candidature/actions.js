export function createCandidatureRequest(token, candidatura) {
  return {
    type: '@user/CREATE_CANDIDATURE_REQUEST',
    data: { token, candidatura },
  };
}
export function createCandidatureSuccess(data) {
  return {
    type: '@user/CREATE_CANDIDATURE_SUCCESS',
    data,
  };
}
export function createCandidatureFailure(data) {
  return {
    type: '@user/CREATE_CANDIDATURE_FAILURE',
    data,
  };
}

export function getCandidatureRequest(token, idOportunidade, idPessoa) {
  return {
    type: '@user/GET_CANDIDATURE_REQUEST',
    data: { token, idOportunidade, idPessoa },
  };
}
export function getCandidatureSuccess(data) {
  return {
    type: '@user/GET_CANDIDATURE_SUCCESS',
    data,
  };
}

export function getuserCandidatureRequest(token, idPessoa) {
  return {
    type: '@user/GET_USER_CANDIDATURE_REQUEST',
    data: { token, idPessoa },
  };
}
export function getUserCandidatureSuccess(data) {
  return {
    type: '@user/GET_USER_CANDIDATURE_SUCCESS',
    data,
  };
}

export function updateCandidatureRequest(
  token,
  idPessoa,
  idOportunidade,
  candidatura
) {
  return {
    type: '@user/UPDATE_CANDIDATURE_REQUEST',
    data: { token, idPessoa, idOportunidade, candidatura },
  };
}
export function updateCandidatureSuccess(data) {
  return {
    type: '@user/UPDATE_CANDIDATURE_SUCCESS',
    data,
  };
}
export function updateCandidatureFailure(data) {
  return {
    type: '@user/UPDATE_CANDIDATURE_FAILURE',
    data,
  };
}

export function deleteCandidatureRequest(token, idOportunidade, idPessoa) {
  return {
    type: '@user/DELETE_CANDIDATURE_REQUEST',
    data: { token, idOportunidade, idPessoa },
  };
}
export function deleteCandidatureSuccess(data) {
  return {
    type: '@user/DELETE_CANDIDATURE_SUCCESS',
    data,
  };
}
export function deleteCandidatureFailure(data) {
  return {
    type: '@user/DELETE_CANDIDATURE_FAILURE',
    data,
  };
}

export function getUsersChatRequest(token, id) {
  return {
    type: '@user/GET_USERS_CHAT_REQUEST',
    data: { token, id },
  };
}
export function getUsersChatSuccess(data) {
  return {
    type: '@user/GET_USERS_CHAT_SUCCESS',
    data,
  };
}
export function getUsersChatFailure(data) {
  return {
    type: '@user/GET_USERS_CHAT_FAILURE',
    data,
  };
}

export function getHostsChatRequest(token, id) {
  return {
    type: '@user/GET_HOSTS_REQUEST',
    data: { token, id },
  };
}
export function getHostsChatSuccess(data) {
  return {
    type: '@user/GET_HOSTS_CHAT_SUCCESS',
    data,
  };
}
export function getHostsChatFailure(data) {
  return {
    type: '@user/GET_HOSTS_FAILURE',
    data,
  };
}
