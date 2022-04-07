const testPassword = require("./testPassword");

test("should return true if password is valid", () => {
  expect(testPassword("bonjour")).toBe(false);
  expect(testPassword("bonjo6urtoutlemonde")).toBe(true);
  expect(testPassword("hellowordbo8")).toBe(true);
  expect(testPassword(5)).toBeNull();
  expect(testPassword(true)).toBeNull();
  expect(testPassword(["a", "b", "c"])).toBeNull();
});
