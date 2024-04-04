import produce from 'immer';

const INITIAL_STATE = {
  comment: {},
  comments: [{}],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_COMMENT_SUCCESS':
      return produce(state, draft => {
        draft.comment = action.data;
      });
    case '@user/GET_COMMENT_SUCCESS':
      return produce(state, draft => {
        draft.comments = action.data;
      });
    default:
      return state;
  }
}
