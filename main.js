picture="";
objects = [];
status="";
function preload()
{
picture = loadImage("dog_cat.jpg");
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML ="Status: Detecting Objects";
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectDetector.detect(picture, gotResult);
}
function gotResult(results)
{
if(error)
{
console.error(error);
}
console.log(results);
objects=results;
}
function draw()
{
image(picture, 0,0,500,300);
fill("red")
text("Dog",45,75)
noFill();
stroke("red");
rect(30,50,450,350);

fill("red")
text("Cat",240,70)
noFill()
stroke("red");
rect(220,50,200,250)
}