
'use strict';

const catGif = document.querySelector('img');
// 'step' for adding 10 px to the left property
const catStep = 10;

catGif.style.left = '0px';

function catWalk(){
    const currentPosition = parseInt(catGif.style.left);
    catGif.style.left = (currentPosition + catStep) + 'px';
    if(currentPosition >= (window.innerWidth / 2 - catGif.width / 2)){
        stopCatWalk();
    };
};

function stopCatWalk(){
    clearInterval(interval);
    catGif.src = 'https://media.tenor.com/images/b413d00f7c04ec226e2ffda388d322ae/tenor.gif';
    catGif.style.width = '300px';
    setTimeout(continueCatWalk, 5000);
};

function continueCatWalk(){
    catGif.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    const intervalOfContinue = setInterval(function(){
        const currentPositionAfterMid = parseInt(catGif.style.left);
        catGif.style.left = (currentPositionAfterMid + catStep) + 'px';
        if(currentPositionAfterMid > window.innerWidth){
            clearInterval(intervalOfContinue);
            catGif.style.left = '0px';
            interval = setInterval(catWalk, 50);
        };
    }, 50);
};

let interval = setInterval(catWalk, 50);