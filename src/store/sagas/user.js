import '@babel/polyfill';
import { all, takeLatest, take, call, put } from 'redux-saga/effects';

import {
  authProvider as ap,
  reduxSagaFirebase as rsf,
} from '../../services/firebase';
import { USER } from '../types';

function* getUserSaga({ payload: { successCallback, failureCallback } }) {
  try {
    const authChannel = yield call(rsf.auth.channel);

    while (true) {
      const { user } = yield take(authChannel);

      if (user) {
        yield put({
          type: USER.GET_USER_SUCCESS,
          payload: {
            response: user,
          },
        });

        successCallback && successCallback();
      } else {
        yield put({
          type: USER.GET_USER_SUCCESS,
          payload: {
            response: null,
          },
        });

        successCallback && successCallback();
      }
    }
  } catch (err) {
    yield put({
      type: USER.GET_USER_FAILURE,
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

function* logInSaga({ payload: { successCallback, failureCallback } }) {
  try {
    const response = yield call(rsf.auth.signInWithPopup, ap);

    yield put({
      type: USER.LOG_IN_SUCCESS,
      payload: {
        response,
      },
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: USER.LOG_IN_FAILURE,
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

function* logOutSaga({ payload: { successCallback, failureCallback } }) {
  try {
    yield call(rsf.auth.signOut, ap);

    yield put({
      type: USER.LOG_OUT_SUCCESS,
    });

    successCallback && successCallback();
  } catch (err) {
    yield put({
      type: USER.LOG_OUT_FAILURE,
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
  yield all([takeLatest(USER.GET_USER, getUserSaga)]);
  yield all([takeLatest(USER.LOG_IN, logInSaga)]);
  yield all([takeLatest(USER.LOG_OUT, logOutSaga)]);
}
