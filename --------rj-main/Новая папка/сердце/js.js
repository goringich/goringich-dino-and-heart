function createBubble() {
  const section = document.querySelector(".section6");
  const createElement = document.createElement("span");
  createElement.classList.add("span")
  createElement.setAttribute('data-bubble', 'true')
  var size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px"
  section.appendChild(createElement)

  function rem(){
    createElement.remove()
        // setTimeout(rem, 400)
  }

  createElement.addEventListener("click", () => {
    // createElement.classList.add("sc")
    // // createElement.style.cssText = "transform: scale(1.1)"
    // // createElement.style.cssText = "width: 500px"
    // // createElement.style.width = "300px"
    // createElement.style.transform = "scale(1.5)"
    // // console.log(createElement.style.cssText)
    // // console.log("lol");
    rem()
  })

  setTimeout(() => {
    rem()
  }, 4000)

  return section
}

setInterval(createBubble , 550);



//eyes
document.querySelector(".section7").addEventListener("mousemove", eyeball)

function eyeball() {
  const eye = document.querySelectorAll(".eye")

  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rotation + "deg)";
  })
}


//cursor
const text = document.querySelector(".text")
text.innerHTML = text.textContent.replace(/\S/g,
  "<span class='curs'>$&</span>");

const elem = document.querySelectorAll(".curs")
for (let i = 0; i < elem.length; i++){
  elem[i].style.transform = "rotate(" + i * 19 + 'deg)'
}

document.addEventListener("mousemove", function(e){
  text.style.left = e.pageX + "px";
  text.style.top = e.pageY + "px"
})