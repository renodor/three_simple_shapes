const openDoor = (doorNum) => {
  const doorAnimation = () => {
    const currentDoor = document.querySelector(`.door${doorNum}`);
    currentDoor.style.zIndex = '102';
  };

  // recursive function that draw n number of lines one after the other (with n = lineParams.length)
  // (calling-back itslef in the else statement if there are still lines to draw)
  // and then call the doorAnimation function
  const drawLine = (lineParams) => {
    const lineLefts = document.querySelectorAll('.line-left');

    lineLefts.forEach((line) => {
      const lineToDraw = line;
      lineToDraw.style.display = 'block';
    });

    // need to be asynchronus (or as a callback)
    // so that door animation appear only once lines are drawn
    doorAnimation();
    // const { element, direction, limit } = lineParams[0];
    // let lineSize = 1;
    // const lineTimer = setInterval(() => {
    //   if (lineSize < limit) {
    //     lineSize += 1;
    //     element.setAttribute('style', `${direction}: ${lineSize}%`);
    //   } else {
    //     clearInterval(lineTimer);
    //     lineParams.shift();
    //     if (lineParams.length > 0) {
    //       drawLine(lineParams);
    //     } else {
    //       doorAnimation();
    //     }
    //   }
    // }, 10);
  };

  // function to help create line objects with an element (html dom element),
  // a direction (width or height), and a limit (%)
  const createLine = (element, direction, limit) => ({ element, direction, limit });

  // draw lines corresponding to the door that need to be open
  if (doorNum === 1) {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.h-line-left'), 'width', 100);
    const line3 = createLine(document.querySelector('.v-line-left'), 'height', 100);
    drawLine([line1, line2, line3]);
  } else if (doorNum === 2) {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.v-line-middle'), 'height', 100);
    drawLine([line1, line2]);
  } else {
    const line1 = createLine(document.querySelector('.v-line-bottom'), 'height', 100);
    const line2 = createLine(document.querySelector('.h-line-right'), 'width', 100);
    const line3 = createLine(document.querySelector('.v-line-right'), 'height', 100);
    drawLine([line1, line2, line3]);
  }
};


const hpDoorPassword = () => {
  const bells = document.querySelectorAll('.bell-placeholder');

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

  // Each time one bell is click, store its id in the current pass array
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
