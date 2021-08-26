import { macroCondition, getOwnConfig, importSync } from '@embroider/macros';

export function initialize(/* appInstance */) {
  if (macroCondition(!getOwnConfig().shouldIncludeMyUtil)) {
    return;
  }

  let { myUtil } = importSync('./../utils/my-util');
  myUtil();
}

export default {
  initialize,
};
