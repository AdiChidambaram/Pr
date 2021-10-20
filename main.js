pp = "";
hp = "";
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
leftWristY = 0;


function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    pn = ml5.poseNet(video, modelLoaded);
    pn.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Intialized");
}

function preload() {
    pp = loadSound("music.mp3");
    hp = loadSound("music2.mp3");
}

function draw() {
    image(video, 0 , 0, 450, 450);
}

function gotPoses(results) {
    if (results.legnth>0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        console.log("Left Wrist x cordinates = "+leftWristX);
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist y cordinates = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right Wrist x cordinates = "+rightWristX);
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist y cordinates = "+rightWristY);
    }
    
}