new p5();
let stage = "level";
let level = 0;
const gridSize = 10;
//GRID IDS
//ID 0: Air : Passable
//ID 1: Cube : Obstruct
//ID 2: Disabled Goal : Passable
//ID 2.1: Enabled Goal : Ends Level
//ID 3: Spawn : Where you spawn
//ID 4: Kill : Kills Player
//ID 5: Key : Unlocks Goal
let grid_test1 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 0, 0, 4, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
    0, 0, 0, 0, 5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
let grid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

function setup() {
    createCanvas(400, 400);
}

function canv2grid(vec) {
    return createVector((width / gridSize) * vec.x, (height / gridSize) * vec.y)
}

function arr2grid(i) {
    return createVector(i % gridSize, Math.floor(i / gridSize))
}

function drawgrid() {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] == 1) { // Stone
            rectMode(CENTER);
            fill(color(170));
            rect(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize)
        }
        if (grid[i] == 2.1) { // Goal
            rectMode(CENTER);
            fill(color(255, 255, 0));
            ellipse(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize)
        }
        if (grid[i] == 2) { // Goal
            rectMode(CENTER);
            fill(color(200, 200, 200));
            ellipse(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize)
        }
        if (grid[i] == 3) { // Goal
            rectMode(CENTER);
            fill(color(218, 165, 32));
            ellipse(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize)
        }
        if (grid[i] == 4) { // Kill
            rectMode(CENTER);
            fill(color(255, 69, 0));
            rect(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize)
        }
        if (grid[i] == 5) { // Key
            rectMode(CENTER);
            fill(color(255, 255, 0));
            rect(canv2grid(arr2grid(i)).x, canv2grid(arr2grid(i)).y, width / gridSize, height / gridSize / 5)
        }
    }
}

function getCol(p) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] == 1) {
            if ((p.pos.x == arr2grid(i).x) && (p.pos.y == arr2grid(i).y)) {
                return true;
            }
        }
        if (grid[i] == 2.1) {
            if ((p.pos.x == arr2grid(i).x) && (p.pos.y == arr2grid(i).y)) {
                stage = "clear";
            }
        }
        if (grid[i] == 3 && p.spawn != arr2grid(i)) { // Goal
            p.spawn = arr2grid(i)
        }
        if (grid[i] == 4) {
            if ((p.pos.x == arr2grid(i).x) && (p.pos.y == arr2grid(i).y)) {
                loadStage(stage)
            }
        }
        if (grid[i] == 5) {
            if ((p.pos.x == arr2grid(i).x) && (p.pos.y == arr2grid(i).y)) {
                for (let o = 0; o < grid.length; o++) {
                    if (grid[o] == 2) { // Goal
                        grid[o] = 2.1;
                    }
                    grid[i] = 0;
                }
            }
        }


    }
}

const Player = {
    spawn: createVector(5, 5),
    pos: createVector(5, 5),
    cooldown: 0,
    coolSet: 20,
    reset() {
        this.pos = this.spawn
        this.cooldown = 0;
    },
    draw() {
        fill(color(173, 216, 230))
        circle(canv2grid(this.pos).x, canv2grid(this.pos).y, 25)
    },
    input() {
        if (this.cooldown != 0) {
            this.cooldown++;
            if (this.cooldown >= this.coolSet) { this.cooldown = 0; }
        }
        if (keyIsDown(RIGHT_ARROW)) {
            if (this.cooldown == 0) {
                this.pos.x++;
                if (getCol(this)) { this.pos.x--; } else { this.cooldown = 1; }
            }
        }
        if (keyIsDown(LEFT_ARROW)) {
            if (this.cooldown == 0) {
                this.pos.x--;
                if (getCol(this)) { this.pos.x++; } else { this.cooldown = 1; }
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (this.cooldown == 0) {
                this.pos.y++;
                if (getCol(this)) { this.pos.y--; } else { this.cooldown = 1; }
            }
        }
        if (keyIsDown(UP_ARROW)) {
            if (this.cooldown == 0) {
                this.pos.y--;
                if (getCol(this)) { this.pos.y++; } else { this.cooldown = 1; }
            }
        }
    },
    update() {
        this.input()
        this.draw()
    }
}

function loadStage(id) {
    if (id == "test1") {
        grid = grid_test1;
        stage = "test1"
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] == 3 && Player.spawn != arr2grid(i)) { // Goal
                Player.spawn = arr2grid(i)
            }
        }
        Player.reset()
    }
}
loadStage("test1")


function draw() {
    background(220);
    if (stage == "test1") {
        drawgrid();
        Player.update();
    }
    if (stage == "clear") {
        text("CLEAR", 20, 20)
    }
}