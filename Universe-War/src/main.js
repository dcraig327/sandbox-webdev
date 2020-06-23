///////////////////////////////////////////////////////////////////////////////
// main.js
// --------
// 
/*****************************************************************************/
"use strict";
var Main;
(function (Main) {
    // INCLUDES ///////////////////////////////////////////////////////////////////
    // GLOBALS ////////////////////////////////////////////////////////////////////
    const DEBUG = false;
    let canvas;
    let ctx;
    let now = 0;
    let spritesStillLoading = 0;
    let playerSprite;
    let playerShipPosition = { x: 400, y: 500 };
    let playerProjectile;
    let playerProjectilePosition = { x: 0, y: 0 };
    let playerProjectileDeath = 0;
    const PLAYER_PROJECTILE_TTL = 1000;
    let keyboard = { keyDown: "" };
    let mouse = {
        position: { x: 0, y: 0 },
        leftDown: false
    };
    //timer variables store time in ms, displays frames over the past second
    const TIMER_DURATION = 1000; //ms
    let timerLastCalculation = 0;
    let timerFrameCount = 0;
    let timerAverageFPS = 0;
    // FUNCTIONS //////////////////////////////////////////////////////////////////
    function main() {
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");
        ctx.font = '24px serif';
        playerSprite = loadImage("../assets/PlayerShip.png");
        playerProjectile = loadImage("../assets/PlayerProjectile.png");
        document.onmousemove = handleMouseMove;
        document.onmousedown = handleMouseDown;
        document.onmouseup = handleMouseUp;
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;
        loadAssets();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function input() {
        keyboardInput();
        mouseInput();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function update() {
        if (playerProjectileDeath <= now) {
            playerProjectileDeath = 0;
        }
        else if (playerProjectileDeath !== 0) {
            playerProjectilePosition.y--;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    function draw() {
        drawFPS();
        drawPlayerShip();
        drawPlayerProjectile();
        if (DEBUG)
            drawDebugInfo();
    }
    ///////////////////////////////////////////////////////////////////////////////
    function clear() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function keyboardInput() {
        switch (keyboard.keyDown) {
            case "ArrowUp":
                playerShipPosition.y--;
                break;
            case "ArrowDown":
                playerShipPosition.y++;
                break;
            case "ArrowLeft":
                playerShipPosition.x--;
                break;
            case "ArrowRight":
                playerShipPosition.x++;
                break;
            default:
                break;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    function mouseInput() {
        //TODO: there's more to add
        if (mouse.leftDown) {
            if (playerProjectileDeath === 0) {
                playerProjectileDeath = now + PLAYER_PROJECTILE_TTL;
                playerProjectilePosition = playerGunPosition();
            }
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    function playerGunPosition() {
        let gunPosition = {
            x: playerShipPosition.x + playerSprite.width / 2,
            y: playerShipPosition.y
        };
        return (gunPosition);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawDebugInfo() {
        ctx.fillStyle = 'white';
        ctx.fillText("now: " + now, 100, 50);
        ctx.fillText("death: " + playerProjectileDeath, 100, 100);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawFPS() {
        ctx.fillStyle = 'white';
        ctx.fillText(timerAverageFPS.toString() + " FPS", 10, 50);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawPlayerShip() {
        drawImage(playerSprite, playerShipPosition);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function drawPlayerProjectile() {
        if (playerProjectileDeath !== 0)
            drawImage(playerProjectile, playerProjectilePosition);
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleKeyDown(evt) {
        keyboard.keyDown = evt.code;
    }
    ///////////////////////////////////////////////////////////////////////////////
    function handleKeyUp(evt) {
        keyboard.keyDown = "";
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
    function timerTick() {
        timerFrameCount++;
        now = performance.now();
        let delta = now - timerLastCalculation;
        if (delta > TIMER_DURATION) {
            //timerAverageFPS = Math.trunc(TIMER_DURATION * (timerFrameCount / delta));
            timerAverageFPS = ~~(TIMER_DURATION * (timerFrameCount / delta));
            timerLastCalculation = now;
            timerFrameCount = 0;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////
    function gameLoop() {
        timerTick();
        input();
        update();
        clear();
        draw();
        window.requestAnimationFrame(gameLoop);
    }
    // START PROGRAM //////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', main);
})(Main || (Main = {})); // end namespace Main
