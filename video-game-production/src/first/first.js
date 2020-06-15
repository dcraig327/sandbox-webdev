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
var First;
(function (First) {
    // INCLUDES ///////////////////////////////////////////////////////////////////
    // GLOBALS ////////////////////////////////////////////////////////////////////
    let canvas;
    let ctx;
    let baloonSprite;
    let baloonPos = {
        x: 100,
        y: 100
    };
    //ms of last frame
    let lastFrame = 0;
    //ms of current frame
    let curFrame = 0;
    //total ms of execution
    let totalTime = 0;
    //total number of frames of execution
    let totalFrames = 0;
    // FUNCTIONS //////////////////////////////////////////////////////////////////
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawImage(sprite, position) {
        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
        ctx.restore();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function start() {
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");
        ctx.font = '24px serif';
        baloonSprite = new Image();
        baloonSprite.src = "../../assets/spr_balloon.png";
        main();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function end() {
    }
    ///////////////////////////////////////////////////////////////////////////////
    function update() {
        var d = new Date();
        lastFrame = curFrame;
        curFrame = performance.now();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function draw() {
        ctx.fillStyle = "blue";
        drawImage(baloonSprite, baloonPos);
        //show the timer
        totalTime += (1000.0 / (curFrame - lastFrame));
        totalFrames++;
        var avgTime = Math.round(totalTime / totalFrames);
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
})(First || (First = {})); // end namespace First
