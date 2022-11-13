status="";

function preload(){
    img= loadImage('dog.jpg');
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    obbjectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: detecting object";

}

function modelLoaded(){
    status=true;
    objectDetctor.detect(img, gotResult);
    console.log("model is loaded");

}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
   
        console.log(results);

    
}