import { expect, test } from "bun:test";
import { standard_deviation } from "./stats";

test("standard deviation", () => {
  expect(standard_deviation([5, 5, 5, 5, 5, 5, 5])).toBeCloseTo(0, 4);
  expect(standard_deviation([35, 76, 33, 92, 14, 55, 35, 22, 52, 54])).toBeCloseTo(22.807, 4);
});
