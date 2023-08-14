import { diffGenerator } from '../src/diffGenerator';
import { someUtilityFunction } from '../src/utils';

describe('diffGenerator', () => {
  it('should generate correct diff for two strings', () => {
    const string1 = 'Hello World';
    const string2 = 'Hello Brave New World';
    const expectedDiff = '---\n+++ Hello World\n- Hello Brave New World';

    expect(diffGenerator(string1, string2)).toEqual(expectedDiff);
  });

  it('should handle empty strings', () => {
    const string1 = '';
    const string2 = '';
    const expectedDiff = '---\n+++ \n- ';

    expect(diffGenerator(string1, string2)).toEqual(expectedDiff);
  });

  it('should use utility function correctly', () => {
    const string1 = 'Hello World';
    const string2 = 'Hello Brave New World';
    const spy = jest.spyOn({ someUtilityFunction }, 'someUtilityFunction');

    diffGenerator(string1, string2);
    expect(spy).toHaveBeenCalled();
  });
});