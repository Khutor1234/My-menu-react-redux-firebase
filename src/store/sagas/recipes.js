import { all, takeLatest, call, put } from 'redux-saga/effects';

import { reduxSagaFirebase as rsf, db } from '../../services/firebase';
import { RECIPES } from '../types';

function* getRecipesSaga({
  payload: { category, successCallback, failureCallback },
}) {
  try {
    let snapshot;
    if (category) {
      let menuRef = db.collection('recipes');

      snapshot = yield call([
        menuRef.where('category', '==', category),
        menuRef.get,
      ]);
    } else {
      snapshot = yield call(rsf.firestore.getCollection, 'recipes');
    }

    let recipes = [];
    snapshot.forEach((user) => {
      recipes = [...recipes, { ...user.data(), id: user.id }];
    });

    yield put({
      type: RECIPES.GET_RECIPES_SUCCESS,
      payload: {
        response: recipes,
      },
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: RECIPES.GET_RECIPES_FAILURE,
      payload: {
        errors: {
          status: err?.response?.status,
          message: err?.response?.data?.message,
        },
      },
    });
    failureCallback && failureCallback(err);
  }
}

export default function* root() {
  yield all([takeLatest(RECIPES.GET_RECIPES, getRecipesSaga)]);
}
