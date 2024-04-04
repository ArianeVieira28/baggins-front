import produce from 'immer';

const INITIAL_STATE = {
  habilidades: [],
  userHabilidade: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/GET_SKILLS_SUCCESS':
      return produce(state, draft => {
        action.data.forEach(element => {
          element.rateStar = 0;
        });
        draft.habilidades = action.data;
      });
    case '@user/CREATE_SKILLS_SUCCESS':
      return produce(state, draft => {
        draft.userHabilidade = action.data;
      });
    case '@user/GET_USER_SKILLS_SUCCESS':
      return produce(state, draft => {
        draft.userHabilidade = action.data;
      });
    case '@user/UPDATE_SKILLS_SUCCESS':
      return produce(state, draft => {
        draft.userHabilidade = action.data;
      });
    default:
      return state;
  }
}
