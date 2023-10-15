import { findOddAppear, NOT_FOUND_WARNING, WRONG_INPUT_WARNING } from "../src";

describe("findOddAppear function", () => {
  it("should return collectly answer", () => {
    /// Example test
    expect(findOddAppear([7])).toBe(7);
    expect(findOddAppear([0])).toBe(0);
    expect(findOddAppear([1, 1, 2])).toBe(2);
    expect(findOddAppear([0, 1, 0, 1, 0])).toBe(0);
    expect(findOddAppear([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
    /// Additional test
    expect(findOddAppear([1, 7, 3, 2, 1, 2, 2, 2, 7])).toBe(3);
    expect(findOddAppear([5, 5, 5, 5, 0, 1, 5, 0, 6, 6, 7, 1, 7])).toBe(5);
    expect(findOddAppear([4, 3, 3, 3, 6, 9, 1, 1, 9, 6, 6, 4, 1, 1, 3])).toBe(
      6
    );
  });
  it("when no odd appear", () => {
    expect(findOddAppear([])).toBe(NOT_FOUND_WARNING);
    expect(findOddAppear([1, 1, 2, 2])).toBe(NOT_FOUND_WARNING);
    expect(findOddAppear([7, 7, 7, 7, 7, 7])).toBe(NOT_FOUND_WARNING);
  });
  it("when odd appear more than one number", () => {
    expect(findOddAppear([1, 2])).toBe(WRONG_INPUT_WARNING);
    expect(findOddAppear([2, 3, 3, 1, 4, 5, 5, 5, 6, 5, 2])).toBe(
      WRONG_INPUT_WARNING
    );
    expect(findOddAppear([4, 3, 3, 3, 6, 9, 1, 1, 9, 6, 6, 4, 1, 3])).toBe(
      WRONG_INPUT_WARNING
    );
  });
});
