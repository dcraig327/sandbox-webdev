///////////////////////////////////////////////////////////////////////////////
// 
// first.js
// --------
// my first javascript video game
// 
// 
// 
/*****************************************************************************/
"use strict";

// INCLUDES ///////////////////////////////////////////////////////////////////


// GLOBALS ////////////////////////////////////////////////////////////////////
var game = {
  /** @type {HTMLCanvasElement} */
  canvas: undefined,
  /** @type {CanvasRenderingContext2D} */
  ctx: undefined,

  rectPos: 0,
  lastFrame: 0,    //ms of last frame
  curFrame: 0,      //ms of current frame
  totalFrames: 0,
  totalTime: 0
};


// FUNCTIONS //////////////////////////////////////////////////////////////////

game.clearCanvas = function() {
  game.ctx.clearRect(0,0, game.canvas.width,game.canvas.height);
}

///////////////////////////////////////////////////////////////////////////////

game.start = function() {
  game.canvas = document.getElementById("myCanvas");
  game.ctx = game.canvas.getContext("2d");
  game.ctx.font = '24px serif';
  game.main();
}


///////////////////////////////////////////////////////////////////////////////

game.end = function() {
}


///////////////////////////////////////////////////////////////////////////////

game.update = function() {
  var d = new Date();
  game.lastFrame = game.curFrame;
  game.curFrame = performance.now();
  
  var pos = (d.getTime()/2) % game.canvas.width;
//  pos = game.canvas.width - pos;      //right to left  

  game.rectPos = pos;
}


///////////////////////////////////////////////////////////////////////////////

game.draw = function() {
  game.ctx.fillStyle = "blue";

  // x,y, w,h
//  game.ctx.fillRect(game.rectPos,100, 50,50);
  game.ctx.fillRect(game.rectPos,game.rectPos, 50,50);

  //show the timer
  var time = 1000.0 / (game.curFrame - game.lastFrame);
  game.totalTime += time;
  game.totalFrames++;
  var avgTime = Math.round(game.totalTime / game.totalFrames);
  game.ctx.fillText(avgTime,10,50);
}


///////////////////////////////////////////////////////////////////////////////

game.main = function() {
  game.update();
  game.clearCanvas();
  game.draw();
  window.setTimeout(game.main, 1000/60);
}


// START PROGRAM //////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', game.start);