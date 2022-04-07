function testPassword(mdp) {
  if (typeof mdp !== "string") {
    return null;
  } else if (mdp.length < 12) {
    return false;
  }
  let chiffre = false;
  let letter = false;
  for (let i = 0; i < mdp.length; i++) {
    if (!isNaN(mdp[i])) {
      chiffre = true;
    } else if (
      mdp[i].toUpperCase() != mdp[i] ||
      mdp[i].toLowerCase() != mdp[i]
    ) {
      letter = true;
    }
  }
  if (chiffre === false || letter === false) {
    return false;
  }
  return true;
}
module.exports = testPassword;
