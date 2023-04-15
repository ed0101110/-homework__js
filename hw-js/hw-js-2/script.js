// 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c
if (a < b && b < c) {
    console.log("Висловлювання a < b < c істинне");
  } else {
    console.log("Висловлювання a < b < c хибне");
  }



//2//
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x - y + "test";
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3//
let age = prompt("Скільки вам років?");
console.log(age >= 18 ? "Ви досягли повнолітнього віку" : "Ви ще надто молоді");

//4//
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let count = {};
let maxCount = 0;
let mostFrequent;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (count[num] === undefined) {
    count[num] = 1;
  } else {
    count[num]++;
  }
  if (count[num] > maxCount) {
    maxCount = count[num];
    mostFrequent = num;
  }
}
arr = arr.filter(num => num !== mostFrequent);
let data = [mostFrequent];

console.log(data); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

//5//
let a = parseFloat(prompt("Введіть довжину сторони a:"));
let b = parseFloat(prompt("Введіть довжину сторони b:"));
let c = parseFloat(prompt("Введіть довжину сторони c:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  console.log("Incorrect data");
} else {
  let p = (a + b + c) / 2;

  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  console.log("Площа трикутника: " + area.toFixed(3));

  if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    console.log("Цей трикутник є прямокутним");
  } else {
    console.log("Цей трикутник не є прямокутним");
  }
}

//6//
let currentTime = new Date().getHours(); 

if (currentTime >= 23 || currentTime < 5) {
  console.log("Доброї ночі");
} else if (currentTime >= 5 && currentTime < 11) {
  console.log("Доброго ранку");
} else if (currentTime >= 11 && currentTime < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}