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

var canvas = undefined;
var canvasContext = undefined;


// FUNCTIONS //////////////////////////////////////////////////////////////////

function start() {
  canvas = document.getElementById("myCanvas");
  canvasContext = canvas.getContext("2d");
  main();
}


///////////////////////////////////////////////////////////////////////////////

function end() {

}


///////////////////////////////////////////////////////////////////////////////

function update() {

}


///////////////////////////////////////////////////////////////////////////////

function draw() {

}


///////////////////////////////////////////////////////////////////////////////

function main() {
  canvasContext.fillStyle = "blue";
  canvasContext.fillRect(0,0, canvas.width, canvas.height);
  update();
  draw();
  window.setTimeout(main, 1000/60);
}


// START PROGRAM //////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', start);