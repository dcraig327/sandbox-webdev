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
    let backgroundSprite;
    let baloonSprite;
    let backgroundMusic;
    let baloonPos = {
        x: 0,
        y: 0
    };
    //timer variables measured in ms
    let lastFrame = 0;
    let curFrame = 0;
    let totalTime = 0;
    let totalFrames = 0;
    // FUNCTIONS //////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    function main() {
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");
        ctx.font = '24px serif';
        backgroundSprite = new Image();
        backgroundSprite.src = "../../assets/spr_background.jpg";
        baloonSprite = new Image();
        baloonSprite.src = "../../assets/spr_balloon.png";
        backgroundMusic = new Audio();
        backgroundMusic.src = "../../assets/snd_music.mp3";
        //backgroundMusic.play();
        backgroundMusic.volume = 0.4;
        document.onmousemove = handleMouseMove;
        gameLoop();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function update() {
    }
    ///////////////////////////////////////////////////////////////////////////////
    function draw() {
        drawImage(backgroundSprite, { x: 0, y: 0 });
        drawImage(baloonSprite, baloonPos);
        //show the timer
        totalTime += (1000.0 / (curFrame - lastFrame));
        totalFrames++;
        let avgTime = Math.round(totalTime / totalFrames);
        ctx.fillText(avgTime.toString(), 10, 50);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ///////////////////////////////////////////////////////////////////////////////
    /* FUNCTIONS GO HERE */
    ///////////////////////////////////////////////////////////////////////////////
    function handleMouseMove(evt) {
        baloonPos = { x: evt.pageX, y: evt.pageY };
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawImage(sprite, position) {
        ctx.save();
        ctx.translate(position.x, position.y);
        // able to add image rotation and scaling here
        ctx.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
        ctx.restore();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function startGameLoop() {
        lastFrame = curFrame;
        curFrame = performance.now();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function endGameLoop() {
        let currTime = performance.now();
        let time = 16 - (currTime - curFrame);
        if (time < 0)
            time = 0;
        window.setTimeout(gameLoop, time);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function gameLoop() {
        startGameLoop(); // timer is updated here
        update();
        clear();
        draw(); // framerate is rendered here  
        endGameLoop(); // last thing done in the game loop
    }
    // START PROGRAM //////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', main);
})(First || (First = {})); // end namespace First
