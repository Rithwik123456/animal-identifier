// https://teachablemachine.withgoogle.com/models/6ulGJ9FTX/ */

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio : true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6ulGJ9FTX/model.json", modelReady); 
}

function modelReady(){
    console.log("model has been initialized")
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)

    console.log(results)
    randomnumberr= Math.floor(Math.random()*255)+1
    randomnumberg= Math.floor(Math.random()*255)+1
    randomnumberb= Math.floor(Math.random()*255)+1

    document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
    document.getElementById("result_label").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+",1)";
    document.getElementById("result_confidence").innerHTML="Accuracy - "+results[0].confidence.toFixed(2)*100+"%";
    document.getElementById("result_confidence").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+",1)";

    img1=document.getElementById("ear")

    if(results[0].label=="Roaring"){
        img1.src="lion.gif";
    }
    else if(results[0].label=="Barking"){
        img1.src="dog.gif";
    }
    else if(results[0].label=="Mooing"){
        img1.src="cow.gif";
    }
    else if(results[0].label=="Meowing"){
        img1.src="cat-meow.gif"
    }
    else{
      img1.src="ear.png";
    }
}