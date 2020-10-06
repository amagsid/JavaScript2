/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

let catGif = document.querySelector('img')
catGif.style.left ='0px';

function catWalk() {
  let currentLeftSpace = parseInt(catGif.style.left)
 
  catGif.style.left = (currentLeftSpace + 10) + 'px'
  //I tried almost everything to complete the exercise and replacing the gif in the middle of the
  //screen by declaring the middle of the screen as a variable through subtracting window.innerWidth minus left size of the
  //screen to get the right space and checking if both equal. I also tried checking if currentLeftSpace is equal to (window.innerWidth / 2)
  //with no luck
  let currentRightSpace = window.innerWidth - currentLeftSpace
  if (currentRightSpace === currentLeftSpace ) {
    //setTimeout(catImage.src='https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif',1000)
}

  if (currentLeftSpace > (window.innerWidth - catGif.width) ) {
   catGif.style.left = '0px';
  }
};
window.setInterval(catWalk, 50)

 /* let catGif = document.querySelector('img');
catGif.style.left = '0px';


function catWalk() {
  var currentLeft = parseInt(catGif.style.left);

  catGif.style.left = (currentLeft + 10) + 'px';
  if (currentLeft > (window.innerWidth-catGif.width)) {
    catGif.style.left = '0px';
  }
}
window.setInterval(catWalk, 50); 


/* let catImage = document.querySelector('img')
catImage.style.left = '0px'

var space = 0;
function catWalk() {
    space += 10;
    catImage.style.left = space + 'px';

    
    if (space > (window.innerWidth - catImage.width)) {
      catImage.style.left = '0px'
      }
    
    

};

moveVar = setInterval(catWalk, 50); */
