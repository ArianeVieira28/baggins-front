import produce from 'immer';

const INITIAL_STATE = {
  curriculum: {
    nome: '',
    id: '',
    descricao: '',
    instagram: '',
    facebook: '',
    twitter: '',
    cidade: '',
    pais: '',
    estado: '',
  },
  curriculo: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_CURRICULUM_SUCCESS':
      return produce(state, draft => {
        draft.curriculum = action.data;
      });
    case '@user/GET_CURRICULUM_SUCCESS':
      return produce(state, draft => {
        draft.curriculum = action.data;
      });
    case '@user/UPDATE_CURRICULUM_SUCCESS':
      return produce(state, draft => {
        draft.curriculo = action.data;
        state.curriculum = draft.curriculo;
      });
    default:
      return state;
  }
}
