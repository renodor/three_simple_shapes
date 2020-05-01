const hpDoorPassword = () => {
  const bells = document.querySelectorAll('.bell');

  const currentPass = [];

  const pass1 = '1214';
  const pass2 = '3324';
  const pass3 = '4123';

  const openDoor = (door) => {
    console.log(`open door ${door}`)
  };

  const checkPass = (tryPass) => {
    switch (tryPass) {
      case pass1:
        openDoor('1');
        break;
      case pass2:
        openDoor('2');
        break;
      case pass3:
        openDoor('3');
        break;
      default:
        // no default required, but did it for the linter :)
    }
  };

  bells.forEach((bell) => {
    bell.addEventListener('click', (event) => {
      // Add clicks to the current Pass
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
