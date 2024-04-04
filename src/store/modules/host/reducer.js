import produce from 'immer';

const INITIAL_STATE = {
  host: {
    id: '',
    idPessoa: '',
    cidade: '',
    estado: '',
    pais: '',
    endereco: '',
    complemento: '',
    tipoEmpresa: 0,
    nomeEmpresa: '',
  },
  anfitriao: {
    id: '',
    idPessoa: '',
    cidade: '',
    estado: '',
    pais: '',
    endereco: '',
    complemento: '',
    tipoEmpresa: 0,
    nomeEmpresa: '',
  },
  typeList: [],
  hosts: [],
  hostDetails: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_HOST_SUCCESS':
      return produce(state, draft => {
        draft.anfitriao = action.data;
        state.anfitriao.id = action.data.id;
      });
    case '@user/CREATE_HOST_ADDRESS_SUCCESS':
      return produce(state, draft => {
        draft.anfitriao = action.host;
      });
    case '@user/GET_TYPE_SUCCESS':
      return produce(state, draft => {
        draft.typeList = action.typeList;
      });
    case '@user/GET_HOST_SUCCESS':
      return produce(state, draft => {
        draft.host = action.host;
      });
    case '@user/GET_HOSTS_SUCCESS':
      return produce(state, draft => {
        draft.hosts = action.host;
      });
    case '@user/GET_HOST_DETAILS_SUCCESS':
      return produce(state, draft => {
        draft.hostDetails = action.host;
      });
    case '@user/APPROVE_HOST_SUCCESS':
      return produce(state, draft => {
        draft.hosts = state.hosts.filter(h => h.idPessoa !== action.id);
      });
    // case '@user/SET_PAIS':
    //   return produce(state, draft => {
    //     draft.host.pais = action.pais;
    //   });
    // case '@user/SET_ESTADO':
    //   return produce(state, draft => {
    //     draft.host.estado = action.estado;
    //   });
    // case '@user/SET_CIDADE':
    //   return produce(state, draft => {
    //     draft.host.cidade = action.cidade;
    //   });
    // case '@user/SET_ENDERECO':
    //   return produce(state, draft => {
    //     draft.host.endereco = action.endereco;
    //   });
    // case '@user/SET_COMPLEMENTO':
    //   return produce(state, draft => {
    //     draft.host.complemento = action.complemento;
    //   });
    // case '@user/SET_NOMEEMPRESA':
    //   return produce(state, draft => {
    //     draft.host.nomeEmpresa = action.nomeEmpresa;
    //   });
    // case '@user/SET_EMPRESA':
    //   return produce(state, draft => {
    //     draft.host.tipoEmpresa = action.data;
    //   });
    default:
      return state;
  }
}
