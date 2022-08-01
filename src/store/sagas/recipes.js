import { all, takeLatest, call, put } from 'redux-saga/effects';

import { reduxSagaFirebase as rsf, db } from '../../services/firebase';
import { RECIPES } from '../types';

function* getRecipesSaga({ payload: { category } }) {
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
  }
}

function* addRecipeItemSaga({ payload: { data } }) {
  try {
    yield call(rsf.firestore.addDocument, 'recipes', data);

    yield put({
      type: RECIPES.ADD_RECIPE_ITEM_SUCCESS,
      payload: {
        response: data,
      },
    });
  } catch (err) {
    yield put({
      type: RECIPES.ADD_RECIPE_ITEM_FAILURE,
      payload: {
        errors: {
          status: err?.response?.status,
          message: err?.response?.data?.message,
        },
      },
    });
  }
}

function* editRecipeSaga({ payload: { id, data } }) {
  try {
    yield call(rsf.firestore.setDocument, `recipes/${id}`, data);

    yield put({
      type: RECIPES.EDIT_RECIPE_SUCCESS,
      payload: {
        response: { id, data },
      },
    });
  } catch (err) {
    yield put({
      type: RECIPES.EDIT_RECIPE_FAILURE,
      payload: {
        errors: {
          status: err?.response?.status,
          message: err?.response?.data?.message,
        },
      },
    });
  }
}

function* deleteRecipeItemSaga({ payload: { id } }) {
  try {
    yield call(rsf.firestore.deleteDocument, `recipes/${id}`);

    yield put({
      type: RECIPES.DELETE_RECIPE_ITEM_SUCCESS,
      payload: {
        response: { id },
      },
    });
  } catch (err) {
    yield put({
      type: RECIPES.DELETE_RECIPE_ITEM_FAILURE,
      payload: {
        errors: {
          status: err?.response?.status,
          message: err?.response?.data?.message,
        },
      },
    });
  }
}

export default function* root() {
  yield all([takeLatest(RECIPES.GET_RECIPES, getRecipesSaga)]);
  yield all([takeLatest(RECIPES.ADD_RECIPE_ITEM, addRecipeItemSaga)]);
  yield all([takeLatest(RECIPES.EDIT_RECIPE, editRecipeSaga)]);
  yield all([takeLatest(RECIPES.DELETE_RECIPE_ITEM, deleteRecipeItemSaga)]);
}
