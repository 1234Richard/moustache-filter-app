moustacheX = 0;
moustacheY = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(500, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        moustacheX = results[0].pose.nose.x - 50;
        moustacheY = results[0].pose.nose.y + 30;
    }
}

function draw() {
    image(video, 0, 0, 500, 400);
    image(moustache, moustacheX, moustacheY, 100, 55);
}

function save() {
    save("filterMoustacheImage");
}