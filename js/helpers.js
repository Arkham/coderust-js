module.exports.assert = function (got, expected) {
  if (got === expected) {
    console.log("\033[32mOK\033[0m");
  } else {
    console.log("\033[31mFAIL\033[0m Expected", expected, "Got", got);
  }
};
