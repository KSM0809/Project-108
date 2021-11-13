function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zeuMBPdlv/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog= 0;
var cat= 0;
var horse= 0;
var elephant= 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected Horse - '+horse+' Detected Elephant - '+elephant+'';
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'dog barking.png';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'cat meowing.png';
      cat = cat + 1;
    } else if (results[0].label == "Neighing") {
        img.src = 'horse neighing.png';
        cat = cat + 1;
      } else if (results[0].label == "Trumpeting") {
        img.src = 'elephant trumpeting.png';
        cat = cat + 1;
      } else{
      img.src = 'ear.gif';
    }
  }
}
