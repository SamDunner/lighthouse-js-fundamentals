console.log(5 * "3");
console.log(5 + "3");
console.log(5 % "3");

console.log("15" === 15);
console.log(15 === 15);

var a = 3;
var b = 4;
b = a;
console.log(b);

console.log("Bob" || " Marley");

console.log("Jeremy" > "Khurram");

var sum = 3 + 2;

var doubleSum = function(a, b) {
  var sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);

function areMultiples(bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));

var seasons = ["spring", "summer", "fall"];
var length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);
