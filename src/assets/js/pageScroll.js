export default function pageScroll(){
  // fish scroll
  const side1 = document.getElementById("side1")
  const side2 = document.getElementById("side2")
  const section13 = document.getElementById("section13")
  const section13__inner = document.querySelector(".section13__inner")
  
  window.addEventListener("scroll", () => {
    let py = window.pageYOffset
    let s13ot = section13.offsetTop

    if (py - s13ot - 50 >= 0 && (py - s13ot + 50) * -1 <= 0){
      side2.style.left = py - s13ot + "px"
      side1.style.left = (py - s13ot) * -1 + "px"
    } else{
      side2.style.left = side1.style.left = 0
    }
    
    if (py + s13ot > section13.style.height){
      section13__inner.style.position = "static"
    }
  })



  gsap.timeline({
    scrollTrigger: {
      trigger: ".section28",
      start: "center center", //Animation start at this point
      end: "bottom end", //Animation end at this point
      markers: false,
      scrub: true,
      pin: true
    }
  })

  .from(".section28__h2", {opacity: 0})


  gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll__box",
      start: "center center", //Animation start at this point
      end: "bottom end", //Animation end at this point
      markers: false,
      scrub: true,
      pin: true
    }
  })

  .from(".scroll__box__text1", {x: innerWidth * 1})
  .from(".scroll__box__text2", {x: innerWidth * -1})
  .from(".scroll__box__text3", {x: innerWidth * 1})



  gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll__box--white",
        start: "center center", //Animation start at this point
        end: "bottom end", //Animation end at this point
        markers: false,
        scrub: true,
        pin: true
    }
  })

  .from(".scroll__box--white", {opacity: 0})
  .from(".scroll__box__text4", {y: innerHeight * 1})
  .from(".scroll__box__text5", {y: innerHeight * 1})
  .from(".scroll__box__text6", {y: innerHeight * 1})

  let section29 = document.querySelector(".section29")
  let section29__text2 = document.querySelector(".innerText2")
  let section29__text = document.querySelector(".innerText")
  let section29__inner1 = document.querySelector(".section29__inner1")

  window.addEventListener("scroll", function(){
    let value = window.scrollY - section29.getBoundingClientRect().top - scrollY

    section29__inner1.style.clipPath = "circle(" + value + "px at center center)"

    section29__text2.style.left = 100 - value / 5 + "%"
    section29__text.style.left = 100 - value / 5 + "%"
    let str = section29__text.style.left
    str = str.split('%').join('');

    if(str > 100){
      section29__inner1.style.clipPath = "circle(0px at center center)"
    }
  })



  const slide__cursor2 = document.getElementById("slideX2")
  window.onmousemove = function(e){
    let x = e.clientX
    slide__cursor2.style.left = x + "px"
  }
}