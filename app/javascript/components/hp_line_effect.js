const hpLinesEffect = () => {
  const circleButton = document.querySelector('.circle-button-placeholder');

  const drawCircleLine2 = () => {
    const vLine = document.querySelector('.circle-vline2');
    let lineHeight = 1;
    const lineTimer = setInterval(() => {
      if (lineHeight < 100) {
        lineHeight += 1;
        vLine.style.zIndex = '101';
        vLine.style.height = `${lineHeight}%`;
      } else {
        clearInterval(lineTimer);
      }
    }, 10);
  };

  const drawCircleLine1 = () => {
    const hLine = document.querySelector('.circle-hline');
    let lineWidth = 1;
    const lineTimer = setInterval(() => {
      if (lineWidth < 60) {
        lineWidth += 1;
        hLine.style.zIndex = '101';
        hLine.style.width = `${lineWidth}%`;
      } else {
        clearInterval(lineTimer);
        drawCircleLine2();
      }
    }, 10);
  };

  circleButton.addEventListener('click', drawCircleLine1);
};

export default hpLinesEffect;
