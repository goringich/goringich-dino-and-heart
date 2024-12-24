export default function js2(){
  let buta = document.querySelectorAll(".btn__scale")
  const butas = Array.from(buta, (i) => {
    i.addEventListener("mousemove", () => {
      i.style.transform = "scale(1.3) translate3d(-50%,0%,75px) translate(8%)"
    })   
    i.addEventListener("mouseout", () => {
      i.style.transform = "scale(1) translate3d(-50%,0%,75px) translate(0%)"
    })
  })


  function splitSpan(parent, text){
    const parentT = document.querySelector("." + parent)
    let arr = text.split('');
  
    for (let i = 0; i < text.length; i++) {
      parentT.insertAdjacentHTML("afterbegin", `
        <span style="--i:${i};">${arr[i]}</span>
      `);
    }
  }
  
  splitSpan("circle", 'Мама-привет-я-в-космосе!')


  const buttons = document.querySelectorAll(".btn__neon")
  buttons.forEach(btn => {
    btn.addEventListener("click", function(e){
      let x = e.clientX - e.target.offsetLeft
      let y = e.clientY - (document.clientHeight - e.target.offsetTop)

      x = x * btn.clientWidth / document.clientWidth

      let ripples = document.createElement("span")
      ripples.classList.add("ripples")
      ripples.style.left = x + "%"
      ripples.style.top = -y + "px"
      this.appendChild(ripples)

      setTimeout(() => ripples.remove(), 1000)
    })
  })




  const imageBox = document.querySelector(".images__box")
  const imageBox2 = document.querySelector(".images__box2")

  window.onmousemove = function (e){
    let x = e.clientX / 3
    let y = e.clientY / 2
    imageBox2.style.transform = "perspective(1000px) rotateY(" + x + "deg)"
    imageBox.style.transform = "perspective(1000px) rotateX(" + y + "deg) rotateY(35deg)"
  }
}