const greet = require("./greeting");

describe ("greet", () => {
  test ("Hello to Jiao", () => {
    const result = greet("Jiao");
    expect(result).toBe("Hello JIAO!");
  });

  test ("Hello to World", () => {
    const result = greet(undefined);
    expect(result).toBe("Hello WORLD!");
  });


  test ("Hello to World", () => {
    const result = greet(undefined);
    expect(result).not.toBe("Hello undefined!");
  });
});
