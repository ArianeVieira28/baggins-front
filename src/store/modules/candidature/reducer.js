import produce from 'immer';

const INITIAL_STATE = {
  candidatura: {},
  list: [],
  listChat: [{}],
  hosts: [{}],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_CANDIDATURE_SUCCESS':
      return produce(state, draft => {
        draft.candidatura = action.data;
      });
    case '@user/GET_CANDIDATURE_SUCCESS':
      return produce(state, draft => {
        draft.candidatura = action.data;
      });
    case '@user/GET_USER_CANDIDATURE_SUCCESS':
      return produce(state, draft => {
        draft.list = action.data;
      });
    case '@user/UPDATE_CANDIDATURE_SUCCESS':
      return produce(state, draft => {
        draft.candidatura = action.data;
      });
    case '@user/DELETE_CANDIDATURE_SUCCESS':
      return produce(state, draft => {
        draft.candidatura = action.data;
      });
    case '@user/GET_USERS_CHAT_SUCCESS':
      return produce(state, draft => {
        draft.listChat = action.data;
      });
    case '@user/GET_HOSTS_CHAT_SUCCESS':
      return produce(state, draft => {
        draft.hosts = action.data;
      });
    default:
      return state;
  }
}
