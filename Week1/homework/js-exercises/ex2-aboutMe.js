/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily = "Arial, sans-serif"
 let nickname = document.getElementById('nickname')
 nickname.innerText = 'megz'

 let favoriteFood = document.getElementById('fav-food')
 favoriteFood.innerText = 'Sushi'

 let hometown = document.getElementById('hometown')
 hometown.innerText = 'Cairo'


 let listItems = document.getElementsByTagName('li')

 for (let i = 0; i < listItems.length; i++ ) {
     listItems[i].className = "list-item"
 }


 let myPic = document.createElement('img');
myPic.src =  'https://i.ibb.co/w4Nt6Lk/Processed-with-VSCO-with-b4-preset.jpg';
document.body.appendChild(myPic);


