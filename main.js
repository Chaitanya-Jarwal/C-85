var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var rover_height=100;
var rover_width=90;
var rover_x=10;
var rover_y=10;

var array_images=["mars.jpg","1.jpg","2.jpg","3.jpg"];

random_number= Math.floor(Math.random()* 4)

console.log(random_number);

var background_image=array_images[random_number];
var rover_image="rover.png";

function add() {
    bg_image=new Image();
    bg_image.onload=upload_background;
    bg_image.src=background_image;
    rover_img=new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;
}

function upload_background() {
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}
function upload_rover() {
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e) {
    var key_press=e.keyCode;
    console.log(key_press);
    if(key_press=="37") {
        Left();
        console.log("Left key is pressed")
    }
    if(key_press=="38") {
        Up();
        console.log("Up key is pressed")
    }
    if(key_press=="39") {
        Right();
        console.log("Right key is pressed")
    }
    if(key_press=="40") {
        Down();
        console.log("Down key is pressed")
    }
}

function Left() {
    if(rover_x > 0) {
        rover_x=rover_x-10;
        console.log("When left key is pressed x ="+ rover_x + "and y =" + rover_y);
        upload_background();
        upload_rover();
    }
}

function Right() {
    if(rover_x <=700) {
        rover_x=rover_x + 10;
        console.log("When Right key is pressed x ="+ rover_x + "and y =" + rover_y);
        upload_background();
        upload_rover();
    }
}
function Up() {
    if(rover_y > 0) {
        rover_y=rover_y-10;
        console.log("When Up key is pressed x ="+ rover_x + "and y =" + rover_y);
        upload_background();
        upload_rover();
    }
}

function Down() {
    if(rover_y <= 500) {
        rover_y=rover_y+10;
        console.log("When Down key is pressed x ="+ rover_x + "and y =" + rover_y);
        upload_background();
        upload_rover();
    }
}