import produce from 'immer';

const INITIAL_STATE = {
  oauth: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/GET_GOOGLE_SUCCESS':
      return produce(state, draft => {
        draft.oauth = action.data;
        console.log(draft.oauth);
      });
    default:
      return state;
  }
}
