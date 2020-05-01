const hpLightEffect = () => {
  let effectTimer;
  let lightSize = 3;
  const overlay = document.querySelector('.overlay');

  const setLightSize = (size) => {
    if (size >= 3) {
      overlay.style.setProperty('--lightsize', `${size}vmax`);
    }
  };

  setLightSize(lightSize);

  const updateLightPosition = (event) => {
    clearInterval();
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    overlay.style.setProperty('--cursorX', `${x}px`);
    overlay.style.setProperty('--cursorY', `${y}px`);
  };

  const shrinkLight = () => {
    clearInterval(effectTimer);
    effectTimer = setInterval(() => {
      lightSize -= 0.5;
      setLightSize(lightSize);
      if (lightSize <= 3) {
        clearInterval(effectTimer);
        setLightSize(3);
      }
    }, 10);
  };

  const growLight = () => {
    effectTimer = setInterval(() => {
      document.addEventListener('mouseup', shrinkLight);
      lightSize += 0.1;
      setLightSize(lightSize);
      if (lightSize >= 10) {
        clearInterval(effectTimer);
        setLightSize(10);
      }
    }, 10);
  };

  overlay.addEventListener('mousemove', updateLightPosition);
  overlay.addEventListener('touchmove', updateLightPosition);
  overlay.addEventListener('mousedown', growLight);

  const bellPlaceHolders = document.querySelectorAll('.bell-placeholder');

  bellPlaceHolders.forEach((bell) => {
    bell.addEventListener('mousemove', updateLightPosition);
  });
};

export default hpLightEffect;
