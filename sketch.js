var ball;
var redBlocks = [];
var greenBlocks = [];
var score = 0;

document.addEventListener("keydown", function (e) {
    if (e.keyCode == '38')
        ball.y -= 45;
});

function setup() {
    createCanvas(700, 550);
    ball = new Ball();
    redBlocks.push(new RedBlock());
    greenBlocks.push(new GreenBlock());
}

function showScores() {
    textSize(32);
    text('score: ' + score, 1, 32);
}
function gameover() {
    noLoop();
    textSize(64);
    textAlign(CENTER, CENTER);
    text('GAMEOVER', width / 2, height / 2);
    text('Score: ' + score, width / 2, height / 3);
    textAlign(LEFT, BASELINE);
}

function draw() {
    background(0, 0, 0);
    fill(55, 0, 100);
    ball.show();
    if (ball.atbase()) {
        gameover();
        previousFrame();
    }
    ball.update();
    if (frameCount % 45 == 0) {
        redBlocks.push(new RedBlock());
    }
    if (frameCount % 120 == 0) {
        greenBlocks.push(new GreenBlock());
    }

    for (var i = 0; i < redBlocks.length; i++) {
        redBlocks[i].show();
        redBlocks[i].update();
        if (redBlocks[i].hits(ball)) {
            gameover();
            previousFrame();
        }
        if (score > 500) {
            redBlocks[i].speed = 7;
        }
        if (score > 650) {
            redBlocks[i].speed = 10;
        }
        if (score > 800) {
            redBlocks[i].speed = 12;
        }

    }

    for (var i = 0; i < greenBlocks.length; i++) {
        greenBlocks[i].show();
        greenBlocks[i].update();
        if (greenBlocks[i].hits(ball)) {
            score += 1;
        }
        if (score > 800) {
            greenBlocks[i].speed = 2;
        }

    }
    showScores();

}
var game = setInterval(draw, 100);

