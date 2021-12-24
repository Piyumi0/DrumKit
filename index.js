
//detecting button press
var numberOfdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfdrumbutton; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);


});
}

//detecting keyboard press

document.addEventListener("keypress", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
            var crsah = new Audio("sounds/crash.mp3");
            crsah.play();
            break;
                case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
                      case "s":
                      var snare = new Audio("sounds/snare.mp3");
                      snare.play();
                      break;
                              case "d":
                              var tom1 = new Audio("sounds/tom-1.mp3");
                              tom1.play();
                              break;
                                      case "j":
                                      var tom2 = new Audio("sounds/tom-2.mp3");
                                      tom2.play();
                                      break;
                                          case "k":
                                          var tom3 = new Audio("sounds/tom-3.mp3");
                                          tom3.play();
                                          break;
                                              case "l":
                                              var tom4 = new Audio("sounds/tom-4.mp3");
                                              tom4.play();
                                              break;

    default: console.log(buttonInnerHTML);
 
  }
}

//adding shade to clicked buttons
function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey)
//pressed is defined in css as .pressed
  activeButton.classList.add("pressed");

//remove that pressed shade in the buttons
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
