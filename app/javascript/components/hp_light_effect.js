

const hpLightEffect = () => {

  let timer;
  const overlay = document.querySelector(".overlay")
  console.log(overlay)
  const setLightSize = lightSize => {
    overlay.style.setProperty('--lightsize', lightSize + 'vmax')
  }

  const getLightSize = () => {
    return overlay.style.cssText.match(/\d+\.*\d*/)[0]
  }

  setLightSize(3)
  getLightSize(3)

  const update = e => {
    clearInterval();
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY

    overlay.style.setProperty('--cursorX', x + 'px')
    overlay.style.setProperty('--cursorY', y + 'px')
  }


  const grow = () => {
    let lightSize = 3
    timer = setInterval(function(){
      lightSize += 0.1
      setLightSize(lightSize)
      if (lightSize > 10) {
        clearInterval(timer)
      }
    }, 10);
  }


  const shrink = e => {
    let lightSize = getLightSize();
    clearInterval(timer);
    timer = setInterval(function(){
      lightSize -= 0.5
      setLightSize(lightSize)
        if (lightSize < 3) {
          clearInterval(timer)
        }
      }, 10);
  }


  overlay.addEventListener('mousemove',update)
  overlay.addEventListener('touchmove',update)

  overlay.addEventListener('mousedown', grow)

  overlay.addEventListener('click', shrink)

}

export { hpLightEffect }
