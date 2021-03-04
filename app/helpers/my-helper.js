import { helper } from '@ember/component/helper';

export default helper(function myHelper(params) {
  return params[0];
});
