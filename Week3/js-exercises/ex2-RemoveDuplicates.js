'use strict'
/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(array) {
  return array.filter((item1, item2) => array.indexOf(item1) === item2)
};

console.log(removeDuplicates(letters));


if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")
