let panel1, arrow1, panel, arrow, arrowa1, arrow2, arrowa2, panel2;
let skins = []

function loadSkin(skin) {
    panel = skin[0];
    arrow = skin[1];
    arrowa = skin[2];
    arrowr = arrow;
    arrowd = arrow;
    arrowu = arrow;
    arrowl = arrow;
}

function setup() {
    arrow1 = loadImage('arrows/arrow1.png')
    panel1 = loadImage('panels/panel1.png')
    arrowa1 = loadImage('arrows/arrowa1.png')


    arrow2 = loadImage('arrows/arrow2.png')
    panel2 = loadImage('panels/panel2.png')
    arrowa2 = loadImage('arrows/arrowa2.png')
    createCanvas(400, 400);

    skins.push([panel1, arrow1, arrowa1])
    skins.push([panel2, arrow2, arrowa2])

    loadSkin(skins[1])

}



function drawArrows() {
    push()
    translate((width / 3) * 1, (height / 3) * 0)
    image(arrowu, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 3, (height / 3) * 1)
    rotate(90)
    image(arrowr, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 2, (height / 3) * 3)
    rotate(180)
    image(arrowd, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 0, (height / 3) * 2)
    rotate(270)
    image(arrowl, 0, 0, (width / 3), (height / 3))
    pop()
}

function drawPanels() {
    push()
    translate((width / 3) * 0, (height / 3) * 0)
    image(panel, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 2, (height / 3) * 0)
    image(panel, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 1, (height / 3) * 1)
    image(panel, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 0, (height / 3) * 2)
    image(panel, 0, 0, (width / 3), (height / 3))
    pop()
    push()
    translate((width / 3) * 2, (height / 3) * 2)
    image(panel, 0, 0, (width / 3), (height / 3))
    pop()
}

function getInput() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { arrowr = arrowa } else { arrowr = arrow }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { arrowd = arrowa } else { arrowd = arrow }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) { arrowu = arrowa } else { arrowu = arrow }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { arrowl = arrowa } else { arrowl = arrow }
}

function draw() {
    angleMode(DEGREES)
    background(220);
    getInput();
    drawArrows();
    drawPanels();



}