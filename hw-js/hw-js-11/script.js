//1//
// function getPromise(message, delay) {
//     return new Promise(resolve => setTimeout(resolve, delay, message));
//   }
//   getPromise("test promise", 2000).then(data => {
//     console.log(data);        
//   });


//2//
// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//       const isNumericArray = arr.every(item => typeof item === 'number');
      
//       if (isNumericArray) {
//         const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//         resolve(product);
//       } else {
//         reject("Error! Incorrect array!");
//       }
//     });
//   }

//   calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60

// calcArrProduct([5, "user2", 7, 12]).catch(error => console.log(error));
// // "Error! Incorrect array!"

//3//
// function promptNumber() {
//     return new Promise(function(resolve, reject) {
//       let number;
//       const askNumber = function() {
//         number = prompt("Please enter a number:");
//         if (isNaN(number)) {
//           askNumber();
//         } else {
//           resolve(Number(number));
//         }
//       };
//       askNumber();
//     });
//   }
  
//   promptNumber()
//     .then(function(result) {
//       console.log(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

//4//
// function delay(i, time) {
//     return new Promise(resolve => setTimeout(() => resolve(i), time));
//   }
  
//   async function showNumbers() {
//     for (let i = 0; i <= 9; i++) {
//       await delay(i, Math.floor(Math.random() * 3000));
//       console.log(i);
//     }
//   }
  
//   showNumbers();