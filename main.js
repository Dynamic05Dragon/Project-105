//https://teachablemachine.withgoogle.com/models/AHWwfbYCa/
Webcam.set({
    width: 350,
    height: 300,
    image_format:'jpg',
    jpg_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AHWwfbYCa/",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function check(){
    img=document.getElementById('captured_img');
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if(error){
    console.log(error);
    }
    else{
        console.log(result);
        document.getElementById(result_object_name).innerHTML=result[0].label;
        document.getElementById(result_object_accuracy).innerHTML=result[0].confidence.toFixed(3);
    }
}

    