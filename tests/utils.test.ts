import { expect } from 'chai';
import * as utils from '../src/utils';

describe('Utils Test', () => {
  describe('utilityFunction1', () => {
    it('should do something', () => {
      const result = utils.utilityFunction1('input1', 'input2');
      expect(result).to.equal('expectedResult');
    });
  });

  describe('utilityFunction2', () => {
    it('should do something else', () => {
      const result = utils.utilityFunction2('input1', 'input2');
      expect(result).to.equal('expectedResult');
    });
  });
});