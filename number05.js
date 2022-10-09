//problem 05 : isBestFreind.
function isBestFreind(person01, person02) {

  if (typeof person01 !== "object" || typeof person02 !== "object") {
    console.log(" please enter a valid object");
  }
  else if (person01.name == person02.friend && person02.name == person01.friend) {
    return true;
  }
  else {
    return false;
  }
}

let a = { name: "fahi", friend: "jui" };
let b = { name: "jui", friend: "fahim" };
console.log(isBestFreind(a, b));
