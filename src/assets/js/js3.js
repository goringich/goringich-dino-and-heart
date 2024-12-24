export function js3(){
  // clock
  const deg = 6
  const hr = document.querySelector("#hr")
  const mn = document.querySelector("#mn")
  const sc = document.querySelector("#sc")

  let hourD = document.getElementById("hour")
  let minutesD = document.getElementById("minutes")
  let secondsD = document.getElementById("seconds")
  let ampm = document.getElementById("ampm")

  const banner = document.getElementsByClassName("banner")[0]
  const blocks = document.getElementsByClassName("sec33__blocks")

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    let am = "AM"

    if (hh > 12){
      hh = hh - 12
      am = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 10) ? "0" + ss : ss

    hr.style.transform = `rotateZ(${(hh * 30) + (mm * deg/12)}deg)`;
    mn.style.transform = `rotateZ(${mm * deg}deg)`;
    sc.style.transform = `rotateZ(${ss * deg}deg)`;

    secondsD.innerHTML = ss + ":"
    minutesD.innerHTML = mm + ":"
    hourD.innerHTML = hh + ":"
    ampm.innerHTML = am + "&nbsp"
  })


  


  // 3d photo banner
  for (let i = 1; i < 1800; i++){
    banner.innerHTML += "<div class='sec33__blocks'></div>"
    const duration = Math.random() * 2
    blocks[i].style.animationDuration = duration + "s"
    blocks[i].style.animationDelay = duration + "s"
  }


  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Nn9P33zXRnw7DhJRNODhSlT-z7sS-z78q_uroG29ttXLIv99Gccvgt95yYpl60RxuuQ&usqp=CAU",
    "../images/onewidth/pexels-cátia-matos-1072179.jpg",
    "../images/onewidth/pexels-emiliano-arano-3608311.jpg",
    "../images/onewidth/pexels-tan-danh-1329711.jpg",
    "../images/onewidth/pexels-roberto-nickson-2885320.jpg",
    "../images/onewidth/pexels-luis-del-río-15286.jpg",
    "../images/onewidth/pexels-evie-shaffer-4004374.jpg",
    "../images/onewidth/pexels-emiliano-arano-3608311.jpg",
    "../images/onewidth/pexels-eberhard-grossgasteiger-844297.jpg",
    "../images/onewidth/pexels-cátia-matos-1072179.jpg",
    "../images/onewidth/pexels-bithin-raj-2763927.jpg",
    "../images/onewidth/pexels-arthouse-studio-4534200.jpg",
    "../images/onewidth/pexels-adrien-olichon-2387793.jpg"
  ]
  
  setInterval(() => $(".section33").toggleClass("active"), 10000)
  
  let time = 20000
  for (let image in images){
    setTimeout(() => {
      document.documentElement.style.setProperty('--img', `url(${image})`);
    }, time)
    time+=time
  }
}