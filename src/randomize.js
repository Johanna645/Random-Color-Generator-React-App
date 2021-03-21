const randomColor = require('randomcolor');

export default function randomize() {
  const luminosity = prompt('Please enter luminosity value: dark or light');
  const color = randomColor({ luminosity: luminosity, hue: 'random' });
  return color;
}
