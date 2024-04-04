import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createHostAdsSuccess,
  createHostAdsFailure,
  createRequisitoRequest,
  createRequisitoSuccess,
  createRequisitoFailure,
  createOfertaRequest,
  createOfertaSuccess,
  createOfertaFailure,
  getAdsSuccess,
  getAdsByIdSuccess,
  getAdsByHostSuccess,
  deleteAdsSuccess,
  deleteAdsFailure,
  getAdsByIdPessoaSuccess,
  getAdsFailure,
  getAdsByIdFailure,
  getAdsByHostFailure,
  getAdsByIdPessoaFailure,
  disableAdsSuccess,
  disableAdsFailure,
  editRedirectAdsSuccess,
  editRedirectAdsFailure,
  changeTab,
  editAdsSuccess,
  editAdsFailure,
  deleteOfertaRequest,
  // deleteOfertaSuccess,
  deleteOfertaFailure,
  deleteRequisitoRequest,
  // deleteRequisitoSuccess,
  deleteRequisitoFailure,
} from './actions';

export function* createHostAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.post, '/oportunidade', data.oportunidade, {
      headers: headerParams,
    });
    toast.success('Vaga cadastrada com sucesso!');

    yield all([
      put(createHostAdsSuccess(response.data)),
      put(createOfertaRequest(data.token, response.data, data.listaOfertas)),
      put(
        createRequisitoRequest(data.token, response.data, data.listaRequisitos)
      ),
    ]);
  } catch (error) {
    yield put(createHostAdsFailure(error));
  }
}
export function* createRequisito({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    yield all(
      data.requisitos.map(element =>
        call(
          api.post,
          '/requisito',
          { idOportunidade: data.oportunidade.id, idHabilidade: element },
          {
            headers: headerParams,
          }
        )
      )
    );

    yield all([put(createRequisitoSuccess())]);
  } catch (error) {
    yield put(createRequisitoFailure(error));
  }
}
export function* createOferta({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    yield all(
      data.ofertas.map(element =>
        call(
          api.post,
          '/oportunidadeoferta',
          { idOportunidade: data.oportunidade.id, idOferta: element },
          {
            headers: headerParams,
          }
        )
      )
    );

    yield all([put(createOfertaSuccess())]);
  } catch (error) {
    yield put(createOfertaFailure(error));
  }
}

export function* getAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oportunidades/${data.id}`, {
      headers: headerParams,
    });
    console.log(response.data);
    yield all([put(getAdsSuccess(response.data))]);
  } catch (error) {
    yield put(getAdsFailure(error));
  }
}
export function* getAdsById({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oroportunidade/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getAdsByIdSuccess(response.data))]);
  } catch (error) {
    yield put(getAdsByIdFailure(error));
  }
}
export function* getAdsByHost({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oportunidadeanfitriao/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getAdsByHostSuccess(response.data))]);
  } catch (error) {
    yield put(getAdsByHostFailure(error));
  }
}
export function* deleteAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.delete, `/oportunidade/${data.id}`, {
      headers: headerParams,
    });
    toast.success('Oportunidade deletada');
    yield all([put(deleteAdsSuccess(response.data, data.id))]);
  } catch (error) {
    yield put(deleteAdsFailure(error));
  }
}
export function* getAdsByIdPessoa({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oportunidadesbyid/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(getAdsByIdPessoaSuccess(response.data))]);
  } catch (error) {
    yield put(getAdsByIdPessoaFailure(error));
  }
}
export function* disableAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(
      api.put,
      `/desativarvaga/${data.id}`,
      data.oportunidade,
      {
        headers: headerParams,
      }
    );
    toast.success('Vaga atualizada com sucesso!');
    yield all([put(disableAdsSuccess(response.data))]);
  } catch (error) {
    yield put(disableAdsFailure(error));
  }
}
export function* editRedirectAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };
    const response = yield call(api.get, `/oroportunidade/${data.id}`, {
      headers: headerParams,
    });
    yield all([put(editRedirectAdsSuccess(response.data)), put(changeTab(2))]);
  } catch (error) {
    yield put(editRedirectAdsFailure(error));
  }
}

export function* deleteRequisito({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    const habilidadesHelper = data.oportunidade.habilidades.map(h => h.id);
    yield all(
      habilidadesHelper.map(element =>
        call(api.delete, `/requisito/${data.oportunidade.id}/${element}`, {
          headers: headerParams,
        })
      )
    );
    yield all([
      put(
        createRequisitoRequest(
          data.token,
          data.oportunidade,
          data.newRequisitos
        )
      ),
      put(createRequisitoSuccess()),
    ]);
  } catch (error) {
    yield all([put(deleteRequisitoFailure())]);
  }
}

export function* deleteOferta({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    const ofertasHelper = data.oportunidade.ofertas.map(o => o.id);
    yield all(
      ofertasHelper.map(element =>
        call(
          api.delete,
          `/oportunidadeoferta/${data.oportunidade.id}/${element}`,
          {
            headers: headerParams,
          }
        )
      )
    );
    yield all([
      put(createOfertaRequest(data.token, data.oportunidade, data.newOfertas)),
      put(createOfertaSuccess()),
    ]);
  } catch (error) {
    yield all([put(deleteOfertaFailure())]);
  }
}

export function* editHostAds({ data }) {
  try {
    const headerParams = {
      Authorization: `Bearer ${data.token}`,
    };

    yield call(
      api.put,
      `/oportunidade/${data.oldOportunidade.id}`,
      data.oportunidade,
      {
        headers: headerParams,
      }
    );

    toast.success('Vaga editada com sucesso!');
    yield all([
      put(editAdsSuccess(data.oportunidade, data.oldOportunidade.id)),
      put(
        deleteRequisitoRequest(
          data.token,
          data.oldOportunidade,
          data.oldOportunidade.habilidades,
          data.listaRequisitos
        )
      ),
      put(
        deleteOfertaRequest(
          data.token,
          data.oldOportunidade,
          data.oldOportunidade.ofertas,
          data.listaOfertas
        )
      ),
    ]);
  } catch (error) {
    yield put(editAdsFailure(error));
  }
}
// export function* uploadBannerImage(data) {

//   yield put(editAdsFailure(error));

// }

export default all([
  takeLatest('@user/CREATE_ADS_REQUEST', createHostAds),
  takeLatest('@user/CREATE_OFERTA_REQUEST', createOferta),
  takeLatest('@user/CREATE_REQ_REQUEST', createRequisito),
  takeLatest('@user/GET_ADS_REQUEST', getAds),
  takeLatest('@user/GET_ADS_BYID_REQUEST', getAdsById),
  takeLatest('@user/GET_ADS_BYHOST_REQUEST', getAdsByHost),
  takeLatest('@user/DELETE_ADS_REQUEST', deleteAds),
  takeLatest('@user/GET_ADS_BYPESSOA_REQUEST', getAdsByIdPessoa),
  takeLatest('@user/DISABLE_ADS_REQUEST', disableAds),
  takeLatest('@user/EDIT_REDIRECT_ADS_REQUEST', editRedirectAds),
  takeLatest('@user/EDIT_ADS_REQUEST', editHostAds),
  takeLatest('@user/DELETE_REQ_REQUEST', deleteRequisito),
  takeLatest('@user/DELETE_OFERTA_REQUEST', deleteOferta),
]);
