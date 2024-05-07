const isCoPrime = (num1, num2) => {
  if (num1 === num2) {
    return false;
  }

  const divisor1Arr = [];
  if (num1 > num2) {
    //this is making sure num1 is the smaller of the 2 numbers, so we can then find all the divisors of this num for efficiency
    let tempNum = num1;
    num1 = num2;
    num2 = tempNum;
  }
  //loop through all the numbers up to num1/2 (bc we dont need to check numbers passed this divisibility) starting from 2
  for (let i = 2; i < num1 / 2; i++) {
    if (num1 % i === 0) {
      divisor1Arr.push(i);
    }
  }

  //returns true if at least one of the divisors returns 0 remainders when dividing num2 by it, so use bang operator to reverse it
  return !divisor1Arr.some((divisor) => num2 % divisor === 0);
};

/*
- my attempted solution
- how do i check if two numbers are co-prime?
- create two new arrays to contain the divisibles of each number 
-for each number, loop through the numbers backwards 
- if the num divisible by i = 0 then push to the num array
- compare the two arrays, if the only match within them is 1, return true
- for the above step, can i 
- otherwise , return false
*/

module.exports = isCoPrime;
