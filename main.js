var canvas= new fabric.Canvas('myCanvas');
var block_width= 30;
var block_height= 30;
var player_x= 10;
var player_y= 10;
var player_object= " ";
var block_object= " ";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object= Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
};

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
};

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed= e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == 80) {
        console.log("shift key and p key pressed together");
        block_width= block_width + 10;
        block_height= block_height + 10;
        document.getElementById("width-value").innerHTML= block_width;
        document.getElementById("height-value").innerHTML= block_height;
    };
    if (e.shiftKey == true && keypressed == 77) {
        console.log("shift key and m key pressed together");
        block_width= block_width - 10;
        block_height= block_height - 10;
        document.getElementById("width-value").innerHTML= block_width;
        document.getElementById("height-value").innerHTML= block_height;
    };
    if (keypressed == 70) {
        new_image('face.png');
    };
    if (keypressed == 66) {
        new_image('body.png');
    };
    if (keypressed == 76) {
        new_image('legs.png');
    };
    if (keypressed == 82) {
        new_image('right_hand.png');
    };
    if (keypressed == 72) {
        new_image('left_hand.png');
    };
    if (keypressed == 38) {
        console.log("up");
        up();
    };
    if (keypressed == 40) {
        console.log("down");
        down();
    };
    if (keypressed == 37) {
        console.log("left");
        left();
    };
    if (keypressed == 39) {
        console.log("right");
        right();
    };
};
function up() {
    if (player_y > 0) {
        player_y= player_y - 30;
        console.log("block height = " + block_height);
        console.log("player x = " + player_x + " & player y = " + player_y);
        canvas.remove(player_object);
        player_update();
    };
};
function down() {
    if (player_y < 450) {
        player_y= player_y + 30;
        console.log("block height = " + block_height);
        console.log("player x = " + player_x + " & player y = " + player_y);
        canvas.remove(player_object);
        player_update();
    };
};
function left() {
    if (player_x > 0) {
        player_x= player_x - 30;
        console.log("block width = " + block_width);
        console.log("player x = " + player_x + " & player y = " + player_y);
        canvas.remove(player_object);
        player_update();
    };
};
function right() {
    if (player_x < 660) {
        player_x= player_x + 30;
        console.log("block width = " + block_width);
        console.log("player x = " + player_x + " & player y = " + player_y);
        canvas.remove(player_object);
        player_update();
    };
};