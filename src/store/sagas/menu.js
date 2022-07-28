import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { reduxSagaFirebase as rsf, db } from '../../services/firebase';
import { MENU } from '../types';

function* getMenuSaga({ payload: { successCallback, failureCallback } }) {
  try {
    const {
      userReducer: {
        user: { email },
      },
    } = yield select();

    let menuRef = db.collection('menu');

    const snapshot = yield call([
      menuRef.where('user', '==', email),
      menuRef.get,
    ]);

    let menu = [];
    snapshot.forEach((user) => {
      menu = [...menu, { ...user.data(), id: user.id }];
    });

    yield put({
      type: MENU.GET_MENU_SUCCESS,
      payload: {
        response: menu,
      },
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: MENU.GET_MENU_FAILURE,
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

function* addMenuItemSaga({
  payload: { data, successCallback, failureCallback },
}) {
  try {
    const {
      userReducer: {
        user: { email },
      },
    } = yield select();

    yield call(rsf.firestore.addDocument, 'menu', { ...data, user: email });

    yield put({
      type: MENU.ADD_MENU_ITEM_SUCCESS,
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: MENU.ADD_MENU_ITEM_FAILURE,
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

function* removeMenuItemSaga({
  payload: { id, successCallback, failureCallback },
}) {
  try {
    yield call(rsf.firestore.deleteDocument, `menu/${id}`);

    yield put({
      type: MENU.REMOVE_MENU_ITEM_SUCCESS,
      payload: {
        id: id,
      },
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: MENU.REMOVE_MENU_ITEM_FAILURE,
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
  yield all([takeLatest(MENU.ADD_MENU_ITEM, addMenuItemSaga)]);
  yield all([takeLatest(MENU.GET_MENU, getMenuSaga)]);
  yield all([takeLatest(MENU.REMOVE_MENU_ITEM, removeMenuItemSaga)]);
}
