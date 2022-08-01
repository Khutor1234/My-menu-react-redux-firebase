import { createActions } from 'redux-actions';

import { MENU } from '../types';

export const { getMenu, addMenuItem, removeMenuItem, deleteMenu } =
  createActions({
    [MENU.GET_MENU]: () => ({}),

    [MENU.ADD_MENU_ITEM]: (data) => ({ data }),

    [MENU.REMOVE_MENU_ITEM]: (id) => ({ id }),

    [MENU.DELETE_MENU]: () => ({}),
  });
