export function countLines(str: string): number {
    return str.split(/\r\n|\r|\n/).length;
}

export function getLineByNumber(str: string, line: number): string {
    const lines = str.split(/\r\n|\r|\n/);
    return lines[line - 1] || '';
}

export function getLines(str: string): string[] {
    return str.split(/\r\n|\r|\n/);
}