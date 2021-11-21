canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width= 100;
rover_height= 90;

rover_x=10;
rover_y=10;

backgroundimage="mars.jpg";
rover_image="rover.png";

function add() {
    backgroundimage_tag=new Image();
    backgroundimage_tag.onload=upload_background();
    backgroundimage_tag.src=backgroundimage;

    roverimage_tag=new Image();
    roverimage_tag.onload=upload_rover();
    roverimage_tag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(backgroundimage_tag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(roverimage_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if (keypressed=="38") {
        up();
        console.log("up");
    }
    if (keypressed=="40") {
        down();
        console.log("down");
    }
    if (keypressed=="37") {
        left();
        console.log("left");
    }
    if (keypressed=="39") {
        right();
        console.log("right");
    }
}
