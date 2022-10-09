//problem 02 :javaScriptFile chek.
function isJavaScriptFile(fileCheck) {
  if (typeof fileCheck !== 'string') {
    console.log(" please enter the correct word !");
  }
  else {

    return fileCheck.endsWith('.js');
  }
  
}
console.log(isJavaScriptFile(99));


// let javascript = 'hello.js';
// console.log(javascript.endsWith('.js'));