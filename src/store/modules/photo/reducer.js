import produce from 'immer';

const INITIAL_STATE = {
  file: '',
  newFile: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/UPLOAD_PHOTO_SUCCESS':
      return produce(state, draft => {
        draft.newFile = action.data;
      });
    case '@user/GET_PHOTO_SUCCESS':
      return produce(state, draft => {
        draft.file = action.data;
      });
    default:
      return state;
  }
}
