const injectReducer =
  (initialState, handlers) =>
  (state = initialState, action = {}) =>
    action.hasOwnProperty('type')
      ? handlers[action.type]
        ? handlers[action.type](state, action)
        : state
      : state;

export default injectReducer;
