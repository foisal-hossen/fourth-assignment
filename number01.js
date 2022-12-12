// problem 01: radian to degree  .
function radianToDegree(radian) {
  if (typeof radian !== 'number') {
    return "please enter the number";
  }
  else {
    
    let numbers = radian * (180 / Math.PI);
    let num = numbers.toFixed(2);
    return parseFloat(num);
  }
}
console.log(radianToDegree());