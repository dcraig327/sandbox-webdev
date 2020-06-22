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
  gameLoop();
}

///////////////////////////////////////////////////////////////////////////////

function update() {  
}

///////////////////////////////////////////////////////////////////////////////

function draw() {
  ctx.fillText(timerAverageFPS.toString() + " FPS", 10, 50);
}

///////////////////////////////////////////////////////////////////////////////

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

///////////////////////////////////////////////////////////////////////////////

/* FUNCTIONS GO HERE */

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

function start() {
  timerTick();
}

///////////////////////////////////////////////////////////////////////////////

function end() {
  window.requestAnimationFrame(gameLoop);
}

///////////////////////////////////////////////////////////////////////////////

function gameLoop() {
  start(); // timer is updated here
  update();   
  clear();
  draw();         // framerate is rendered here  
  end();  // last thing done in the game loop
}


// START PROGRAM //////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', main);

} // end namespace Main