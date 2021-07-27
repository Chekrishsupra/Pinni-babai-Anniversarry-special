
function setup() {
    canvas= createCanvas(200,200);
    video = createCapture(VIDEO);  
    canvas.center(); 
    video.hide();
}
function draw() {
    image(video,0,0,200,200);
   }
function take_snapshot() {
    save("photo.png");
}