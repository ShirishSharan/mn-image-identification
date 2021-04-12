function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mlcall= ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded() {
console.log("model loaded !");
}

function draw(){
  image(video, 0, 0, 300, 300);
  mlcall.classify(video,gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
  }
}



