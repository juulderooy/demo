// var container = document.getElementById("container")
// var xPos = 0;
//
// function float(){
//   console.log(xPos);
//   container.style.left = xPos + "px";
//   container.style.width = xPos + "px";
//   xPos += 1;
//   if(xPos > 1000 || xPos < 100){
//               speed = -speed;
//           }
//
// }
//
// setInterval(float,10)
//
// ------------------------------------------------------------------

window.addEventListener('load', init);

function init() {
  var container = document.getElementById('container');
  var xPos = 101;
  var speed = 1;
  function schuifVerder() {
if(700 == xPos || 100 == xPos) {
    speed = -speed;
}
      xPos += speed;
      container.style.marginLeft = xPos + 'px';

  }
  var varen = setInterval(schuifVerder, 1);

}
