export function add(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function sum(a: number[]): number {
  let sum = 0n;
  for (const n of a) {
    sum += BigInt(Math.round(n));
  }
  return Number(sum);
}

export function mean(a: number[]): number {
  return sum(a) / a.length;
}
