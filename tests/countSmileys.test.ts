import { isSmile, countSmileys } from "../src";

describe("isSmile function", () => {
  it("should return collectly value", () => {
    expect(isSmile(":)")).toBeTruthy();
    expect(isSmile(";-D")).toBeTruthy();
    expect(isSmile(";~)")).toBeTruthy();

    expect(isSmile("")).toBeFalsy();
    expect(isSmile("~D")).toBeFalsy();
    expect(isSmile(":~]")).toBeFalsy();
  });
});

describe("countSmileys function", () => {
  it("should return collectly number", () => {
    expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
    expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);

    expect(countSmileys([])).toBe(0);
    expect(countSmileys([":D", ";)", ":(", ":-D", ";~]"])).toBe(3);
    expect(countSmileys([":]", ";=D", ";+)"])).toBe(0);
  });
});
