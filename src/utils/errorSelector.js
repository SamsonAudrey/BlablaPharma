import _ from 'lodash';

export const createErrorSelector = (actions) => (state) => {
  // returns true only when all actions are not loading
  return _(actions)
    .some((action) => _.get(state, `error.${action}`));
};
