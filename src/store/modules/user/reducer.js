import produce from 'immer';

const INITIAL_STATE = {
  user: {
    id: '',
    nome: '',
    email: '',
    senha: '',
    anfitriao: 0,
    datanasc: '',
  },
  userAddress: {
    id: '',
    cidade: '',
    estado: '',
    pais: '',
    endereco: '',
    complemento: '',
  },
  userContact: {
    id: '',
    numero: '',
  },
  loginToken: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_SUCCESS':
      return produce(state, draft => {
        draft.user = action.user;
        draft.user.senha = '';
      });
    case '@user/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.user.nome = action.data.pessoa.nome;
        draft.user.id = action.data.pessoa.id;
        draft.loginToken = action.data.token.token;
      });
    case '@user/GET_SUCCESS':
      return produce(state, draft => {
        draft.user = action.user;
      });
    case '@user/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.user = action.user;
      });
    case '@user/CREATE_ADDRESS_SUCCESS':
      return produce(state, draft => {
        draft.userAddress = action.user;
      });
    case '@user/GET_ADDRESS_SUCCESS':
      return produce(state, draft => {
        draft.userAddress = action.user;
      });
    case '@user/UPDATE_ADDRESS_SUCCESS':
      return produce(state, draft => {
        draft.userAddress = action.user;
      });
    case '@user/CREATE_CONTACT_SUCCESS':
      return produce(state, draft => {
        draft.userContact = action.user;
      });
    case '@user/GET_CONTACT_SUCCESS':
      return produce(state, draft => {
        draft.userContact = action.user;
      });
    case '@user/UPDATE_CONTACT_SUCCESS':
      return produce(state, draft => {
        draft.userContact = action.user;
      });
    case '@user/LOGIN_ADMIN_SUCCESS':
      return produce(state, draft => {
        draft.user.nome = action.data.pessoa.nome;
        draft.user.id = action.data.pessoa.id;
        draft.loginToken = action.data.token.token;
        draft.user.anfitriao = 0;
      });
    default:
      return state;
  }
}
