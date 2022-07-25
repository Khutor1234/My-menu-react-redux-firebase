import { createActions } from 'redux-actions';

import { USER } from '../types';

export const { getUser, logIn, logOut } = createActions({
  [USER.GET_USER]: (successCallback, failureCallback) => ({
    successCallback,
    failureCallback,
  }),
  [USER.LOG_IN]: (successCallback, failureCallback) => ({
    successCallback,
    failureCallback,
  }),
  [USER.LOG_OUT]: (successCallback, failureCallback) => ({
    successCallback,
    failureCallback,
  }),
});
