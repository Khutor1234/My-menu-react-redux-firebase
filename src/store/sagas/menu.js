import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { reduxSagaFirebase as rsf, db } from '../../services/firebase';
import { MENU } from '../types';

function* getMenuSaga() {
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
  }
}

function* addMenuItemSaga({ payload: { data } }) {
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
  }
}

function* removeMenuItemSaga({ payload: { id } }) {
  try {
    yield call(rsf.firestore.deleteDocument, `menu/${id}`);

    yield put({
      type: MENU.REMOVE_MENU_ITEM_SUCCESS,
      payload: {
        id: id,
      },
    });
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
  }
}

function* deleteMenuSaga() {
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

    snapshot.forEach((el) => el.ref.delete());

    yield put({
      type: MENU.DELETE_MENU_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: MENU.DELETE_MENU_FAILURE,
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
  yield all([takeLatest(MENU.ADD_MENU_ITEM, addMenuItemSaga)]);
  yield all([takeLatest(MENU.GET_MENU, getMenuSaga)]);
  yield all([takeLatest(MENU.REMOVE_MENU_ITEM, removeMenuItemSaga)]);
  yield all([takeLatest(MENU.DELETE_MENU, deleteMenuSaga)]);
}
