//keyboard event jQuery

  $(document).ready(function(){
  $(document).keydown(function(event){
    if(event.keyCode == 65){
     playAudio1();
    }
    else if(event.keyCode == 83){
     playAudio2();
    }
    else if(event.keyCode == 68){
     playAudio3();
    }
    else if(event.keyCode == 70){
     playAudio4();
    }
    else if(event.keyCode == 71){
     playAudio5();
    }
    else if(event.keyCode == 72){
     playAudio6();
    }
    else if(event.keyCode == 74){
     playAudio7();
    }
  });
  });


//Since i used onclick function,so I didnt code for mouse addEventListener in jQuery.

//Functions to play music

var x1 = document.getElementById("audio1");

function playAudio1() {
  x1.play();
}
var x2 = document.getElementById("audio2");
function playAudio2() {
  x2.play();
}

var x3 = document.getElementById("audio3");
function playAudio3() {
  x3.play();
}

var x4 = document.getElementById("audio4");
function playAudio4() {
  x4.play();
}

var x5 = document.getElementById("audio5");
function playAudio5() {
  x4.play();
}

var x6 = document.getElementById("audio6");
function playAudio6() {
  x6.play();
}

var x7 = document.getElementById("audio7");
function playAudio7() {
  x7.play();
}

//time taken for jQuery: 45min
