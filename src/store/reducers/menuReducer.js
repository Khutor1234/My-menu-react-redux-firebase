import initialState from '../initialStates';
import injectReducer from '../injectReducer';

import { MENU } from '../types';

export default injectReducer(initialState.menuReducer, {
  [MENU.GET_MENU]: (state) => ({
    ...state,
    isRequest: true,
    menu: null,
    errors: null,
  }),
  [MENU.GET_MENU_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequest: false,
    menu: response,
    errors: null,
  }),
  [MENU.GET_MENU_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    menu: null,
    errors: errors,
  }),

  [MENU.ADD_MENU_ITEM]: (state) => ({
    ...state,
    isRequest: true,
    errors: null,
  }),
  [MENU.ADD_MENU_ITEM_SUCCESS]: (state) => ({
    ...state,
    isRequest: false,
    errors: null,
  }),
  [MENU.ADD_MENU_ITEM_FAILURE]: (state, { payload: { errors } }) => ({
    ...state,
    isRequest: false,
    errors: errors,
  }),
});
