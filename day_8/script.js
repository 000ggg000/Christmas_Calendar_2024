const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10;

// function getDistance(x1, y1, x2, y2) {
//   let x =  x2 - x1;
//   let y = y2 - y1;

//   return Math.sqrt(x * x + y * y);
// }

function getDistance(point1, point2) {
  let x =  point2[0] - point1[0];
  let y = point2[1] - point1[1];

  return Math.sqrt(x * x + y * y);
}

function totalDistance(houses){
  let sum = 0;

  for (let i = 0; i < houses.length-1; i++) {
  sum = sum + getDistance(houses[i],houses[i+1]);
  }

  return sum;
}
function  calculateDeliveryTime(houses, speed){
houses.unshift([0,0]);
houses.push([0,0]);

  totalTime = Math.round(totalDistance(houses)) / speed;
  return totalTime;
}

document.getElementById("totalTime").innerHTML = ' 🕰️ Total time in hours to visit all houses and return: '+ calculateDeliveryTime(houses, speed) + ' h ⏱️';

