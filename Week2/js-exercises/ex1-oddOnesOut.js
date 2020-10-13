/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */

const myNumbers = [1, 2, 3, 4];

let doubleEvenNumbers =(numbers) => {
    let newNumbers = numbers.filter(numbers => (numbers % 2 == 0))
    newNumbers = newNumbers.map(numbers => numbers * 2 )
    return newNumbers
  };

  console.log(doubleEvenNumbers(myNumbers))
