import { stringComparator } from './stringComparator';
import { formatDiff, calculateDiff } from './utils';

export function diffGenerator(string1: string, string2: string): string {
    const diff = stringComparator(string1, string2);
    const formattedDiff = formatDiff(diff);
    return calculateDiff(formattedDiff);
}