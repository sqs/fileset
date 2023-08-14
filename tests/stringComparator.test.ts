import { stringComparator } from '../src/stringComparator';
import { randomStringGenerator } from '../src/utils';

describe('stringComparator', () => {
  it('should return 0 when both strings are equal', () => {
    const str = randomStringGenerator();
    expect(stringComparator(str, str)).toBe(0);
  });

  it('should return a positive number when the first string is lexicographically greater than the second', () => {
    const str1 = 'b' + randomStringGenerator();
    const str2 = 'a' + randomStringGenerator();
    expect(stringComparator(str1, str2)).toBeGreaterThan(0);
  });

  it('should return a negative number when the first string is lexicographically less than the second', () => {
    const str1 = 'a' + randomStringGenerator();
    const str2 = 'b' + randomStringGenerator();
    expect(stringComparator(str1, str2)).toBeLessThan(0);
  });
});