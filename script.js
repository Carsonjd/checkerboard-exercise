// Your JS goes here
// var randomColor = require('randomcolor'); // import the script
// var color = randomColor(); // a hex code for an attractive color
//

var tileArr = [];
for(var i=0;i<81;i++){
  var randoC = '#' + Math.ceil(1000000 * Math.random())
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  tile.display = 'float';
  tile.style.float = 'left';
  tileArr.push(tile);
  tile.style.backgroundColor = randoC
};

for(var i=0;i<tileArr.length;i++){
  document.body.prepend(tileArr[i]);
}

function tileReplace(){
  var randoC = '#' + Math.ceil(1000000 * Math.random())
  var randoIndex = Math.ceil(Math.random()*100)
  var newTileColor = tileArr[randoIndex].style.backgroundColor = randoC
}
var intervalID = window.setInterval(tileReplace, 10);
