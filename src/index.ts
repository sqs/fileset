import { diffGenerator } from './diffGenerator';

export function generateDiff(string1: string, string2: string): string {
    return diffGenerator(string1, string2);
}