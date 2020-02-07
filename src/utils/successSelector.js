/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export const createSuccessSelector = (actions) => (state) =>
  // returns true only when all actions is not loading
  _(actions)
    .some((action) => _.get(state, `success.${action}`));
