
function sound_identify(){
    navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mNud2t-gb/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumberR=Math.floor(Math.random()*255)+1;
        randomNumberG=Math.floor(Math.random()*255)+1;
        randomNumberB=Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").innerHTML="I can hear-"+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound_name").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        document.getElementById("accuracy").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        img1=document.getElementById("C1");
        img2=document.getElementById("C2");
        img3=document.getElementById("C3");
        img4=document.getElementById("C4");
        if(results[0].label=="Clap"){
            img1.src="I1.gif";
            img2.src="I2.png";
            img3.src="I3.jpeg";
            img4.src="I4.png";
        }
        else if(results[0].label=="bell"){
            img1.src="I1.png";
            img2.src="I2.gif";
            img3.src="I3.jpeg";
            img4.src="I4.png";
        }
        else if(results[0].label=="Whistle"){
            img1.src="I1.png";
            img2.src="I2.png";
            img3.src="I3.gif";
            img4.src="I4.png";
        }
        else{
            img1.src="I1.png";
            img2.src="I2.png";
            img3.src="I3.jpeg";
            img4.src="I4.gif";
        }




    }
}