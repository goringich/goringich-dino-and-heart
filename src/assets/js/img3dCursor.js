export function imgCursor(){
  const sec38 = document.querySelector(".section38")
  let app = new PIXI.Application(
    {
      width: window.innerWidth,
      height: window.innerHeight
    }
  )
  sec38.appendChild(app.view)
  
  let img = new PIXI.Sprite.from("../assets/images/pikachu-768x432.jpg")
  img.width = window.innerWidth
  img.height = window.innerHeight

  app.stage.addChild(img)

  let depthMap = new PIXI.Sprite.from("../assets/images/pikachu-768x432 sec.jpg")
  depthMap.width = window.innerWidth;
  depthMap.height = window.innerHeight;
  app.stage.addChild(depthMap)

  let displacementFilters = new PIXI.filters.DisplacementFilter(depthMap)
  app.stage.filters = [displacementFilters]

  window.onmousemove = function(e){
    displacementFilters.scale.x = (window.innerWidth / 2 - e.clientX) / 20
    displacementFilters.scale.y = (window.innerHeight / 2 - e.clientY) / 20
  }
}