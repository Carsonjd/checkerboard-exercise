// Your JS goes here
// document.addEventListener('DOMContentLoaded', function () {
// });

for(var i=0;i<81;i++){
  var randoC = '#' + Math.ceil(1000000 * Math.random())
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  document.body.prepend(tile);
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  tile.display = 'float';
  tile.style.float = 'left';
    if(i%2 === 0){
        tile.style.backgroundColor = randoC;
        }
    if(i%2 !== 0){
      tile.style.backgroundColor = randoC;
    }
};
