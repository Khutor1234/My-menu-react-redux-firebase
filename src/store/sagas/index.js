import { all, fork } from 'redux-saga/effects';

import user from './user';
import recipes from './recipes';
import menu from './menu';

export default function* root() {
  yield all([fork(user)]);
  yield all([fork(recipes)]);
  yield all([fork(menu)]);
}
