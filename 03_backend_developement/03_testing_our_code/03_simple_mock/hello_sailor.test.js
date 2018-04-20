const helloSailor = require("./hello_sailor");

test("Howdy name", () => {
  console.log = jest.fn();
  helloSailor("Jiao");
  expect(console.log).toHaveBeenCalledWith("Howdy Jiao!");
});

test("Howdy Sailor! Good day to you!", () => {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
