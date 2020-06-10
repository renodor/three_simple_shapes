const openDoor = (doorNum) => {
  // define the lines to draw
  let lineDirection;
  if (doorNum === 1) {
    lineDirection = 'left';
  } else if (doorNum === 2) {
    lineDirection = 'middle';
  } else {
    lineDirection = 'right';
  }

  const linesToDraw = document.querySelectorAll(`.line-${lineDirection}`);

  // display the three lines of the door to open
  linesToDraw.forEach((line) => {
    const lineToDraw = line;
    lineToDraw.style.display = 'block';
  });

  // wait for the css animation of the first line to end, then display (open) the door
  // (the first line as a slightly faster animation thatn the other 2)
  linesToDraw[0].querySelector('path').addEventListener('animationend', () => {
    const currentDoor = document.querySelector(`.door${doorNum}`);
    currentDoor.style.zIndex = '102';
    const currentDoorOpen = document.querySelector(`.door${doorNum}-open`);
    currentDoorOpen.classList.add('opacity-transition');
  });
};

// define what pass open what door
const pass1 = '1214';
const pass2 = '3324';
const pass3 = '4123';

// check if currentPass equal one of the correct pass
// if yes, open the corresponding door
const checkPass = (currentPass) => {
  switch (currentPass) {
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

// method that will trigger the opening of the correct door when a password is found
const hpDoorPassword = () => {
  const bells = document.querySelectorAll('.bell-placeholder');

  // array to store the current combination
  const currentPass = [];

  // Each time one bell is clicked, store its id in the current pass array
  // and check if current pass is equal to one of the correct pass
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
