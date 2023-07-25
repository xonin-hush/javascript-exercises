const add = function(a, b ) {
  c=0
	c=a+b
  return c;
};

const subtract = function(a, b) {
	c=0
  c=a-b
  return c;
};

const sum = function(array) {
return array.reduce((total, currentValue)=> total+currentValue,0)
};

const multiply = function(...numbers) {
    return numbers.reduce((total, currentValue)=> total*currentValue,)
};

const power = function(number, powerNumber) {
  let number2=1
	for (let i=0 ; i<powerNumber;i++){
    number2=number2*number
  }
  return number2
};

const factorial = function(number) {
  let fac=1
	for (let i=1 ; i<=number ; i++)
      fac=fac*i;
      return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
