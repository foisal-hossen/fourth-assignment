// problem 01: radian to degree.
function radianToDegree(radian) {
  if (typeof radian !== 'number') {
    return "please enter the number";
  }
  else {
    
    let numbers = radian * (180 / Math.PI);
    let sumDegree = numbers.toFixed(2);
    return parseFloat(sumDegree);
  }
}
//problem 02 :javaScriptFile check.
function isJavaScriptFile(fileCheck) {
  if (typeof fileCheck !== 'string') {
    console.log(" please enter the correct word !");
  }
  else {

    return fileCheck.endsWith('.js');
  }
  
}
// problem 03:oil price.
function oilPrice(diesel, petrol, octane) {
  if (typeof diesel !== "number" ||typeof petrol !== "number"|| typeof octane !== "number" ) {
    console.log("please enter the right value ");
  }
  else {
    let dieselPrice = diesel * 114;
    let petrolPrice = petrol *130;
    let octanePrice = octane * 135;
    let totalOilCost = dieselPrice + petrolPrice + octanePrice;
    return totalOilCost;
  }
}
//problem 04 : publicBusFare.
function publicBusFare(number) {
  if (typeof number !== "number") {
    console.log("enter the valid number");
  }
  else {
    let bus = number % 50;
    let micro = bus % 11;
    let busTicket = micro * 250;
    
    return busTicket;
  }
}
//problem 05 : isBestFreind.
function isBestFreind(person01, person02) {

  if (typeof person01 !== "object" || typeof person02 !== "object") {
    console.log(" please enter a valid object");
  }
  else if (person01.name == person02.friend && person02.name == person01.friend) {
    return "true";
  }
  else {
    return "false";
  }
}