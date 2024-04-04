export function createHostRequest(token, host) {
  return {
    type: '@user/CREATE_HOST_REQUEST',
    data: { token, host },
  };
}
export function createHostSuccess(data) {
  return {
    type: '@user/CREATE_HOST_SUCCESS',
    data,
  };
}
export function createHostFailure(data) {
  return {
    type: '@user/CREATE_HOST_FAILURE',
    data,
  };
}

export function createHostAddressRequest(token, host) {
  return {
    type: '@user/CREATE_HOST_ADDRESS_REQUEST',
    data: { token, host },
  };
}
export function createHostAddressSuccess(data) {
  return {
    type: '@user/CREATE_HOST_ADDRESS_SUCCESS',
    data,
  };
}
export function createHostAdressFailure(data) {
  return {
    type: '@user/CREATE_HOST_ADDRESS_FAILURE',
    data,
  };
}

export function getTypeCompanyRequest(token) {
  return {
    type: '@user/GET_TYPE_REQUEST',
    data: { token },
  };
}
export function getTypeCompanySuccess(typeList) {
  return {
    type: '@user/GET_TYPE_SUCCESS',
    typeList,
  };
}
export function getTypeCompanyFailure(typeList) {
  return {
    type: '@user/GET_TYPE_FAILURE',
    typeList,
  };
}
export function getHostRequest(token, id) {
  return {
    type: '@user/GET_HOST_REQUEST',
    data: { token, id },
  };
}
export function getHostSuccess(host) {
  return {
    type: '@user/GET_HOST_SUCCESS',
    host,
  };
}
export function getHostFailure(data) {
  return {
    type: '@user/GET_HOST_FAILURE',
    data,
  };
}

export function getHostsRequest(token) {
  return {
    type: '@user/GET_HOSTS_REQUEST',
    data: { token },
  };
}
export function getHostsSuccess(host) {
  return {
    type: '@user/GET_HOSTS_SUCCESS',
    host,
  };
}
export function getHostsFailure(data) {
  return {
    type: '@user/GET_HOSTS_FAILURE',
    data,
  };
}

export function getHostDetailsRequest(token, id) {
  return {
    type: '@user/GET_HOST_DETAILS_REQUEST',
    data: { token, id },
  };
}
export function getHostDetailsSuccess(host) {
  return {
    type: '@user/GET_HOST_DETAILS_SUCCESS',
    host,
  };
}
export function getHostDetailsFailure(data) {
  return {
    type: '@user/GET_HOST_DETAILS_FAILURE',
    data,
  };
}

export function aprovarAnfitriaoRequest(token, id, anfitriao) {
  return {
    type: '@user/APPROVE_HOST_REQUEST',
    data: { token, id, anfitriao },
  };
}
export function aprovarAnfitriaoSuccess(id) {
  return {
    type: '@user/APPROVE_HOST_SUCCESS',
    id,
  };
}
export function aprovarAnfitriaoFailure(data) {
  return {
    type: '@user/APPROVE_HOST_FAILURE',
    data,
  };
}

// export function setPais(pais) {
//   return {
//     type: '@user/SET_PAIS',
//     pais,
//   };
// }

// export function setEstado(estado) {
//   return {
//     type: '@user/SET_ESTADO',
//     estado,
//   };
// }

// export function setCidade(cidade) {
//   return {
//     type: '@user/SET_CIDADE',
//     cidade,
//   };
// }

// export function setComplemento(complemento) {
//   return {
//     type: '@user/SET_COMPLEMENTO',
//     complemento,
//   };
// }
// export function setEndereco(endereco) {
//   return {
//     type: '@user/SET_ENDERECO',
//     endereco,
//   };
// }
// export function setNomeEmpresa(nomeEmpresa) {
//   return {
//     type: '@user/SET_NOMEEMPRESA',
//     nomeEmpresa,
//   };
// }
// export function setEmpresa(data) {
//   return {
//     type: '@user/SET_EMPRESA',
//     data,
//   };
// }
