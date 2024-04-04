import produce from 'immer';

const INITIAL_STATE = {
  oportunidade: {
    ativa: 0,
    cidade: '',
    descricao: '',
    disponibilidadeFinal: new Date(),
    disponibilidadeInicio: new Date(),
    habilidades: [],
    horasSemanais: '',
    id: '',
    idAnfitriao: '',
    idPessoa: '',
    mediaAvaliacao: null,
    nome: '',
    ofertas: [],
    requisitos: '',
    titulo: '',
    bannerImage: '',
    images: '',
  },
  listAds: [],
  Ads: [],
  activeTab: 1,
  edit: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CHANGE_TAB':
      return produce(state, draft => {
        draft.activeTab = action.data;
        if (state.activeTab === 2) {
          draft.edit = false;
          draft.oportunidade = {
            ativa: 0,
            cidade: '',
            descricao: '',
            disponibilidadeFinal: new Date(),
            disponibilidadeInicio: new Date(),
            habilidades: [],
            horasSemanais: '',
            id: '',
            idAnfitriao: '',
            idPessoa: '',
            mediaAvaliacao: null,
            nome: '',
            ofertas: [],
            requisitos: '',
            titulo: '',
          };
        }
      });
    case '@user/CREATE_ADS_SUCCESS':
      return produce(state, draft => {
        draft.listAds.push(action.data);
        draft.Ads.push(action.data);
      });
    case '@user/CREATE_OFERTA_SUCCESS':
      return produce(state, draft => {
        // draft.oferta = action.data;
      });
    case '@user/CREATE_REQ_SUCCESS':
      return produce(state, draft => {
        // draft.requisito = action.data;
      });
    case '@user/GET_ADS_SUCCESS':
      return produce(state, draft => {
        draft.listAds = action.data;
      });
    case '@user/GET_ADS_BYID_SUCCESS':
      return produce(state, draft => {
        draft.listAds = action.data;
      });
    case '@user/GET_ADS_BYHOST_SUCCESS':
      return produce(state, draft => {
        draft.Ads = action.data;
      });
    case '@user/DELETE_ADS_SUCCESS':
      return produce(state, draft => {
        draft.listAds = draft.listAds.filter(x => x.id !== action.payload.id);
        draft.Ads = draft.Ads.filter(x => x.id !== action.payload.id);
      });
    case '@user/GET_ADS_BYPESSOA_SUCCESS':
      return produce(state, draft => {
        draft.listAds = action.data;
      });
    case '@user/DISABLE_ADS_SUCCESS':
      return produce(state, draft => {
        const index = draft.listAds.findIndex(x => x.id === action.data.id);
        draft.listAds[index].ativa = action.data.ativa;
      });
    case '@user/EDIT_REDIRECT_ADS_SUCCESS':
      return produce(state, draft => {
        const index = draft.listAds.findIndex(x => x.id === action.data[0].id);
        draft.listAds[index].ativa = action.data[0].ativa;
        draft.edit = true;
        [draft.oportunidade] = action.data;
      });
    case '@user/EDIT_ADS_SUCCESS':
      return produce(state, draft => {
        const index = draft.listAds.findIndex(x => x.id === action.data.id);
        draft.listAds[index].titulo = action.data.oportunidade.titulo;
        draft.listAds[index].descricao = action.data.oportunidade.descricao;
        draft.Ads[index].titulo = action.data.oportunidade.titulo;
        draft.Ads[index].descricao = action.data.oportunidade.descricao;
        draft.edit = false;
        draft.oportunidade = {
          ativa: 0,
          cidade: '',
          descricao: '',
          disponibilidadeFinal: new Date(),
          disponibilidadeInicio: new Date(),
          habilidades: [],
          horasSemanais: '',
          id: '',
          idAnfitriao: '',
          idPessoa: '',
          mediaAvaliacao: null,
          nome: '',
          ofertas: [],
          requisitos: '',
          titulo: '',
        };
      });
    // case '@user/UPLOAD_BANNER':
    //   return produce(state, draft => {
    //     draft.oportunidade.bannerImage = state.oportunidade.bannerImage.concat(
    //       action.data
    //     );
    //     draft.oportunidade.bannerImage = action.data;
    //   });
    // case '@user/UPLOAD_IMAGE':
    //   return produce(state, draft => {
    //     draft.oportunidade.images = state.oportunidade.images.concat(
    //       action.data
    //     );
    //   });

    default:
      return state;
  }
}
