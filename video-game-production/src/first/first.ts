///////////////////////////////////////////////////////////////////////////////
// 
// first.js
// --------
// my first javascript video game, and it's also typescript
// 
// function declarations, usage before & after
// types of non-standard objects
// assign types for all variables & functions
/*****************************************************************************/
"use strict";
namespace First
{

// INCLUDES ///////////////////////////////////////////////////////////////////




// GLOBALS ////////////////////////////////////////////////////////////////////

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let backgroundSprite: HTMLImageElement;
let baloonSprite: HTMLImageElement;

let baloonPos = {
  x:100,
  y:100
};

//timer variables measured in ms
let lastFrame = 0;
let curFrame = 0;
let totalTime = 0;
let totalFrames = 0;



// FUNCTIONS //////////////////////////////////////////////////////////////////

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

///////////////////////////////////////////////////////////////////////////////

function drawImage(sprite, position) {
  ctx.save();
  ctx.translate(position.x, position.y);
  // able to add image rotation and scaling here
  ctx.drawImage(sprite,0,0, sprite.width, sprite.height, 0,0, sprite.width, sprite.height);
  ctx.restore();
}

///////////////////////////////////////////////////////////////////////////////

function start() {
    canvas = <HTMLCanvasElement> document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    ctx.font = '24px serif';
    backgroundSprite = new Image();
    backgroundSprite.src = "../../assets/spr_background.jpg";
    baloonSprite = new Image();
    baloonSprite.src = "../../assets/spr_balloon.png";
    main();
}

///////////////////////////////////////////////////////////////////////////////

function end() {
}

///////////////////////////////////////////////////////////////////////////////

function update() {
    let d = new Date();
    lastFrame = curFrame;
    curFrame = performance.now();
    baloonPos.x = d.getTime() % canvas.width;
}

///////////////////////////////////////////////////////////////////////////////

function draw() {
    drawImage(backgroundSprite, {x:0, y:0});
    drawImage(baloonSprite, baloonPos);    

    //show the timer
    totalTime += (1000.0 / (curFrame - lastFrame));
    totalFrames++;
    let avgTime = Math.round(totalTime / totalFrames);
    ctx.fillText(avgTime.toString(), 10, 50);
}

///////////////////////////////////////////////////////////////////////////////

function main() {
    update();
    clear();
    draw();
    window.setTimeout(main, 1000 / 60);
}



// START PROGRAM //////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', start);

} // end namespace First