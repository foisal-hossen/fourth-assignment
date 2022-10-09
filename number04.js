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
console.log(publicBusFare(245));
