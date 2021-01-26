const randomColor = require('randomcolor');

export default function randomize() {
  const color = randomColor();
  return color;
  /*console.log(color);*/
  /*return function setColorAndText() {
    const color = randomColor();
    App - box.background - color = color;
    App - button - hex = color;
  };*/
}

/* can I do like setColor&Textfunction that changes the box color and adds the text on the button?*/
