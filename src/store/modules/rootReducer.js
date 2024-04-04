import { combineReducers } from 'redux';

import user from './user/reducer';
import host from './host/reducer';
import hostAds from './hostAds/reducer';
import candidature from './candidature/reducer';
import idiom from './idiom/reducer';
import curriculum from './curriculum/reducer';
import skills from './skills/reducer';
import comments from './comments/reducer';
import oauth from './oauth/reducer';
import ads from './ads/reducer';
import photo from './photo/reducer';

export default combineReducers({
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
});
