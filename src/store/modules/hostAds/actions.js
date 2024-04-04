export function createHostAdsRequest(
  token,
  oportunidade,
  listaOfertas,
  listaRequisitos
) {
  return {
    type: '@user/CREATE_ADS_REQUEST',
    data: { token, oportunidade, listaOfertas, listaRequisitos },
  };
}
export function createHostAdsSuccess(data) {
  return {
    type: '@user/CREATE_ADS_SUCCESS',
    data,
  };
}
export function createHostAdsFailure(data) {
  return {
    type: '@user/CREATE_ADS_FAILURE',
    data,
  };
}

export function createOfertaRequest(token, oportunidade, ofertas) {
  return {
    type: '@user/CREATE_OFERTA_REQUEST',
    data: { token, oportunidade, ofertas },
  };
}
export function createOfertaSuccess(data) {
  return {
    type: '@user/CREATE_OFERTA_SUCCESS',
    data,
  };
}
export function createOfertaFailure(data) {
  return {
    type: '@user/CREATE_OFERTA_FAILURE',
    data,
  };
}

export function createRequisitoRequest(token, oportunidade, requisitos) {
  return {
    type: '@user/CREATE_REQ_REQUEST',
    data: { token, oportunidade, requisitos },
  };
}
export function createRequisitoSuccess(data) {
  return {
    type: '@user/CREATE_REQ_SUCCESS',
    data,
  };
}
export function createRequisitoFailure(data) {
  return {
    type: '@user/CREATE_REQ_FAILURE',
    data,
  };
}

export function getAdsRequest(token, id) {
  return {
    type: '@user/GET_ADS_REQUEST',
    data: { token, id },
  };
}
export function getAdsSuccess(data) {
  return {
    type: '@user/GET_ADS_SUCCESS',
    data,
  };
}
export function getAdsFailure(data) {
  return {
    type: '@user/GET_ADS_FAILURE',
    data,
  };
}

export function getAdsByIdRequest(token, id) {
  return {
    type: '@user/GET_ADS_BYID_REQUEST',
    data: { token, id },
  };
}
export function getAdsByIdSuccess(data) {
  return {
    type: '@user/GET_ADS_BYID_SUCCESS',
    data,
  };
}
export function getAdsByIdFailure(data) {
  return {
    type: '@user/GET_ADS_BYID_FAILURE',
    data,
  };
}

export function getAdsByHostRequest(token, id) {
  return {
    type: '@user/GET_ADS_BYHOST_REQUEST',
    data: { token, id },
  };
}
export function getAdsByHostSuccess(data) {
  return {
    type: '@user/GET_ADS_BYHOST_SUCCESS',
    data,
  };
}
export function getAdsByHostFailure(data) {
  return {
    type: '@user/GET_ADS_BYHOST_FAILURE',
    data,
  };
}

export function deleteAdsRequest(token, id) {
  return {
    type: '@user/DELETE_ADS_REQUEST',
    data: { token, id },
  };
}
export function deleteAdsSuccess(data, id) {
  return {
    type: '@user/DELETE_ADS_SUCCESS',
    payload: { data, id },
  };
}
export function deleteAdsFailure(data) {
  return {
    type: '@user/DELETE_ADS_FAILURE',
    data,
  };
}

export function getAdsByIdPessoaRequest(token, id) {
  return {
    type: '@user/GET_ADS_BYPESSOA_REQUEST',
    data: { token, id },
  };
}
export function getAdsByIdPessoaSuccess(data) {
  return {
    type: '@user/GET_ADS_BYPESSOA_SUCCESS',
    data,
  };
}
export function getAdsByIdPessoaFailure(data) {
  return {
    type: '@user/GET_ADS_BYPESSOA_FAILURE',
    data,
  };
}

export function disableAdsRequest(token, id, oportunidade) {
  return {
    type: '@user/DISABLE_ADS_REQUEST',
    data: { token, id, oportunidade },
  };
}
export function disableAdsSuccess(data) {
  return {
    type: '@user/DISABLE_ADS_SUCCESS',
    data,
  };
}
export function disableAdsFailure(data) {
  return {
    type: '@user/DISABLE_ADS_FAILURE',
    data,
  };
}

export function changeTab(data) {
  return {
    type: '@user/CHANGE_TAB',
    data,
  };
}

export function editRedirectAdsRequest(token, id) {
  return {
    type: '@user/EDIT_REDIRECT_ADS_REQUEST',
    data: { token, id },
  };
}
export function editRedirectAdsSuccess(data) {
  return {
    type: '@user/EDIT_REDIRECT_ADS_SUCCESS',
    data,
  };
}
export function editRedirectAdsFailure(data) {
  return {
    type: '@user/EDIT_REDIRECT_ADS_FAILURE',
    data,
  };
}

export function editAdsRequest(
  token,
  oldOportunidade,
  oportunidade,
  listaOfertas,
  listaRequisitos
) {
  return {
    type: '@user/EDIT_ADS_REQUEST',
    data: {
      token,
      oldOportunidade,
      oportunidade,
      listaOfertas,
      listaRequisitos,
    },
  };
}
export function editAdsSuccess(oportunidade, id) {
  return {
    type: '@user/EDIT_ADS_SUCCESS',
    data: { oportunidade, id },
  };
}
export function editAdsFailure(data) {
  return {
    type: '@user/EDIT_ADS_FAILURE',
    data,
  };
}

export function deleteOfertaRequest(token, oportunidade, ofertas, newOfertas) {
  return {
    type: '@user/DELETE_OFERTA_REQUEST',
    data: { token, oportunidade, ofertas, newOfertas },
  };
}
export function deleteOfertaSuccess(data) {
  return {
    type: '@user/DELETE_OFERTA_SUCCESS',
    data,
  };
}
export function deleteOfertaFailure(data) {
  return {
    type: '@user/DELETE_OFERTA_FAILURE',
    data,
  };
}

export function deleteRequisitoRequest(
  token,
  oportunidade,
  requisitos,
  newRequisitos
) {
  return {
    type: '@user/DELETE_REQ_REQUEST',
    data: { token, oportunidade, requisitos, newRequisitos },
  };
}
export function deleteRequisitoSuccess(data) {
  return {
    type: '@user/DELETE_REQ_SUCCESS',
    data,
  };
}
export function deleteRequisitoFailure(data) {
  return {
    type: '@user/DELETE_REQ_FAILURE',
    data,
  };
}

export function uploadBannerImage(data) {
  return {
    type: '@user/UPLOAD_BANNER',
    data,
  };
}

export function uploadVagaImage(data) {
  return {
    type: '@user/UPLOAD_IMAGE',
    data,
  };
}
