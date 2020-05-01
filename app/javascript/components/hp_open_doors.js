const openDoor = (door) => {
  const drawLine = (lineParams) => {
    const element = lineParams[0].element;
    const cssProp = lineParams[0].direction;
    let lineSize = 1;
    const lineTimer = setInterval(() => {
      if (lineSize < lineParams[0].limit) {
        lineSize += 1;
        element.style.zIndex = '101';
        element.setAttribute('style', `${cssProp}: ${lineSize}%`);
      } else {
        clearInterval(lineTimer);
        lineParams.shift();
        if (lineParams.length > 0) {
          drawLine(lineParams);
        }
      }
    }, 10);
  };


  class Line {
    constructor(element, limit, direction) {
      this._element = element;
      this._limit = limit;
      this._direction = direction;
    }

    get element() {
      return this._element;
    }

    get limit() {
      return this._limit;
    }

    get direction() {
      return this._direction;
    }
  }

  const line1 = new Line(document.querySelector('.v-line-left'), 100, 'height');
  const line2 = new Line(document.querySelector('.h-line-left'), 100, 'width');
  const line3 = new Line(document.querySelector('.v-line-left'), 50, 'height');

  console.log(line1)

  // drawLine([line1, line2, line3]);
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
