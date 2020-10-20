'use strict'

/**
** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.
*/
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

//the output here will be 12. That's because the value of 'a' was reassigned to 12 inside the const x function, which is
//in the lexical scope in relation to the closure funtion