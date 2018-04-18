const toWords = require("./to_words");

describe ("toWords", () => {
  test ("Hello to Jiao", () => {
    const result = toWords("Hello to Jiao");
    expect(result).toEqual(["Hello","to","Jiao"]);
  });
});

describe ("toWords", () => {
  test ('You are a "SUPER STAR"', () => {
    const result = toWords("You are a \"SUPER STAR\"");
    expect(result).toEqual(["You","are","a","\"SUPER STAR\""]);
  });
});

describe ("toWords", () => {
  test ("I'm happy", () => {
    const result = toWords("I'm happy");
    expect(result).toEqual(["I","m","happy"]);
  });
});
