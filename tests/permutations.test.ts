import { unique, permute, permutations } from "../src";

describe("unique function", () => {
  it("should return collectly", () => {
    expect(unique(["a", "a", "bc"])).toStrictEqual(["a", "bc"]);
    expect(unique(["c", "c", "c", "c", "j", "c"])).toStrictEqual(["c", "j"]);
    expect(unique(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    expect(unique([""])).toStrictEqual([""]);
    expect(unique([])).toStrictEqual([]);
  });
});

describe("permute function", () => {
  it("should return all case", () => {
    expect(permute("a")).toEqual(["a"]);
    expect(permute("ab")).toEqual(expect.arrayContaining(["ab", "ba"]));
    expect(permute("abc")).toEqual(
      expect.arrayContaining(["abc", "acb", "bac", "bca", "cab", "cba"])
    );
    expect(permute("abab")).toEqual(
      expect.arrayContaining([
        "abab",
        "abba",
        "aabb",
        "aabb",
        "abba",
        "abab",
        "baab",
        "baba",
        "baab",
        "baba",
        "bbaa",
        "bbaa",
        "aabb",
        "aabb",
        "abab",
        "abba",
        "abab",
        "abba",
        "baba",
        "baab",
        "bbaa",
        "bbaa",
        "baab",
        "baba",
      ])
    );
  });
});

describe("permutations function", () => {
  it("should return collectly permute", () => {
    expect(permutations("a")).toEqual(["a"]);
    expect(permutations("ab")).toEqual(["ab", "ba"]);
    expect(permutations("abc")).toEqual(
      expect.arrayContaining(["abc", "acb", "bac", "bca", "cab", "cba"])
    );
    expect(permutations("abab")).toEqual(
      expect.arrayContaining(["abab", "abba", "aabb", "baab", "baba", "bbaa"])
    );
  });
});
