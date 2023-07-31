function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('¡poseNet se inicializo!');
}

function gotPoses(results) 
{
    if(results.lengts > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('#4FFF33');
}