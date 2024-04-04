import produce from 'immer';

const INITIAL_STATE = {
  listIdiom: [{}],
  idiom: {},
  idiomas: [{}],
  proficiencias: [{}],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_IDIOM_SUCCESS':
      return produce(state, draft => {
        draft.idiom = action.data;
      });
    case '@user/GET_IDIOM_SUCCESS':
      return produce(state, draft => {
        draft.listIdiom = action.data;
      });
    case '@user/UPDATE_IDIOM_SUCCESS':
      return produce(state, draft => {
        draft.listIdiom = action.data;
      });
    case '@user/GET_ALLIDIOM_SUCCESS':
      return produce(state, draft => {
        draft.idiomas = action.data;
      });
    case '@user/GET_ALLPROF_SUCCESS':
      return produce(state, draft => {
        draft.proficiencias = action.data;
      });
    case '@user/DELETE_IDIOM_SUCCESS':
      return produce(state, draft => {
        draft.idiom = action.data;
      });
    default:
      return state;
  }
}
