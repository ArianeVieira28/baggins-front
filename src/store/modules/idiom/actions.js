export function createIdiomRequest(token, idioma) {
  return {
    type: '@user/CREATE_IDIOM_REQUEST',
    data: { token, idioma },
  };
}
export function createIdiomSuccess(data) {
  return {
    type: '@user/CREATE_IDIOM_SUCCESS',
    data,
  };
}
export function createIdiomFailure(data) {
  return {
    type: '@user/CREATE_IDIOM_FAILURE',
    data,
  };
}

export function getUserIdiomRequest(token, id) {
  return {
    type: '@user/GET_IDIOM_REQUEST',
    data: { token, id },
  };
}
export function getUserIdiomSuccess(data) {
  return {
    type: '@user/GET_IDIOM_SUCCESS',
    data,
  };
}
export function getUserIdiomFailure(data) {
  return {
    type: '@user/GET_IDIOM_FAILURE',
    data,
  };
}

export function getAllIdiomRequest(token) {
  return {
    type: '@user/GET_ALLIDIOM_REQUEST',
    data: { token },
  };
}
export function getAllIdiomSuccess(data) {
  return {
    type: '@user/GET_ALLIDIOM_SUCCESS',
    data,
  };
}

export function getAllProfRequest(token) {
  return {
    type: '@user/GET_ALLPROF_REQUEST',
    data: { token },
  };
}
export function getAllProfSuccess(data) {
  return {
    type: '@user/GET_ALLPROF_SUCCESS',
    data,
  };
}

export function updateIdiomRequest(token, idPessoa, idIdioma, idioma) {
  return {
    type: '@user/UPDATE_IDIOM_REQUEST',
    data: { token, idPessoa, idIdioma, idioma },
  };
}
export function updateIdiomSuccess(idioma) {
  return {
    type: '@user/UPDATE_IDIOM_SUCCESS',
    idioma,
  };
}
export function updateIdiomFailure(data) {
  return {
    type: '@user/UPDATE_IDIOM_FAILURE',
    data,
  };
}

export function deleteIdiomRequest(token, idIdioma, idPessoa) {
  return {
    type: '@user/DELETE_IDIOM_REQUEST',
    data: { token, idIdioma, idPessoa },
  };
}
export function deleteIdiomSuccess(idioma) {
  return {
    type: '@user/DELETE_IDIOM_SUCCESS',
    idioma,
  };
}
export function deleteIdiomFailure(data) {
  return {
    type: '@user/DELETE_IDIOM_FAILURE',
    data,
  };
}
