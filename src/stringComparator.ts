import { isEqual } from './utils';

export function stringComparator(str1: string, str2: string): boolean {
    return isEqual(str1, str2);
}