const dino = document.getElementById("dino")
const cactus= document.getElementById("cactus")
let counter = 0

cactus.addEventListener("animationiteration", function(){
  counter++; 
  console.log(counter);
})

document.addEventListener("keydown", () => jump())

function jump(){
  if (dino.classList != "jump"){
    dino.classList.add("jump")
  }
  setTimeout (function(){
    dino.classList.remove("jump")
  }, 800)
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

  if (cactusLeft < 90 && cactusLeft > 0 && dinoTop >= 140){
    alert(`Вы набрали ${counter} очков`)
    counter = 0
    cactus.style.right = "-100%"
  }
}, 10)