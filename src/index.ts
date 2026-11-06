export function stripAnsi(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return value
    .replace(/\u001B\][^\u0007]*(?:\u0007|\u001B\\)/g, '')
    .replace(/\u001B\[[0-?]*[ -/]*[@-~]/g, '');
}
