const orangeTree = require("./orange_tree");

  test ("orangeTree", () => {
    const result = grow(tree.age < 10);
    expect(result).toEqual("tree.height += 25");
  });

  test ("grow", () => {
    const result = grow(tree.age < 20);
    expect(result).toEqual("tree.height += 10");
  });
