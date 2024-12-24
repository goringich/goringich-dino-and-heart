//cursor
const text = document.querySelector(".text")
text.innerHTML = text.textContent.replace(/\S/g,`<span class='curs'>$&\</span>`);

const elem = document.querySelectorAll(".curs")
for (let i = 0; i < elem.length; i++){
  elem[i].style.transform = "rotate(" + i * 19 + 'deg)'
}

document.addEventListener("mousemove", function(e){
  text.style.left = e.pageX + window.innerWidth / 500 + "px";
  text.style.top = e.pageY - window.innerHeight / 40 + "px"
})

const db = document.body
let td = text.style.display
db.addEventListener("mouseout", () => td = "none")
db.addEventListener("mousemove", () => td = "block")



let scrollP = document.getElementById("scroll")
let scroll = document.getElementById("scroll__progress")

let totalHeight = db.scrollHeight - window.innerHeight
window.onscroll = function(){
  let progress = (window.pageYOffset / totalHeight) * 100
  scroll.style.width = progress + "%"
}

scrollP.addEventListener("click", function(e){
  let height = e.pageX / document.querySelector("body").clientWidth * 100
  scroll.style.width = height + "%"
  let scY = document.querySelector("body").clientHeight * height / 100;

  window.scrollTo(0, scY)
})
