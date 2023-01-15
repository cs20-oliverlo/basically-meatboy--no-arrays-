// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1080;
cnv.height = 720;

// Global Variables (Once)
let mouseIsPressed = false;

// Global Variables (Reset)
let state;
let mode;
let lvl;
let levelSection;
let numLvls;
let selector;
let KeyW, KeyS, KeyA, KeyD, Space, Enter;
let background, border1, border2, border3, border4, floor1, floor2, wall1, wall2, wall3, wall4, platform1, spike1, spike2, arrow, flag, spamBoy;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
    if (mode === "lvlSelect") {

    } else {

    }
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function mousedownHandler() {
  mouseIsPressed = true;

  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code === "KeyW") {
    KeyW = true;
  } else if (event.code === "KeyS") {
    KeyS = true;
  } else if (event.code === "KeyD") {
    KeyD = true;
  } else if (event.code === "KeyA") {
    KeyA = true;
  } else if (event.code === "Space") {
    Space = true;
  } else if (event.code === "Enter") {
    Enter = true;
  }
}

function keyupHandler(event) {
  if (event.code === "KeyW") {
    KeyW = false;
  } else if (event.code === "KeyS") {
    KeyS = false;
  } else if (event.code === "KeyD") {
    KeyD = false;
  } else if (event.code === "KeyA") {
    KeyA = false;
  } else if (event.code === "Space") {
    Space = false;
  } else if (event.code === "Enter") {
    Enter = false;
  }
}