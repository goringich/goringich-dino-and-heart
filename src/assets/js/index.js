import js from "./js.js";
import js2 from "./js2.js";
import {js3} from "./js3.js";
import pageScroll from "./pageScroll.js";
import {particles} from "./parcticles.js";
import {textFly} from "./anime.min.js";
import {Particle3} from "./parcticles3.js";
import {vanilaM} from "./vanila2.js";
import {VanillaTilt} from "./vanila";
import {imageFlyEl} from "./imageFlyEl.js";
import {imgCursor} from "./img3dCursor.js"
// import pixi from "./pixi.js";
import anime from "animejs";

const url = window.location.href;

const addActive = el => el.classList.add("active")
const remActive = el => el.classList.remove("active")

const nav = document.querySelector(".navigation")
const burger = document.querySelector(".burger")
const burgerParent = document.querySelector(".burger__parent")
const scroll = document.getElementById("scroll")

burgerParent.addEventListener("mouseout", () => remActive(burger))
burgerParent.addEventListener("mousemove", () => addActive(burger))
burgerParent.addEventListener("click", () => addActive(nav))


function addSpan(section, count){
  section = document.querySelector(section)
  for (let i = 1; i <= count; i++) {
    let span = document.createElement("span");
    span.style = `--i:${i};`;
    section.appendChild(span);
  }
}

const scrollNone = () => scroll.style.display = "none";

function goFuncSpan(spans){
  for (let span in spans){
    const value = spans[span]
    addSpan(`.${span}`, value)
  }
}

const params = {
  "Index": () => {
    js(goFuncSpan);
    particles();
  },
  "Index2": () => {
    js2();
    vanilaM(VanillaTilt);
  },
  "Index3": () => {
    js3();
    textFly(anime);
    Particle3();
    // pixi();
    imageFlyEl();
    imgCursor();
  },
  "pageScroll": () => pageScroll(),
  "Дядя Леша": () => {
    scrollNone()
    burger.classList.add("Alex")
  }
}

function pageScript(){
  for (let param in params){
    const value = params[param]
    
    if (url === 'http://localhost:3000/'){
      console.log(document.title);
      document.addEventListener("DOMContentLoaded", () => {
        addActive(nav)
        remActive(burger)
      })
    } else if(document.title === `${param}`){
      document.addEventListener("DOMContentLoaded", () => {
        remActive(burger)
        remActive(nav)
      })
      value()
    }
  }
};
pageScript()



// if (document.title === `${param}`){
//   value()
//   window.onload = () => {
//     nav.classList.remove("active")
//     burger.classList.remove("active")
//   }
// } else 