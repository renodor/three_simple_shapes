const hpLinesEffect = () => {
  const key = document.querySelector('.key');

  const openDoors = (door) => {
    console.log(`open door ${door}`);
  };


  const drawHline = () => {
    const hLine = document.querySelector('.h-line-middle');
    let lineHeight = 1;
    const lineTimer = setInterval(() => {
      if (lineHeight < 100) {
        lineHeight += 1;
        hLine.style.zIndex = '101';
        hLine.style.height = `${lineHeight}%`;
      } else {
        clearInterval(lineTimer);
      }
    }, 10);
  };

  const drawVLine = () => {
    const vLine = document.querySelector('.v-line-bottom');
    let lineWidth = 1;
    const lineTimer = setInterval(() => {
      if (lineWidth < 100) {
        lineWidth += 1;
        vLine.style.zIndex = '101';
        vLine.style.height = `${lineWidth}%`;
      } else {
        clearInterval(lineTimer);
        drawHline();
      }
    }, 10);
  };

  key.addEventListener('click', drawVLine);
};

export default hpLinesEffect;
