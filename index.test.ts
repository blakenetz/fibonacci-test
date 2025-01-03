import { FibArray, getNthElement } from "./index";
import each from "jest-each";

describe("should return the nth element of a Fibonacci sequence starting with 1", () => {
  each([
    [[1, 2, 3], 3],
    [[1, 2, 4], 5],
    [[1, 2, 5], 8],
  ]).test(
    "Should pass for array %s given answer: %s",
    (arr: FibArray, answer: number) => {
      const n = getNthElement(arr);
      expect(n).toBe(answer);
    }
  );
});

describe("should return the nth element of a Fibonacci sequence NOT starting with 1", () => {
  each([
    [[3, 5, 10], 233],
    [[5, 8, 4], 21],
    [[18, 1, 5], 39],
  ]).test(
    "Should pass for array %s given answer: %s",
    (arr: FibArray, answer: number) => {
      const n = getNthElement(arr);

      expect(n).toBe(answer);
    }
  );
});
