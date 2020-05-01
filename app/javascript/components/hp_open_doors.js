const openDoor = (door) => {
  const drawLine = (lineParams) => {
    const { element, direction, limit } = lineParams[0];
    let lineSize = 1;
    const lineTimer = setInterval(() => {
      if (lineSize < limit) {
        lineSize += 1;
        element.style.zIndex = '101';
        element.setAttribute('style', `${direction}: ${lineSize}%`);
      } else {
        clearInterval(lineTimer);
        lineParams.shift();
        if (lineParams.length > 0) {
          drawLine(lineParams);
        }
      }
    }, 10);
  };

  const createLine = (element, direction, limit) => ({ element, direction, limit });

  if (door === 1) {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.h-line-left'), 'width', 100);
    const line3 = createLine(document.querySelector('.v-line-left'), 'height', 50);
    drawLine([line1, line2, line3]);
  } else if (door === 2) {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.v-line-middle'), 'height', 50);
    drawLine([line1, line2]);
  } else {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.h-line-right'), 'width', 100);
    const line3 = createLine(document.querySelector('.v-line-right'), 'height', 50);
    drawLine([line1, line2, line3]);
  }
};


const hpDoorPassword = () => {
  const bells = document.querySelectorAll('.bell');

  // array to store the current combination
  const currentPass = [];

  // define what pass open what door
  const pass1 = '1214';
  const pass2 = '3324';
  const pass3 = '4123';

  // check if currentPass equal one of the correct pass
  const checkPass = (tryPass) => {
    switch (tryPass) {
      case pass1:
        openDoor(1);
        break;
      case pass2:
        openDoor(2);
        break;
      case pass3:
        openDoor(3);
        break;
      default:
        // no default required, but did it for the linter :)
    }
  };

  // Each time one bell is click, stor its id in the current pass array
  bells.forEach((bell) => {
    bell.addEventListener('click', (event) => {
      // Only store the last clicked bells id
      if (currentPass.length < 4) {
        currentPass.push(event.currentTarget.dataset.id);
      } else {
        currentPass.shift();
        currentPass.push(event.currentTarget.dataset.id);
      }

      checkPass(currentPass.join(''));
    });
  });
};

export default hpDoorPassword;
