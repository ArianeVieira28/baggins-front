import { all } from 'redux-saga/effects';

import user from './user/sagas';
import host from './host/sagas';
import hostAds from './hostAds/sagas';
import candidature from './candidature/sagas';
import idiom from './idiom/sagas';
import curriculum from './curriculum/sagas';
import skills from './skills/sagas';
import comments from './comments/sagas';
import oauth from './oauth/sagas';
import ads from './ads/sagas';
import photo from './photo/sagas';

export default function* rootSaga() {
  return yield all([
    user,
    host,
    hostAds,
    candidature,
    idiom,
    curriculum,
    skills,
    comments,
    oauth,
    ads,
    photo,
  ]);
}
