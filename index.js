
// To produce sound on mouse click
var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    sound(key);
    buttonAnimation(key);
  });
}
// To produce sound on key press
document.addEventListener("keypress",function(event){
   var k=event.key;
   sound(k);
  buttonAnimation(k);
 });


// Function to produce sound
function sound(key){
  if (key == 'w') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (key == 'a') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (key == 's') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (key == 'd') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if (key == 'j') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (key == 'k') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  if (key == 'l') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}

// Button Animation when key is pressed

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
