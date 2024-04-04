import produce from 'immer';

const INITIAL_STATE = {
  allAds: [],
  ads: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/GET_ALL_ADS_SUCCESS':
      return produce(state, draft => {
        draft.allAds = action.data;
      });

    default:
      return state;
  }
}
