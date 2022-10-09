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
console.log(oilPrice(1,2,"ff"));
