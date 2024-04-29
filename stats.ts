import { mean, sub } from './math';

export function standard_deviation(a: number[]): number {
  const m = mean(a);
  const squaredDeviations = a.map(n => sub(n, m) ** 2);
  const variance = mean(squaredDeviations);
  return Math.sqrt(variance);
}
