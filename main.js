Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('snapshot_div').innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
        console.log('Image is Captured');
    });
}   

console.log('ml5 version is' + ml5.version);

classifier = ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/_jRlcL02z/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model is Loaded');
}