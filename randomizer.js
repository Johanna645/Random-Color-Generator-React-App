//macht ein random farbe aus und hat einen click-me button drin

const randomColor = require('randomcolor'); // import the script

const chalk = require('chalk'); // library for the colouring of the texts

//Ok, also was ich hier brauche ist nicht unbedingt ein hashtag-box, sondern ein object dass sich mit dem random farbe ändert und die farbe in hex-form angezeigt wird

console.log(process.argv[2]);
const input = process.argv[2];
const color = randomColor({ hue: input });
console.log(color);

function drawLongLine() {
  //habe das jetzt nur gespeichert um zu erinnern wie das chalk funktionierte, falls ich das brauche
  let longStringOfHashtags = '';
  let i = 0;
  do {
    longStringOfHashtags = longStringOfHashtags + '#';
    i++;
  } while (i < 31);

  console.log(chalk.hex(color)(longStringOfHashtags));
}
