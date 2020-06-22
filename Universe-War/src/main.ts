///////////////////////////////////////////////////////////////////////////////
// main.js
// --------
// 
/*****************************************************************************/
"use strict";
namespace Main
{

// INCLUDES ///////////////////////////////////////////////////////////////////


// GLOBALS ////////////////////////////////////////////////////////////////////

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let spritesStillLoading = 0;

let playerSprite: HTMLImageElement;

//timer variables store time in ms, displays frames over the past second
const TIMER_DURATION = 1000; //ms
let timerLastCalculation = 0;
let timerFrameCount = 0;
let timerAverageFPS = 0;


// FUNCTIONS //////////////////////////////////////////////////////////////////

function main() {
  canvas = <HTMLCanvasElement> document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  ctx.font = '24px serif';
  playerSprite = loadImage("../assets/PlayerShip.png");
  loadAssets();
}

///////////////////////////////////////////////////////////////////////////////

function update() {  
}

///////////////////////////////////////////////////////////////////////////////

function draw() {
  ctx.fillStyle = 'white';
  ctx.fillText(timerAverageFPS.toString() + " FPS", 10, 50);
}

///////////////////////////////////////////////////////////////////////////////

function clear() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

///////////////////////////////////////////////////////////////////////////////

/* FUNCTIONS GO HERE */

///////////////////////////////////////////////////////////////////////////////

function loadImage(imageName) {
  let image = new Image();
  image.src = imageName;
  spritesStillLoading++;
  image.onload = function () {
    spritesStillLoading--;
  }
  return image;
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

function loadAssets() {
  if(spritesStillLoading == 0)
    gameLoop();
  else
    window.setTimeout(loadAssets,1);
}

///////////////////////////////////////////////////////////////////////////////

function timerTick() {
  timerFrameCount++;

  let now = performance.now();
  let delta = now - timerLastCalculation;
  if(delta > TIMER_DURATION) {
    //timerAverageFPS = Math.trunc(TIMER_DURATION * (timerFrameCount / delta));
    timerAverageFPS = ~~(TIMER_DURATION * (timerFrameCount / delta));
    timerLastCalculation = now;
    timerFrameCount = 0;
  }
}

///////////////////////////////////////////////////////////////////////////////

function gameLoop() {
  timerTick();
  update();   
  clear();
  draw();
  window.requestAnimationFrame(gameLoop);
}


// START PROGRAM //////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', main);

} // end namespace Main