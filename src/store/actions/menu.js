import { createActions } from 'redux-actions';

import { MENU } from '../types';

export const { getMenu, addMenuItem } = createActions({
  [MENU.GET_MENU]: (successCallback, failureCallback) => ({
    successCallback,
    failureCallback,
  }),

  [MENU.ADD_MENU_ITEM]: (data, successCallback, failureCallback) => ({
    data,
    successCallback,
    failureCallback,
  }),
});
