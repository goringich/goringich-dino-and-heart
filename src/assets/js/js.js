export default function js(goFuncSpan){
  function createBubble() {
    const section = document.querySelector(".section6");
    const createElement = document.createElement("span");
    createElement.classList.add("span")
    createElement.setAttribute('data-bubble', 'true')
    let size = Math.random() * 60;
  
    createElement.style.width = 20 + size + "px";
    createElement.style.height = 20 + size + "px";
    createElement.style.left = Math.random() * innerWidth + "px"
    section.appendChild(createElement)
  
    const rem = () => createElement.remove()
  
    createElement.addEventListener("click", rem)
    setTimeout(rem, 4000)
  
    return section
  }
  
  setInterval(createBubble , 550);
  
  
  
  //eyes
  document.querySelector(".section7").addEventListener("mousemove", () => {
    const eye = document.querySelectorAll(".eye")
  
    eye.forEach(function(eye){
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2) + pageXOffset;
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2) + pageYOffset;
  
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = "rotate(" + rotation + "deg)";
    })
  })


  const spans = {
    'section10': 494,
    'section11': 494,
    "loader": 20,
    "loader8": 8,
    "loader21": 20,
    "loader2": 4,
  }

  goFuncSpan(spans)
}