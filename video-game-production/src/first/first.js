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
    let backgroundMusic;
    let backgroundSprite;
    let baloonSprite;
    let spritesStillLoading = 0;
    let baloonPos = {
        x: 0,
        y: 0
    };
    let keyboard = { keyDown: -1 };
    let mouse = {
        position: { x: 0, y: 0 },
        leftDown: false
    };
    //timer variables measured in ms
    let lastFrame = 0;
    let curFrame = 0;
    let totalTime = 0;
    let totalFrames = 0;
    // FUNCTIONS //////////////////////////////////////////////////////////////////
    function main() {
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");
        ctx.font = '24px serif';
        backgroundSprite = loadImage("../../assets/spr_background.jpg");
        baloonSprite = loadImage("../../assets/spr_balloon.png");
        backgroundMusic = new Audio();
        backgroundMusic.src = "../../assets/snd_music.mp3";
        //backgroundMusic.play();
        backgroundMusic.volume = 0.4;
        document.onmousemove = handleMouseMove;
        document.onmousedown = handleMouseDown;
        document.onmouseup = handleMouseUp;
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;
        loadAssets();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function update() {
        baloonPos = mouse.position;
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
    function handleKeyDown(evt) {
        keyboard.keyDown = evt.keyCode;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleKeyUp(evt) {
        keyboard.keyDown = -1;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleMouseMove(evt) {
        mouse.position.x = evt.pageX;
        mouse.position.y = evt.pageY;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleMouseDown(evt) {
        if (evt.which === 1)
            mouse.leftDown = true;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleMouseUp(evt) {
        if (evt.which === 1)
            mouse.leftDown = false;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function loadImage(imageName) {
        let image = new Image();
        image.src = imageName;
        spritesStillLoading++;
        image.onload = function () {
            spritesStillLoading--;
        };
        return image;
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
    function loadAssets() {
        if (spritesStillLoading == 0)
            gameLoop();
        else
            window.setTimeout(loadAssets, 1);
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
        //  window.setTimeout(gameLoop, time);
        window.requestAnimationFrame(gameLoop);
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
